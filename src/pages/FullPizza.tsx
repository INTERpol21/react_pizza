import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string
    title: string
    price: number
  }>()

  const { id } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://63de5a77f1af41051b118b2b.mockapi.io/items/' + id)
        setPizza(data)
      } catch (error) {
        alert('Ошибка при получении пиццы!')
        navigate('/')
      }
    }

    fetchPizza()
    // eslint-disable-next-line
  }, [])

  if (!pizza) {
    return <>Загрузка...</>
  }

  return (
    <div className="container">
      <img className="pizza-block__image-cart" src={pizza.imageUrl} alt="Пицца" />
      <h2 className="pizza-block__title">{pizza.title}</h2>
      <div className="pizza-block__bottom">
        <h4 className="pizza-block__price">{pizza.price} ₽</h4>
        <Link to="/">
          <button className="button button--outline button--add">
            <span>Назад</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default FullPizza
