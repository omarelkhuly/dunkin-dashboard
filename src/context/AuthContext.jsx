// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // تحميل بيانات المستخدم من جدول app_users
  const fetchProfile = async (authId) => {
    const { data, error } = await supabase
      .from("app_users")
      .select("*")
      .eq("auth_id", authId)
      .single();

    if (error) {
      console.error("Fetch profile error:", error.message);
      return null;
    }
    setProfile(data);
    return data;
  };

  // تسجيل الدخول
  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      if (data.user) {
        setUser(data.user);
        const prof = await fetchProfile(data.user.id);
        return prof;
      }
    } catch (err) {
      console.error("Login error:", err.message);
      throw err;
    }
  };

  // تسجيل مستخدم جديد
  const register = async (email, password, fullName, role = "customer") => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        console.error("Supabase signUp error:", error.message);
        throw new Error(error.message); // 🟥 نرجّع الرسالة لواجهة Register.jsx
      }

      if (data.user) {
        const { error: insertError } = await supabase.from("app_users").insert([
          {
            auth_id: data.user.id,
            full_name: fullName,
            email: email,
            role: role,
          },
        ]);
        if (insertError) {
          console.error("Insert profile error:", insertError.message);
          throw new Error("Failed to save profile data");
        }

        setUser(data.user);
        await fetchProfile(data.user.id);
      }
    } catch (err) {
      console.error("Register error:", err.message);
      throw err; // 🟥 ده اللي بيرجّع الرسالة لواجهة Register.jsx
    }
  };

  // تسجيل الخروج
  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      localStorage.clear();
      setUser(null);
      setProfile(null);

      console.log("✅ Logout successful, session cleared");
    } catch (err) {
      console.error("❌ Logout error:", err.message);
    }
  };

  // متابعة حالة المستخدم
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user) {
        setUser(data.session.user);
        await fetchProfile(data.session.user.id);
      }
      setLoading(false);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          setUser(session.user);
          await fetchProfile(session.user.id);
        } else {
          setUser(null);
          setProfile(null);
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, profile, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
