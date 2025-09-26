// src/components/MenuDropdown.jsx
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// ================= Bagels & Muffins =================
import bagel1 from "../assets/bagels & muffins/BagelCreamCheese_600x460@2x.png";
import bagel2 from "../assets/bagels & muffins/DD_0120_EnglishMuffinWithButter_500px copy@2x.png";
import bagel3 from "../assets/bagels & muffins/DNK00826_4Muffins_500px@2x.png";
import bagel4 from "../assets/bagels & muffins/Other Bakery@2x.png";

// ================= Brew at Home =================
import brew1 from "../assets/brew at home/DD_0120_GenericDrinksDonuts_MerchHeader_KCUP_500px@2x.png";
import brew2 from "../assets/brew at home/DNK01030_POC_OriginalBlend_lib_RGB copy@2x.png";
import brew3 from "../assets/brew at home/iStock-91608462_teacup_500px copy@2x.png";

// ================= Donuts =================
import donut1 from "../assets/donuts/DNK00834_VanillaFrostedSprinklesDonut_500px@2x.png";
import donut2 from "../assets/donuts/DNK00840_5Munchkins_lib_RGB@2x.png";

// ================= Sandwiches =================
import sand1 from "../assets/sandwiches/DNK00671_EngMuffinTurkeySausageEggCheese_lib_RGB copy@2x.png";
import sand2 from "../assets/sandwiches/DNK00672_EngMuffinEggCheese_lib_RGB copy@2x.png";
import sand3 from "../assets/sandwiches/DNK00673_CroissantSausageEggCheese_lib_RGB@2x.png";
import sand4 from "../assets/sandwiches/DNK00686_BaconEggCheeseBagel_200px@2x.png";
import sand5 from "../assets/sandwiches/SourdoughBNT.png";

// ================= Snacks =================
import snack1 from "../assets/snacks/BagelMinisPlain.png";
import snack2 from "../assets/snacks/DNK00688_BaconEggCheeseWakeUpWrap_500px copy@2x.png";
import snack3 from "../assets/snacks/DNK00696_HashBrowns_lib_RGB copy@2x.png";
import snack4 from "../assets/snacks/snackin-bacon.png";

// ================= Coffee (tap_coffee) =================
import coffee1 from "../assets/tap_cofee/iced_coffee.png";
import coffee2 from "../assets/tap_cofee/iced_americano.png";
import coffee3 from "../assets/tap_cofee/hot-coffee.png";
import coffee4 from "../assets/tap_cofee/hot-americano.png";
import coffee5 from "../assets/tap_cofee/cold_brew.png";

// ================= Teas & More =================
import tea1 from "../assets/teas & more/SPARKD_Rectangle.png";
import tea2 from "../assets/teas & more/iced-tea.png";
import tea3 from "../assets/teas & more/hot-tea.png";
import tea4 from "../assets/teas & more/hot-chocolate.png";
import tea5 from "../assets/teas & more/dunkin-refresher.png";

// 🔹 ربط أسماء التابات مع الصور
const menuData = {
  "Bagels & Muffins": [bagel1, bagel2, bagel3, bagel4],
  Donuts: [donut1, donut2],
  Sandwiches: [sand1, sand2, sand3, sand4, sand5],
  Snacks: [snack1, snack2, snack3, snack4],
  "Brew at Home": [brew1, brew2, brew3],
  Coffee: [coffee1, coffee2, coffee3, coffee4, coffee5],
  "Teas & More": [tea1, tea2, tea3, tea4, tea5],
};

export default function MenuDropdown({ onClose }) {
  const [tab, setTab] = useState(Object.keys(menuData)[0]);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "absolute",
        top: "64px",
        left: 0,
        width: "100%",
        zIndex: 1000,
        px: 0,
        py: "25px",
        backgroundColor: "#fff",
      }}
    >
      {/* Tabs */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)", 
            sm: "repeat(3, 1fr)", 
            md: "repeat(4, 1fr)", 
          },
          gap: 2,
          px: { xs: 2, sm: 4 },
          mb: 3,
        }}
      >
        {Object.keys(menuData).map((key) => (
          <Box
            key={key}
            onClick={() => setTab(key)}
            sx={{
              textAlign: "center",
              py: 1,
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor: tab === key ? "#FCE4EC" : "#fafafa",
              border: tab === key ? "2px solid #E11383" : "1px solid #ddd",
              "&:hover": {
                backgroundColor: "#f9f9f9",
              },
            }}
          >
            {key}
          </Box>
        ))}
      </Box>

      {/* الصور الخاصة بالتاب المختار */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)", 
            sm: "repeat(3, 1fr)", 
            md: "repeat(4, 1fr)", 
          },
          gap: 3,
          mt: 2,
          px: { xs: 2, sm: 4 },
          pb: 4,
        }}
      >
        {menuData[tab].map((src, i) => (
          <Box
            key={i}
            sx={{ textAlign: "center", cursor: "pointer" }}
            onClick={() => navigate("/menu")} // ✅ يفتح صفحة Menu.jsx
          >
            <img
              src={src}
              alt={tab + " item"}
              style={{
                width: "120px",
                height: "auto",
                objectFit: "contain",
              }}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {tab} {i + 1}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
