import React from 'react'
import ProductListView from '../../../../utils/ProductListView'
import styles from './ListView.module.scss'
import { useSelector } from 'react-redux'

const ListView = ({ searchTerm, status, filter, sortData }) => {

  //const products = useSelector((state) => state.products.products)
  const { data: products, loading: productLoading, error: productError } = useSelector((state) => state.product);

  const getTimeValue = (timeVal) => {
    console.log("getTimeValue ", timeVal)
    if (timeVal === 'expired') return Number.MAX_SAFE_INTEGER;
    return parseInt(timeVal, 10) || Number.MAX_SAFE_INTEGER;
  };

  // const filteredProducts = products.filter(
  //   (product) => ((status === 'active' && product.status === 'active' && product.isExpired === false) || (status === 'completed' && product.status === 'completed' && product.isExpired === true)) && (product.type === filter || filter === 'all')
  // ).sort((a,b) => getTimeValue(a.timeRemaining) - getTimeValue(b.timeRemaining));;

  const filteredProducts = products.filter(
    (product) => {
      const matchStatusFilter = (status === 'active' && product.status === 'active' && product.isExpired === false) || (status === 'completed' && product.status === 'completed' && product.isExpired === true)
      const matchTypeFilter = (product.type === filter || filter === 'all');
      const matchTermFilter = (product.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) || searchTerm == (null || ''))
      return matchStatusFilter && matchTypeFilter && matchTermFilter
    }).sort((a, b) => {
      const timeComparison = getTimeValue(a.timeRemaining) - getTimeValue(b.timeRemaining);
      const nameComparison = a.title.localeCompare(b.title);

      console.log("sortData ", sortData, timeComparison)

      if (timeComparison === 0) {
        // return sortData === 'title-a-to-z' ?
        //   a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        //console.log("sortData ", sortData)
        if(sortData === 'title-a-to-z') {
          console.log("in one")
          return a.title.localeCompare(b.title)
        } else if(sortData === 'title-z-to-a') {
          console.log("in two")
          return b.title.localeCompare(a.title)
        } else if(sortData === 'price-lowest') {
          console.log("in three")
          return a.currentBid - b.currentBid 
        } else if(sortData === 'price-highest') {
          console.log("in four")
          return b.currentBid - a.currentBid
        }        
      } else {
        if(sortData === 'price-lowest') {
          console.log("in three")
          return a.currentBid - b.currentBid 
        } else if(sortData === 'price-highest') {
          console.log("in four")
          return b.currentBid - a.currentBid
        }       
      }

      return sortData === 'title-a-to-z' ? -timeComparison : timeComparison;

    });

  return (
    <div className={styles.listViewProducts}>
      {filteredProducts.map(product => (
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