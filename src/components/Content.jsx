import React, { useState } from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination'
import { animateScroll as scroll} from 'react-scroll'

const Content = ({items}) => {
  const [page, setPage] = useState(0)
  let pages = items.length

  const style = {
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '112px 0 0 0',
        heigth: '100vh',
    }

  const onPageChange = (e, page) => {
    scroll.scrollToTop()
    setPage(page - 1)
  }

  return (
    <div style={style}>
        {items[page] && items[page].map(item => <MovieCard item={item}/>)}
        {items.length > 0 && <Pagination pages={pages} onPageChange={onPageChange}/>}
    </div>
  )
}

export default Content
