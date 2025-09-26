// src/pages/Menu.jsx
import { useEffect, useState } from "react"
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material"
import { fetchCategories } from "../api/Categories"
import { fetchProducts } from "../api/products"

export default function Menu() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories()
        console.log("📌 Categories API Response:", data) // Debug
        // لو الداتا جايه كـ { data: [...] }
        setCategories(data.data || data)
      } catch (err) {
        console.error("❌ Error fetching categories:", err)
      }
    }
    loadCategories()
  }, [])

  const handleSelectCategory = async (catId) => {
    setSelectedCategory(catId)
    try {
      const data = await fetchProducts(catId)
      setProducts(data)
    } catch (err) {
      console.error("Error fetching products:", err)
    }
  }

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))
    alert(`${product.name} added to cart!`)
  }

  return (
    <>
      {/* 🔹 Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 200, md: 300 },
          backgroundImage: `url('https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign/homepage/img_Menu_mealDeal_Desktop@2x.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", bgcolor: "rgba(0,0,0,0.5)", p: 2, borderRadius: 2 }}
        >
          Explore Our Menu
        </Typography>
      </Box>

      {/* 🔹 Categories */}
      {!selectedCategory && (
        <Box sx={{ p: { xs: 2, md: 5 } }}>
          <Typography variant="h4" gutterBottom>
            Categories
          </Typography>
          <Grid container spacing={3}>
            {categories.map((cat) => (
              <Grid item xs={12} sm={6} md={4} key={cat.id}>
                <Card
                  sx={{
                    cursor: "pointer",
                    textAlign: "center",
                    "&:hover": { boxShadow: 6 },
                  }}
                  onClick={() => handleSelectCategory(cat.id)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={cat.image}
                    alt={cat.name}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {cat.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* 🔹 Products */}
      {selectedCategory && (
        <Box sx={{ p: { xs: 2, md: 5 }, bgcolor: "#fafafa", borderRadius: 2 }}>
          <Button
            variant="outlined"
            sx={{ mb: 3 }}
            onClick={() => setSelectedCategory(null)}
          >
            ⬅ Back to Categories
          </Button>

          <Typography variant="h4" gutterBottom>
            Products
          </Typography>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="160"
                    image={product.image_url}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="subtitle1" sx={{ mt: 1 }}>
                      {product.price} EGP
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  )
}
