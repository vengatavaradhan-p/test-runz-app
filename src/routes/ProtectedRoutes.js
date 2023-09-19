import React from "react";
import { Navigate } from "react-router-dom";
import { darkTheme, lightTheme } from "../utils/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import AppHeader from "../components/layout/AppHeader";
import AppMenus from "../components/layout/AppMenus";
import AppProfileDrawer from "../components/layout/AppProfileDrawer";
import AppNotificationeDrawer from "../components/layout/AppNotificationDrawer";

function PrivateRoutes({ isSignedIn = false, children }) {
  const [width, setWidth] = React.useState(290);
  const [editProfile, setEditProfile] = React.useState(false);
  const [notificationList, setNotificationList] = React.useState(false);
  const [theme, setTheme] = React.useState(lightTheme);

  React.useEffect(() => {
    localStorage.setItem("isLoggedIn", "true");
  }, []);

  const toggleDrawer = () => {
    setWidth(width === 290 ? 95 : 290);
  };

  const toggleProfileDrawer = () => {
    setEditProfile(!editProfile);
  };

  const toggleNotificationDrawer = () => {
    setNotificationList(!notificationList);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  if (!isSignedIn) {
    return <Navigate to="/login2" replace />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppHeader
          toggleDrawer={toggleDrawer}
          toggleProfileDrawer={toggleProfileDrawer}
          toggleNotificationDrawer={toggleNotificationDrawer}
          toggleTheme={toggleTheme}
        />
        <AppMenus width={width} />
        <AppProfileDrawer openDrawer={editProfile} />
        <AppNotificationeDrawer openDrawer={notificationList} />
        <Box
          component="main"
          sx={{
            background: "#F3F3F3",
            height: "100vh",
            pt: 10,
            px: 3,
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default PrivateRoutes;
