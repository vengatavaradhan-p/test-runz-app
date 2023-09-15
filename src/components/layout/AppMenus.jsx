import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import mypage from "../../assets/images/mypage.svg";
import runs from "../../assets/images/runs.svg";
import procedures from "../../assets/images/procedures.svg";
import projects from "../../assets/images/projects.svg";
import assets from "../../assets/images/assets.svg";
import settings from "../../assets/images/settings.svg";
import billing from "../../assets/images/billings.svg";
import mypageActive from "../../assets/images/mypage-active.svg";
import runsActive from "../../assets/images/runs-active.svg";
import proceduresActive from "../../assets/images/procedures-active.svg";
import projectsActive from "../../assets/images/projects-active.svg";
import assetsActive from "../../assets/images/assets-active.svg";
import settingsActive from "../../assets/images/settings-active.svg";
import billingActive from "../../assets/images/billings-active.svg";
import "../../assets/styles/App.scss";
import { useNavigate } from "react-router-dom";

const menuOption = [
  {
    id: 1,
    name: "My page",
    icon: mypage,
    activeIcon: mypageActive,
    path: "/mypage",
  },
  { id: 2, name: "Runs", icon: runs, activeIcon: runsActive, path: "/runs" },
  {
    id: 3,
    name: "Procedures",
    icon: procedures,
    activeIcon: proceduresActive,
    path: "/procedures",
  },
  {
    id: 4,
    name: "Projects",
    icon: projects,
    activeIcon: projectsActive,
    path: "/projects",
  },
  {
    id: 5,
    name: "Assets",
    icon: assets,
    activeIcon: assetsActive,
    path: "/assets",
  },
  {
    id: 6,
    name: "Settings",
    icon: settings,
    activeIcon: settingsActive,
    path: "/settings",
  },
  {
    id: 7,
    name: "Billing and subscriptions",
    icon: billing,
    activeIcon: billingActive,
    path: "/billings",
  },
];

function AppMenus(props) {
  const [selectedItem, setSelectedItem] = React.useState(menuOption[0].id);
  const navigate = useNavigate();

  const redirectTo = (path) => {
    navigate(path);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: props.width,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: props.width,
            boxSizing: "border-box",
          },
          boxShadow: "3px 4px 4px 0px rgba(0, 0, 0, 0.10)",
        }}
        className="app-drawer"
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List style={{ padding: "0px" }}>
            {menuOption.map((item, index) => (
              <ListItem
                disablePadding
                disableRipple
                disableTouchRipple
                key={index}
                className={
                  selectedItem === item.id
                    ? "app-drawer-list-item-active"
                    : "app-drawer-list-item"
                }
                onClick={() => setSelectedItem(item.id)}
              >
                <ListItemButton onClick={() => redirectTo(item.path)}>
                  <ListItemIcon
                    style={{ justifyContent: "center", padding: "10px" }}
                  >
                    <img
                      src={
                        selectedItem === item.id ? item.activeIcon : item.icon
                      }
                      alt="no_image"
                      style={{ width: "23px", height: "23px" }}
                    />
                  </ListItemIcon>

                  {props.width === 290 && <ListItemText primary={item.name} />}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default AppMenus;
