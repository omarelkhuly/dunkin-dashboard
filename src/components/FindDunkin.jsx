// src/components/FindDunkin.jsx
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import DoneIcon from "@mui/icons-material/Done";

export default function FindDunkin() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const filters = [
    "Dine-In",
    "Drive Thru",
    "Curbside PickUp",
    "On-the-Go Mobile Ordering",
    "Free WiFi",
    "Baskin-Robbins",
    "Accepts Dunkin’ Cards",
    "Limited Menu",
    "K-Cups Pods",
    "Open 24/7",
    "On Tap",
    "Walk-Up Window",
    "Kosher",
    "Kiosk",
  ];

  return (
    <Box sx={{ textAlign: "center", py: 6 }}>
      {/* العنوان */}
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
        FIND YOUR DUNKIN'
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Get directions and details on the Dunkin’ nearest to you!
      </Typography>

      {/* البحث */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 4 }}>
        <TextField
          placeholder="Location Search"
          variant="outlined"
          size="small"
          sx={{ width: 300, bgcolor: "white" }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#e11383",
            "&:hover": { backgroundColor: "#c40e6d" },
          }}
        >
          SEARCH
        </Button>

        {/* Filters */}
        <IconButton
          onClick={handleClick}
          sx={{ fontWeight: "bold", color: "#000" }}
        >
          <FilterListIcon sx={{ mr: 1 }} />
          FILTERS
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {filters.map((filter) => (
            <MenuItem key={filter} onClick={() => toggleFilter(filter)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={selectedFilters.includes(filter)}
                  tabIndex={-1}
                  disableRipple
                  icon={<Box sx={{ width: 20, height: 20, border: "1px solid gray", borderRadius: "4px" }} />}
                  checkedIcon={<DoneIcon color="primary" />}
                />
              </ListItemIcon>
              <ListItemText primary={filter} />
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* الرسالة */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        LET’S TRY AGAIN
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 500, mx: "auto" }}>
        We were unable to find a Dunkin’ within your radius that meets the search criteria. 
        Please enter another location or modify your search criteria to find a restaurant nearby.
      </Typography>
    </Box>
  );
}
