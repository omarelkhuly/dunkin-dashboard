// src/components/Footer.jsx
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import PinterestIcon from "@mui/icons-material/Pinterest";
import XIcon from "@mui/icons-material/X"; // تويتر (X)
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // مؤقت لتويتر

import JetBlueLogo from "../assets/JetBlue_new.png";
import BRLogo from "../assets/BR_Logo_New.png";
import AmexLogo from "../assets/Amex.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f9f9f9",
        borderTop: "1px solid #ddd",
        py: 6,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        {/* الجزء العلوي: روابط سريعة + سوشيال ميديا */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mb: 4,
          }}
        >
          {/* Quick Links */}
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              QUICK LINKS
            </Typography>

            {/* المجموعة الأولى */}
            <Box sx={{ display: "flex", gap: 3, mb: 1 }}>
              <Link href="/press" underline="hover" color="inherit">
                Press Room
              </Link>
              <Link href="/app" underline="hover" color="inherit">
                Mobile App
              </Link>
              <Link href="/corporate" underline="hover" color="inherit">
                Corporate
              </Link>
              <Link href="/sustainability" underline="hover" color="inherit">
                Sustainability
              </Link>
            </Box>

            {/* المجموعة الثانية */}
            <Box sx={{ display: "flex", gap: 3 }}>
              <Link href="/about" underline="hover" color="inherit">
                About Us
              </Link>
              <Link href="/franchising" underline="hover" color="inherit">
                Franchising
              </Link>
              <Link href="/contact" underline="hover" color="inherit">
                Contact Us
              </Link>
              <Link href="/sitemap" underline="hover" color="inherit">
                Site Map
              </Link>
            </Box>
          </Box>

          {/* Follow Us */}
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              FOLLOW US
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton color="inherit">
                <XIcon />
              </IconButton>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <PinterestIcon />
              </IconButton>
              <IconButton color="inherit">
                <Instagram />
              </IconButton>
              <IconButton color="inherit">
                <YouTube />
              </IconButton>
              <IconButton color="inherit">
                <MusicNoteIcon /> {/* استبدل لاحقًا بـ TikTok SVG */}
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* شركاء */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            my: 4,
            borderTop: "1px solid #ddd",
            borderBottom: "1px solid #ddd",
            py: 3,
          }}
        >
          <img src={JetBlueLogo} alt="JetBlue" style={{ height: "40px" }} />
          <img src={BRLogo} alt="Baskin Robbins" style={{ height: "50px" }} />
          <img src={AmexLogo} alt="American Express" style={{ height: "40px" }} />
        </Box>

        {/* روابط تحتية */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            mb: 2,
          }}
        >
          <Link href="/terms" underline="hover" color="inherit" variant="body2">
            Terms of Use
          </Link>
          <Link href="/privacy" underline="hover" color="inherit" variant="body2">
            Privacy Policy
          </Link>
          <Link href="/cookies" underline="hover" color="inherit" variant="body2">
            Cookie Settings
          </Link>
          <Link href="/choices" underline="hover" color="inherit" variant="body2">
            Your Privacy Choices
          </Link>
          <Link href="/health" underline="hover" color="inherit" variant="body2">
            Consumer Health Data
          </Link>
          <Link href="/donotsell" underline="hover" color="inherit" variant="body2">
            Do Not Sell My Info
          </Link>
          <Link href="/ads" underline="hover" color="inherit" variant="body2">
            Your Ad Choices
          </Link>
          <Link href="/supply" underline="hover" color="inherit" variant="body2">
            CA Transparency in Supply Chains Act
          </Link>
          <Link href="/accessibility" underline="hover" color="inherit" variant="body2">
            Web Accessibility
          </Link>
        </Box>

        {/* حقوق النشر */}
        <Typography
          variant="caption"
          sx={{ display: "block", textAlign: "center", color: "text.secondary" }}
        >
          © {new Date().getFullYear()} DD IP Holder LLC
        </Typography>
      </Container>
    </Box>
  );
}
