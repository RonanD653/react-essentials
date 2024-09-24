import './App.css';
import restaurant from "./logo.svg"

function Header(props) {
  console.log(props)
  return (
    <header>
      <h1>{props.name} Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve {props.adjective} food!</p>
      <iMg src={restaurant} height={200} alt="Restaurant logo"/>
      <ul style={{ textAlign: "left"}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes = [
"Mac and cheese",
"Salmon",
"Burger"
]

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}))
console.log(dishObjects)

dishes.map((dish) => console.log(dish))

function App() {
  return (
    <>
      <Header name="Ronan's"/>
      <Main adjective="Amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </>
  );
}

export default App;
