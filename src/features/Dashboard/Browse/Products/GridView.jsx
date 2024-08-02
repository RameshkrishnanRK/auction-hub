import React from 'react'
import ProductGridView from '../../../../utils/ProductGridView'
import styles from './GridView.module.scss'

const GridView = ({products}) => {
  return (
    <div className={styles.gridViewProducts}>
      {products.map(product => (
        <ProductGridView
          id={product.id}
          image={product.image} 
          title={product.title} 
          currentBid={product.currentBid} 
          timeRemaining={product.timeRemaining} 
          isExpired={ product.isExpired}
        />
      ))}
    </div>
  )
}

export default GridView