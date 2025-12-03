import React from 'react'
import products from '../data/products'
import ProductList from '../components/ProductList'

export default function Shop(){
  return (
    <div className="page">
      <h1>Placas de Vídeo</h1>
      <p className="tagline">Que aqui a gente <strong>Mééééééélhora</strong> o seu setup!</p>
      <p>As melhores placas NVIDIA e AMD para turbinar seu PC.</p>
      <ProductList products={products} />
    </div>
  )
}