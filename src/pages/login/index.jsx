import { Image } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useAuth, AuthProvider } from "react-oidc-context";
import { oidcGoogleConfiguration, oidcLinkedInConfiguration } from "../../utils/config";

function Login() {
  return (
    <Box
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AuthProvider {...oidcLinkedInConfiguration} >
        <MyComponent />
      </AuthProvider>
    </Box>
  );
}

export default Login;

function MyComponent() {
  const { signinPopup, user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Box>
      <Box>
        <Card
          style={{
            width: "700px",
            textAlign: "center",
            height: "400px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box>
            <Button
              style={{ width: "400px", margin: "10px 0px" }}
              variant="contained"
              color="secondary"
              onClick={signinPopup}
            >
              Login with Google
            </Button>
          </Box>
          <Divider />
          {user?.profile && (
            <>
              <Typography variant="h6">Google User</Typography>
              <Avatar src={user?.profile.picture} />{" "}
              <Typography variant="caption">{user?.profile.name}</Typography>
              <Typography variant="caption">{user?.profile.email}</Typography>
            </>
          )}
          <Divider />
          <Box>
            <Button
              style={{ width: "400px", margin: "10px 0px" }}
              variant="contained"
              color="error"
              onClick={signinPopup}
            >
              Login with LinkedIn
            </Button>
          </Box>
          <Divider />
          {user?.profile && (
            <>
              <Typography variant="h6">LinkedIn User</Typography>
              <Avatar src={user?.profile.picture} />{" "}
              <Typography variant="caption">{user?.profile.name}</Typography>
              <Typography variant="caption">{user?.profile.email}</Typography>
            </>
          )}
          <Divider />
          <Box>
            <Button
              style={{ width: "400px", margin: "10px 0px" }}
              variant="contained"
              color="info"
            >
              Login with Microsoft
            </Button>
          </Box>
          <Divider />
          {user?.profile && (
            <>
              <Typography variant="h6">Microsoft User</Typography>
              <Avatar src={user?.profile.picture} />{" "}
              <Typography variant="caption">{user?.profile.name}</Typography>
              <Typography variant="caption">{user?.profile.email}</Typography>
            </>
          )}
        </Card>
      </Box>
    </Box>
  );
}
