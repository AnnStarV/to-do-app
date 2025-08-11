import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import WbSunny from "@mui/icons-material/WbSunny";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import Grade from "@mui/icons-material/Grade";
import Analytics from "@mui/icons-material/Analytics";
import Archieve from "@mui/icons-material/Archive";

const menuItemsPrimary = [
  { label: "Create", icon: <AddCircleOutline />, path: "/create" },
  { label: "My Day", icon: <WbSunny />, path: "/myDay" },
  { label: "Important", icon: <Grade />, path: "/important" },
  { label: "Stats", icon: <Analytics />, path: "/stats" },
  { label: "Archived", icon: <Archieve />, path: "/archived" },
];

const menuItemsSecondary = [
  { label: "Work", icon: "/images/work.png", path: "/work" },
  { label: "Home", icon: "/images/home.png", path: "/home" },
  { label: "Hobby", icon: "/images/hobby.png", path: "/hobby" },
  { label: "Another", icon: "/images/another.png", path: "/another" },
];

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (value) => () => {
    setOpen(value);
  };

  const handleNavigate = (path) => () => {
    navigate(path);
    setOpen(false);
    setVisible(true);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "60px",
          left: "40px",
          zIndex: 1300,
        }}
      >
        <IconButton
          onClick={() => {
            toggleDrawer(true)();
            setTimeout(() => setVisible(false), 10);
          }}
          sx={{
            opacity: visible ? 1 : 0,
            visibility: visible ? "visible" : "hidden",
            transition: "opacity 0.1s ease, visibility 0.1s ease",
            backgroundColor: "#F0F0F0",
            color: "#262626",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#edcc7b",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        open={open}
        onClose={() => {
          toggleDrawer(false)();
          setTimeout(() => setVisible(true), 100);
        }}
        sx={{ zIndex: 5000 }}
      >
        <Box sx={{ width: 280 }} role="presentation">
          <Box sx={{ paddingLeft: "20px" }} role="presentation">
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, mt: 2, marginLeft: 2 }}
            >
              Menu
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontWeight: "bold",
                mb: 1,
                mt: 2,
                display: "inline-block",
                marginLeft: 0,
                color: "#262626",
                textTransform: "uppercase",
              }}
            >
              Tasks
            </Typography>
            <List>
              {menuItemsPrimary.map(({ label, icon, path }) => (
                <ListItem
                  key={label}
                  disablePadding
                  onClick={handleNavigate(path)}
                >
                  <ListItemButton selected={location.pathname === path}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Divider />
          <Box sx={{ paddingLeft: "20px" }} role="presentation">
            <Typography
              variant="caption"
              sx={{
                fontWeight: "bold",
                mb: 1,
                mt: 3,
                marginLeft: 0,
                display: "inline-block",
                color: "#262626",
                textTransform: "uppercase",
              }}
            >
              Categories
            </Typography>
            <List>
              {menuItemsSecondary.map(({ label, icon, path }) => (
                <ListItem
                  key={label}
                  disablePadding
                  onClick={handleNavigate(path)}
                >
                  <ListItemButton selected={location.pathname === path}>
                    <ListItemIcon>
                      {" "}
                      <img
                        src={icon}
                        alt={label}
                        style={{ width: "24px", height: "24px" }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
