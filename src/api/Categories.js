// src/api/categories.js
import { supabase } from "../supabaseClient"

// جلب الفئات
export const fetchCategories = async () => {
  const { data, error } = await supabase.from("categories").select("*")
  if (error) throw error
  return data
}