import { useState } from "react";
import { Alert, Button, Card, CardActions, CardContent, Chip, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchAdminDashboard, fetchUserProfile } from "../api/client";

function AdminDashboard() {
  const [userData, setUserData] = useState("");
  const [adminData, setAdminData] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const username = sessionStorage.getItem("username") || "Admin";
  const role = sessionStorage.getItem("role");

  const getUserProfile = async () => {
    setError("");
    try {
      const response = await fetchUserProfile();
      const payload = response?.data;
      setUserData(typeof payload === "string" ? payload : JSON.stringify(payload));
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to load user profile.");
    }
  };

  const getAdminData = async () => {
    setError("");
    try {
      const response = await fetchAdminDashboard();
      const payload = response?.data;
      setAdminData(typeof payload === "string" ? payload : JSON.stringify(payload));
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to load admin dashboard.");
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
              Admin Dashboard
            </Typography>
            <Chip color="error" label={`Role: ${role || "UNKNOWN"}`} />
          </Stack>

          <Typography className="mb-1">
            Logged in as: <strong>{username}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary" className="mb-4">
            ADMIN role has access to both USER and ADMIN endpoints.
          </Typography>

          <CardActions className="px-0 pb-0 d-flex gap-2 flex-wrap">
            <Button variant="contained" color="success" onClick={getUserProfile}>
              GET /api/user/profile
            </Button>
            <Button variant="contained" color="error" onClick={getAdminData}>
              GET /api/admin/dashboard
            </Button>
            <Button variant="outlined" color="secondary" onClick={logout}>
              Logout
            </Button>
          </CardActions>

          {userData && (
            <Alert severity="success" className="mt-4">
              USER API: {userData}
            </Alert>
          )}

          {adminData && (
            <Alert severity="warning" className="mt-3">
              ADMIN API: {adminData}
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

export default AdminDashboard;
