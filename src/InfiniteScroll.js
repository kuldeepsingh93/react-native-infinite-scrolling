import React from 'react'
import axios from 'axios'
import { FlatList } from 'react-native'

const InfiniteScroll = (props) => {
  const { renderData, data, loadMore } = props
  return (
    <FlatList
      data = { data }
      renderItem = { renderData }
      keyExtractor = {(item, index) => index.toString()}
      onEndReached = { loadMore }
    />
  )
}

export default InfiniteScroll
