// src/components/FindDalvery.jsx
import React, { useState } from "react";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import DunkinLogo from "../assets/DunkinDelivers_Desktop.svg";
import DeliveryImage from "../assets/DeliveryImage_Desktop.png";

export default function FindDalvery() {
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if (!address.trim()) {
      setError(true);
    } else {
      setError(false);
      // هنا حط logic الاتصال بالـ API أو اللي انت عايزه
      console.log("Searching for:", address);
    }
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 6,
        px: 2,
      }}
    >
      {/* اللوجو */}
      <Box
        component="img"
        src={DunkinLogo}
        alt="Dunkin Delivers"
        sx={{ maxWidth: 300, width: "100%", mb: 2 }}
      />

      {/* الصور (قهوة، دونت، كرواسون) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <Box component="img" src={DeliveryImage} alt="Delivery Items" sx={{ height: 80 }} />
      </Box>

      {/* النص */}
      <Typography variant="h6" gutterBottom>
        Enter your location to find who delivers Dunkin’ in your area
      </Typography>

      {/* البحث */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Enter address to search"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          error={error}
          helperText={error ? "Please enter an address to search" : ""}
          sx={{ width: "300px" }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            bgcolor: "#d7366f",
            "&:hover": { bgcolor: "#b52a5a" },
          }}
        >
          SEARCH
        </Button>
      </Stack>

      {/* رسالة خطأ إضافية */}
      {error && (
        <Typography color="error" sx={{ mt: 1 }}>
          Sorry, we're not able to find a Dunkin’ Delivery partner within your radius. 
          Please try another location.
        </Typography>
      )}
    </Box>
  );
}
