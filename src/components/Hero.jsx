import { Box, Typography, Button } from "@mui/material";
import heroImage from "../assets/hero.jpg"; // ✅ استيراد الصورة

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        backgroundColor: "#fff6f2",
        flexDirection: { xs: "column", md: "row" },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* النصوص */}
      <Box sx={{ maxWidth: 500 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#ff671f",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          DUNKIN' REWARDS
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#2c2c2c",
            mb: 2,
            fontSize: { xs: "1.5rem", md: "2.2rem" },
          }}
        >
          MAKE THE MOST OF YOUR DUNKIN' RUN!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "#333",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Calling all Dunkin’ fans! Join Dunkin’ Rewards today to enjoy exclusive
          offers and start earning points toward{" "}
          <b>FREE food and drinks.</b> The more you visit, the more benefits you unlock!
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E11383",
            px: { xs: 3, md: 4 },
            py: { xs: 1, md: 1.5 },
            fontWeight: "bold",
            borderRadius: "25px",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          JOIN NOW
        </Button>
      </Box>

      {/* الصورة */}
      <Box
        component="img"
        src={heroImage} // ✅ استخدام الصورة المستوردة
        alt="Dunkin Drink"
        sx={{
          maxWidth: { xs: "100%", md: "400px" },
          width: "100%",
          borderRadius: "12px",
          mt: { xs: 4, md: 0 },
        }}
      />
    </Box>
  );
}
