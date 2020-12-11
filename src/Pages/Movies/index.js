import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Content from '../../components/Content'
import Loader from '../../components/Loader'
import PageError from '../../components/PageError'
import { getMovies } from '../../redux/movies/thunk'

const Movies = ({ getMovies, loading, movies, error }) => {

  useEffect(() => {
    getMovies()
  }, [getMovies])

  return (
    <div className='page'>
      {loading && <Loader />}
      {error 
        ? <PageError getData={getMovies}/>
        : <Content items={movies}/>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movies: state.movies.movies,
  error: state.movies.error,
})

export default connect(mapStateToProps, { getMovies })(Movies)
