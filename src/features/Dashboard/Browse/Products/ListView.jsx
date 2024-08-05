import React from 'react'
import ProductListView from '../../../../utils/ProductListView'
import styles from './ListView.module.scss'
import { useSelector } from 'react-redux'

const ListView = () => {

  const products = useSelector((state) => state.products.products)
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