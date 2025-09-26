// src/pages/Register.jsx
import { useState } from "react"
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Register() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("customer") // 👈 الافتراضي
  const [error, setError] = useState(null)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      await register(email, password, fullName, role)
      navigate("/login") // ✅ بعد التسجيل يروح صفحة تسجيل الدخول
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" gutterBottom>
          Join Rewards
        </Typography>

        {error && (
          <Typography color="error" variant="body2" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* 🔹 اختيار الدور */}
          <TextField
            select
            fullWidth
            margin="normal"
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="customer">Customer</MenuItem>
            <MenuItem value="employee">Employee</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#E11383" }}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  )
}
