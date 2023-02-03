import Header from './components/Header/Header';
import './scss/app.scss';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import pizzas from './assets/pizzas.json';
type FormatDateProps = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              {/* <Categories /> */}
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((obj: FormatDateProps) => (
                <PizzaBlock {...obj} key={obj.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
