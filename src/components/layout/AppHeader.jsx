import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MoreVertOutlined } from "@mui/icons-material";
import help from "../../assets/images/help.svg";
import notification from "../../assets/images/notification.svg";
import dark from "../../assets/images/dark.svg";
import account from "../../assets/images/account.svg";
import "../../assets/styles/App.scss";

function AppHeader(props) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const mobileMenuId = "primary-search-account-menu-mobile";

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="help icon" color="inherit">
          <img src={help} alt="help_icon" className="app-bar-images" />
        </IconButton>
        <p>Help</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="notification icon" color="inherit">
          <img
            src={notification}
            alt="notification_icon"
            className="app-bar-images"
          />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account"
          aria-haspopup="true"
          color="inherit"
        >
          <img src={account} alt="account_icon" className="app-bar-images" />
        </IconButton>
        <p>Account</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="dark"
          aria-haspopup="true"
          color="inherit"
        >
          <img src={dark} alt="dark_icon" className="app-bar-images" />
        </IconButton>
        <p>Dark Mode</p>
      </MenuItem>
    </Menu>
  );

  const openEditProfile = () => {
    props.toggleProfileDrawer();
  };

  const openNotificationList = () => {
    props.toggleNotificationDrawer();
  };

  const changeTheme = () => {
    props.toggleTheme()
  }

  return (
    <Box className="app-bar-block">
      <AppBar
        position="fixed"
        open={true}
        className="app-bar"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              marginRight: 5,
            }}
            onClick={() => props.toggleDrawer()}
          >
            <MenuIcon className="app-bar-icons" />
          </IconButton>
          <Box>
            <Typography variant="h6" className="app-bar-title">
              Test <span className="app-bar-label">Runz</span>
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" aria-label="help icon" color="inherit">
              <img src={help} alt="help_icon" className="app-bar-images" />
            </IconButton>
            <IconButton
              size="large"
              aria-label="notification icon"
              color="inherit"
              onClick={openNotificationList}
            >
              <img
                src={notification}
                alt="help_icon"
                className="app-bar-images"
              />
            </IconButton>
            <IconButton
              disableRipple
              disableFocusRipple
              disableTouchRipple
              onClick={openEditProfile}
            >
              <Typography variant="inherit" className="app-bar-username">
                &nbsp; Hi Tester
              </Typography>
            </IconButton>
            <IconButton
              size="large"
              aria-label="account icon"
              color="inherit"
              onClick={openEditProfile}
            >
              <img src={account} alt="help_icon" className="app-bar-images" />
            </IconButton>
            <IconButton size="large" aria-label="dark icon" color="inherit" onClick={changeTheme}>
              <img src={dark} alt="help_icon" className="app-bar-images" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVertOutlined className="app-bar-icons" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}

export default AppHeader;
