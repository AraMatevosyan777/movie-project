import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Content from '../../components/Content'
import Loader from '../../components/Loader'
import PageError from '../../components/PageError'
import { getSeries } from '../../redux/series/thunk'

const Series = ({ getSeries, loading, series, error }) => {

  useEffect(() => {
    getSeries()
  }, [getSeries])

  return (
    <div className='page'>
      {loading && <Loader/>}
      {error 
        ? <PageError getData={getSeries}/>
        : <Content items={series}/>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.series.loading,
  series: state.series.series,
  error: state.series.error,
})

export default connect(mapStateToProps, { getSeries })(Series)
