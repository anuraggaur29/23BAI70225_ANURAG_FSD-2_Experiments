import { useEffect, useState } from "react";
import { Alert, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../api/client";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", { username, password });
      const token = response?.data?.token;

      if (!token) {
        throw new Error("JWT token missing in login response");
      }

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("username", username);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      const message = err?.response?.data?.message || "Login failed. Please check your credentials.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container py-5 d-flex justify-content-center align-items-center min-vh-100">
      <Card sx={{ width: "100%", maxWidth: 450, borderRadius: 4, boxShadow: 6 }}>
        <CardContent className="p-4 p-md-5">
          <Typography variant="h4" className="fw-bold mb-3 text-center">
            Experiment 8 Login
          </Typography>
          <Typography variant="body2" color="text.secondary" className="mb-4 text-center">
            JWT Authentication Frontend
          </Typography>

          {error && (
            <Alert severity="error" className="mb-3">
              {error}
            </Alert>
          )}

          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" size="large" fullWidth className="mt-3" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
            </Button>
          </form>

          <Typography variant="body2" color="text.secondary" className="mt-4">
            Demo user from Exp 6: <strong>user123 / password123</strong>
          </Typography>
        </CardContent>
      </Card>
    </main>
  );
}

export default LoginPage;
