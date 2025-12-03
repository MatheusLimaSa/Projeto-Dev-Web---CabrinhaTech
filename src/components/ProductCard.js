import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }){
  return (
    <article className={styles.card}>
      <div className={styles.brand}>{product.brand}</div>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p className={styles.desc}>{product.desc}</p>
      <div className={styles.bottom}>
        <span className={styles.price}>R$ {product.price.toFixed(2)}</span>
        <Link to={`/product/${product.id}`} className={styles.button}>Comprar</Link>
      </div>
    </article>
  )
}