import React from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home'
import './scss/app.scss'
import NotFound from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import { useState } from 'react'
import { Dispatch, SetStateAction } from 'react'
interface IThemeContext {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>> | any
}
const defaultState = {
  searchValue: '',
  
}

export const SearchContext = React.createContext<Partial<IThemeContext>>({})

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  )
}

export default App
