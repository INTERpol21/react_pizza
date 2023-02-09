import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import Categories from '../components/Categories/Categories'
import Sort from '../components/Sort/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination/Pagination'
import { SearchContext } from './../App'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setCategoryId, setPageCount } from '../redux/slices/filterSlice'
import axios from 'axios'

type FormatDateProps = {
  id: number
  imageUrl: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: number
  rating: number
}

const Home = () => {
  const { categoryId, sort, pageCount } = useSelector((state: RootState) => state.filter)
  const sortType = sort.sortProperty

  const dispatch = useDispatch()
  const onClickCategory = (id: number) => {
    dispatch(setCategoryId(id))
  }

  const onChangePage = (number: number) => {
    dispatch(setPageCount(number))
  }

  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const pizzas = items.map((obj: FormatDateProps) => <PizzaBlock key={obj.id} {...obj} />)
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)



  useEffect(() => {
    setIsLoading(true)
    const sortBy = sortType.replace('-', '')
    const order = sortType.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    axios
      .get(
        `https://63de5a77f1af41051b118b2b.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((response) => {
        setItems(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue, pageCount])

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination value={pageCount} onChangePage={onChangePage} />
    </div>
  )
}

export default Home
