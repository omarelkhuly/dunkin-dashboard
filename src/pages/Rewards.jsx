// src/pages/Rewards.jsx
import { Box, Typography, Container, Grid } from "@mui/material";

export default function Rewards() {
  return (
    <>
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
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "black" }}>
          THE FUN STARTS HERE <br/>
          Dunkin' Rewards
        </Typography>
      </Box>
    <Container sx={{ py: 5 }}>
      {/* عنوان الصفحة */}
      <Typography variant="body1" sx={{ mb: 4 }}>
        Earn points every time you order ahead in the app or scan your ID in-store.
        Redeem your points for free drinks, food, and exclusive offers. The more you
        visit, the more rewards you unlock!
      </Typography>

      {/* بعض المميزات */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold">
            ⭐ Earn Points
          </Typography>
          <Typography variant="body2">
            Get 10 points per $1 spent when you pay using the app or scan your Rewards ID.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold">
            🎁 Redeem Rewards
          </Typography>
          <Typography variant="body2">
            Redeem points starting at just 150 points — that’s only $15 spent!
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold">
            🚀 Boosted Status
          </Typography>
          <Typography variant="body2">
            Visit 12 times a month to boost your status and earn faster.
          </Typography>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}
