import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'

export default function ProductDetail(){
  const { id } = useParams()
  const product = products.find(p=>p.id === id)
  if(!product) return (
    <div className="page"><h2>Produto não encontrado</h2><Link to="/shop">Voltar à loja</Link></div>
  )

  return (
    <div className="page">
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} style={{maxWidth:400}} />
      <p>{product.desc}</p>
      <p><strong>Preço:</strong> R$ {product.price.toFixed(2)}</p>
      <Link to="/shop">Voltar</Link>
    </div>
  )
}
