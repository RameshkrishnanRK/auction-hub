import React from 'react'
import ProductListView from '../../../../utils/ProductListView'
import styles from './ListView.module.scss'

const ListView = ({products}) => {
  return (
    <div className={styles.listViewProducts}>
      {products.map(product => (
        <ProductListView
        id={product.id}
          image={product.image}
          title={product.title}
          currentBid={product.currentBid}
          timeRemaining={product.timeRemaining}
          isExpired={product.isExpired}
        />
      ))}
    </div>
  )
}

export default ListView