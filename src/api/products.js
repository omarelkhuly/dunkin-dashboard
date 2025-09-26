// src/api/products.js
import { supabase } from "../supabaseClient"

// جلب المنتجات مع الفئة المرتبطة
export const fetchProducts = async (categoryId = null) => {
  let query = supabase.from("products").select("*")
  if (categoryId) query = query.eq("category_id", categoryId)

  const { data, error } = await query
  if (error) throw error
  return data
}
