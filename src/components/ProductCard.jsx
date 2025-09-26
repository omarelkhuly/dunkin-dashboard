import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image_url}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Typography variant="subtitle1">{product.price} EGP</Typography>
        <Button variant="contained" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}
