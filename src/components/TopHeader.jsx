// src/components/TopHeader.jsx
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function TopHeader() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout(); // من AuthContext
      navigate("/login"); // يرجع للهوم بعد تسجيل الخروج
    } catch (err) {
      console.error("Logout error:", err.message || err);
    }
  };

  return (
    <AppBar
      position="fixed" // يخليه ثابت فوق
      color="default"
      elevation={0}
      sx={{
        borderBottom: "1px solid #eee",
        backgroundColor: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 2, // يخليه فوق أي عنصر تاني
        height: 40,
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "flex-end",
          gap: 2,
          minHeight: "40px !important", // تقليل الارتفاع
        }}
      >
        <Typography
          variant="body2"
          sx={{
            cursor: "pointer",
            fontSize: { xs: "12px", sm: "14px" },
            color: "#555",
          }}
        >
          Careers
        </Typography>

        {!user ? (
          <>
            {/* زرار Join Rewards */}
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: { xs: "11px", sm: "13px" },
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.2, sm: 0.5 },
              }}
              onClick={() => navigate("/register")}
            >
              Join Rewards
            </Button>

            {/* زرار Sign In */}
            <Button
              variant="contained"
              size="small"
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: "#E11383",
                "&:hover": { backgroundColor: "#c40e6d" },
                fontSize: { xs: "11px", sm: "13px" },
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.2, sm: 0.5 },
              }}
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            size="small"
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "bold",
              backgroundColor: "#E11383",
              "&:hover": { backgroundColor: "#c40e6d" },
              fontSize: { xs: "11px", sm: "13px" },
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.2, sm: 0.5 },
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
