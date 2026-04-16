import { useState } from "react";
import { Alert, Button, Card, CardActions, CardContent, Chip, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchAdminDashboard, fetchUserProfile } from "../api/client";

function UserDashboard() {
  const [userData, setUserData] = useState("");
  const [adminAttempt, setAdminAttempt] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const username = sessionStorage.getItem("username") || "User";
  const role = sessionStorage.getItem("role");

  const getProfile = async () => {
    setError("");
    setAdminAttempt("");
    try {
      const response = await fetchUserProfile();
      const payload = response?.data;
      setUserData(typeof payload === "string" ? payload : JSON.stringify(payload));
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to load user profile.");
    }
  };

  const tryAdminEndpoint = async () => {
    setError("");
    setAdminAttempt("");
    try {
      await fetchAdminDashboard();
      setAdminAttempt("Unexpected access: admin endpoint returned success.");
    } catch (err) {
      const status = err?.response?.status;
      if (status === 403) {
        setAdminAttempt("Access denied as expected: USER cannot access /api/admin/dashboard.");
        return;
      }
      setError(err?.response?.data?.message || "Admin endpoint check failed.");
    }
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <main className="container py-5">
      <Card sx={{ maxWidth: 850, mx: "auto", borderRadius: 4, boxShadow: 5 }}>
        <CardContent className="p-4 p-md-5">
          <Stack direction="row" className="justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <Typography variant="h4" className="fw-bold">
              User Dashboard
            </Typography>
            <Chip color="primary" label={`Role: ${role || "UNKNOWN"}`} />
          </Stack>

          <Typography className="mb-1">
            Logged in as: <strong>{username}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary" className="mb-4">
            USER role can access user APIs and is blocked from admin APIs.
          </Typography>

          <CardActions className="px-0 pb-0 d-flex gap-2 flex-wrap">
            <Button variant="contained" color="success" onClick={getProfile}>
              GET /api/user/profile
            </Button>
            <Button variant="outlined" color="warning" onClick={tryAdminEndpoint}>
              Try /api/admin/dashboard
            </Button>
            <Button variant="outlined" color="error" onClick={logout}>
              Logout
            </Button>
          </CardActions>

          {userData && (
            <Alert severity="success" className="mt-4">
              {userData}
            </Alert>
          )}

          {adminAttempt && (
            <Alert severity="info" className="mt-3">
              {adminAttempt}
            </Alert>
          )}

          {error && (
            <Alert severity="error" className="mt-3">
              {error}
            </Alert>
          )}
        </CardContent>
      </Card>
    </main>
  );
}

export default UserDashboard;
