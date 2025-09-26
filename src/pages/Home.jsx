import { Box, Typography, Button } from '@mui/material'
import RewardsSection from '../components/RewardsSection'
import heroImg from '../assets/hero.jpg' // استيراد الصورة

export default function Hero() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: { xs: 250, md: 500 },
          backgroundImage: `url(${heroImg})`, // ✅ استدعاء الصورة
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
          color: 'white',
        }}
      >
        {/* طبقة شفافة */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.4)',
          }}
        />

        {/* النص والزرار */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Welcome to Dunkin Clone
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#e11383',
              '&:hover': { backgroundColor: '#c40e6d' },
            }}
          >
            Order Now
          </Button>
        </Box>
      </Box>

      {/* ✅ RewardsSection بعد الـ Hero */}
      <RewardsSection />
    </>
  )
}
