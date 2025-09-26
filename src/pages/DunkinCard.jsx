// src/pages/DunkinCard.jsx
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material"
import TopHeader from "../components/TopHeader"
import MainHeader from "../components/MainHeader"
import Footer from "../components/Footer"

// الصور
import heroBg from "../assets/Get _a_Dunkin_Card_Desktop.png"
import teaBg from "../assets/tea_on_bg-dsk.png"

import imgGiveGift from "../assets/GiveGiftofGo.svg"
import imgMailGift from "../assets/Mail_A_Gift_card.svg"
import imgApp from "../assets/GiveGiftofGo.svg"
import imgBulk from "../assets/Purchase_Dunkin_Cards.svg"

export default function DunkinCard() {
  return (
    <>
      <TopHeader />
      <MainHeader />

      {/* 🔹 Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 250, md: 400 },
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "black",
          mb: 5,
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", bgcolor: "rgba(255,255,255,0.7)", p: 2, borderRadius: 2 }}
        >
          GET A DUNKIN' CARD
        </Typography>
      </Box>

      {/* 🔹 Section One (Cards) */}
      <Box sx={{ px: { xs: 2, md: 8 }, pb: 8 }}>
        <Grid container spacing={4}>
          {[
            {
              img: imgGiveGift,
              title: "GIVE THE GIFT OF DUNKIN'",
              text: "Send an eGift card right to their inbox or buy one for your daily Dunkin’ run",
              btn: "BUY NOW",
            },
            {
              img: imgMailGift,
              title: "MAIL A GIFT CARD",
              text: "Send a physical gift card in the mail – perfect for any occasion",
              btn: "BUY NOW",
            },
            {
              img: imgApp,
              title: "USE THE DUNKIN' APP",
              text: "Send eGift cards, check your balance, reload funds and more",
              btn: "GET THE APP",
            },
            {
              img: imgBulk,
              title: "PURCHASE DUNKIN' CARDS IN BULK",
              text: "Reward and motivate employees, customers, and partners with Dunkin’ eGifts or physical cards",
              btn: "BUY IN BULK",
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{ textAlign: "center", height: "100%", p: 2 }}>
                <CardMedia component="img" height="120" image={item.img} alt={item.title} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {item.text}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      fontWeight: "bold",
                      backgroundColor: "#f58220",
                      "&:hover": { backgroundColor: "#d96d17" },
                    }}
                  >
                    {item.btn}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 🔹 Section Two */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 250, md: 400 },
          backgroundImage: `url(${teaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          px: { xs: 2, md: 0 },
          color: "black",
        }}
      >
        <Box sx={{ bgcolor: "rgba(255,255,255,0.85)", p: 3, borderRadius: 2, maxWidth: 400 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            ALREADY HAVE A DUNKIN’ CARD?
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#f58220", fontWeight: "bold", mb: 2 }}
          >
            CHECK BALANCE OR ADD VALUE
          </Button>
          <Typography
            variant="body2"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Make changes to your account
          </Typography>
        </Box>
      </Box>

      <Footer />
    </>
  )
}
