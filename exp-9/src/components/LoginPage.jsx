import { useEffect, useState } from "react";
import { Alert, Button, Card, CardContent, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchAdminDashboard, verifyUserProfile } from "../api/client";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const role = sessionStorage.getItem("role");
    if (role === "ADMIN") {
      navigate("/admin", { replace: true });
    } else if (role === "USER") {
      navigate("/user", { replace: true });
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const basicAuth = btoa(`${username}:${password}`);
      sessionStorage.setItem("basicAuth", basicAuth);
      sessionStorage.setItem("username", username);

      await verifyUserProfile();

      let role = "USER";
      try {
        await fetchAdminDashboard();
        role = "ADMIN";
      } catch (err) {
        if (err?.response?.status !== 403) {
          throw err;
        }
      }

      sessionStorage.setItem("role", role);
      navigate(role === "ADMIN" ? "/admin" : "/user", { replace: true });
    } catch (err) {
      sessionStorage.clear();
      const msg = err?.response?.data?.message || "Login failed. Use valid Exp 7 credentials.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container py-5 d-flex justify-content-center align-items-center min-vh-100">
      <Card sx={{ width: "100%", maxWidth: 500, borderRadius: 4, boxShadow: 6 }}>
        <CardContent className="p-4 p-md-5">
          <Typography variant="h4" className="fw-bold text-center mb-2">
            Experiment 9 Login
          </Typography>
          <Typography variant="body2" color="text.secondary" className="text-center mb-4">
            RBAC Frontend (USER / ADMIN)
          </Typography>

          {error && (
            <Alert severity="error" className="mb-3">
              {error}
            </Alert>
          )}

          <form onSubmit={handleLogin}>
            <Stack spacing={2}>
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
              />
              <Button type="submit" size="large" variant="contained" disabled={loading}>
                {loading ? "Signing in..." : "Login"}
              </Button>
            </Stack>
          </form>

          <Typography variant="body2" color="text.secondary" className="mt-4">
            Demo users from Exp 7: <strong>user1 / user123</strong>, <strong>admin1 / admin123</strong>
          </Typography>
        </CardContent>
      </Card>
    </main>
  );
}

export default LoginPage;
