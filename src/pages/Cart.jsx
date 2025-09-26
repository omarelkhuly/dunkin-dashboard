// src/pages/Cart.jsx
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // 🟢 هنا ممكن تخزن الـ cart في localStorage أو context
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* 🔹 Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 180, md: 280 },
          backgroundImage: `url('https://www.dunkindonuts.com/content/dam/dd/img/backgrounds/modal-bg/imgHero_Unauth_Desktop.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" , color: "black"}}>
          THE FUN STARTS HERE
        </Typography>
      </Box>

      {/* 🔹 محتوى الكارت */}
      <Box sx={{ p: { xs: 2, md: 5 } }}>
        {cartItems.length === 0 ? (
          <Typography variant="h6">Your cart is empty.</Typography>
        ) : (
          <>
            <Grid container spacing={3}>
              {cartItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card sx={{ height: "100%" }}>
                    <CardMedia
                      component="img"
                      height="160"
                      image={item.image}
                      alt={item.name}
                    />
                    <CardContent>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ mt: 1 }}>
                        {item.price} EGP
                      </Typography>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ mt: 2 }}
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* 🔹 المجموع */}
            <Box sx={{ mt: 4, textAlign: "right" }}>
              <Typography variant="h5">Total: {total} EGP</Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => alert("Proceeding to checkout...")}
              >
                Checkout
              </Button>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
