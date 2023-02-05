import { useState } from 'react'
import { useEffect } from 'react'

import Categories from '../components/Categories/Categories'
import Sort from '../components/Sort/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

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
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoriesId] = useState(0)
  const [sort, setSort] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  })

  useEffect(() => {
    setIsLoading(true)

    const sortBy = sort.sortProperty.replace('-', '')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''

    fetch(
      `https://63de5a77f1af41051b118b2b.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order} `,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [categoryId, sort])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(index: number) => setCategoriesId(index)}
        />
        <Sort value={sort} onChangeSort={(index: any) => setSort(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj: FormatDateProps) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  )
}

export default Home
