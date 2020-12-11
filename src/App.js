import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import store from './redux/store'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import Series from './Pages/Series'
import Header from './components/Header/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header/>
          <Switch>
            <Route exact path='/' render={()=> <Home/>}/>
            <Route exact path='/movies' render={()=> <Movies/>}/>
            <Route exact path='/series' render={()=> <Series/>}/>
            <Redirect to='/'/>
          </Switch>
      </Provider>
    </BrowserRouter>
  )
}

export default App
