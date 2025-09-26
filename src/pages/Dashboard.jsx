import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Paper } from '@mui/material'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user, profile } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!profile) return
    if (profile.role !== 'admin' && profile.role !== 'employee') {
      navigate('/')
    }
  }, [profile, navigate])

  if (!user || !profile) {
    return <Typography>Loading...</Typography>
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome {profile.full_name} ({profile.role})
      </Typography>
      <Paper sx={{ p: 3, mt: 2 }}>
        <Typography>
          This is the Dashboard. Here admins/employees can manage products, orders, complaints, etc.
        </Typography>
      </Paper>
    </Box>
  )
}
