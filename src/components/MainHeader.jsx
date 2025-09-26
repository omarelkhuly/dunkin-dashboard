// src/components/MainHeader.jsx
import { useState, useEffect, useRef } from "react"
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { Link, useNavigate } from "react-router-dom"
import MenuDropdown from "./MenuDropdown"

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false)   // لفتح القائمة الكبيرة
  const [drawerOpen, setDrawerOpen] = useState(false) // لفتح Drawer الموبايل
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const navigate = useNavigate()
  const isMobile = useMediaQuery("(max-width:900px)") // ✅ تحديد وضع الموبايل

  // إغلاق القائمة الكبيرة عند الضغط خارجها
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [menuOpen])

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          top: "40px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* زر MENU (يفتح MenuDropdown سواء موبايل أو ديسكتوب) */}
          <Button
            ref={buttonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            sx={{
              fontWeight: "bold",
              color: menuOpen ? "#E11383" : "#000",
              borderBottom: menuOpen ? "2px solid #E11383" : "none",
            }}
          >
            MENU
          </Button>

          {/* اللوجو */}
          <Typography
            component={Link}
            to="/"
            sx={{
              fontSize: { xs: "20px", md: "24px" },
              fontWeight: "bold",
              color: "#FF671F",
              textDecoration: "none",
            }}
          >
            DUNKIN'
          </Typography>

          {/* باقي العناصر */}
          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 3 }}>
              <Button component={Link} to="/location" sx={{ fontWeight: "bold", color: "#000" }}>
                LOCATIONS
              </Button>
              <Button component={Link} to="/Delvery" sx={{ fontWeight: "bold", color: "#000" }}>
                DELIVERY
              </Button>
              <Button sx={{ fontWeight: "bold", color: "#000" }} onClick={() => navigate("/rewards")}>
                DUNKIN' REWARDS
              </Button>
              <Button component={Link} to="/DunkinCard" sx={{ fontWeight: "bold", color: "#000" }}>
                DUNKIN' CARD
              </Button>
              <Button component={Link} to="/cart" sx={{ fontWeight: "bold", color: "#000" }}>
                SHOP
              </Button>
            </Box>
          ) : (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* مسافة لتحت الهيدر */}
      <Toolbar sx={{ minHeight: "88px" }} />

      {/* القائمة الكبيرة (MenuDropdown) */}
      {menuOpen && (
        <Box ref={menuRef}>
          <MenuDropdown onClose={() => setMenuOpen(false)} />
        </Box>
      )}

      {/* Drawer للموبايل (بدون زر MENU) */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            <ListItem button component={Link} to="/location">
              <ListItemText primary="LOCATIONS" />
            </ListItem>
            <ListItem button component={Link} to="/Delvery">
              <ListItemText primary="DELIVERY" />
            </ListItem>
            <ListItem button onClick={() => navigate("/rewards")}>
              <ListItemText primary="DUNKIN' REWARDS" />
            </ListItem>
            <ListItem button component={Link} to="/DunkinCard">
              <ListItemText primary="DUNKIN' CARD" />
            </ListItem>
            <ListItem button component={Link} to="/cart">
              <ListItemText primary="SHOP" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}
