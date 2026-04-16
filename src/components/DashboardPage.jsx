import { useState } from "react";
import { Alert, Button, Card, CardActions, CardContent, Chip, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../api/client";

function DashboardPage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  const username = sessionStorage.getItem("username") || "Authenticated User";

  const fetchProtectedData = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await api.get("/protected");
      const payload = response?.data;
      setMessage(typeof payload === "string" ? payload : JSON.stringify(payload));
    } catch (err) {
      const status = err?.response?.status;
      if (status === 401 || status === 403) {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        navigate("/", { replace: true });
        return;
      }

      const msg = err?.response?.data?.message || "Could not fetch protected data.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
    } catch {
      // Ignore logout API failure and clear local session anyway.
    } finally {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("username");
      navigate("/", { replace: true });
    }
  };

  return (
    <main className="container py-5">
      <Card sx={{ maxWidth: 800, mx: "auto", borderRadius: 4, boxShadow: 5 }}>
        <CardContent className="p-4 p-md-5">
          <Stack direction="row" className="justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <Typography variant="h4" className="fw-bold">
              Dashboard
            </Typography>
            <Chip color="success" label="Authenticated Session" />
          </Stack>

          <Typography variant="body1" className="mb-2">
            Welcome, <strong>{username}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary" className="mb-4">
            Token in session: {token ? `${token.slice(0, 25)}...` : "Missing"}
          </Typography>

          <CardActions className="px-0 pb-0 d-flex gap-2 flex-wrap">
            <Button variant="contained" color="success" onClick={fetchProtectedData} disabled={loading}>
              {loading ? "Loading..." : "Call GET /api/protected"}
            </Button>
            <Button variant="outlined" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </CardActions>

          {message && (
            <Alert severity="success" className="mt-4">
              {message}
            </Alert>
          )}

          {error && (
            <Alert severity="error" className="mt-4">
              {error}
            </Alert>
          )}
        </CardContent>
      </Card>
    </main>
  );
}

export default DashboardPage;
