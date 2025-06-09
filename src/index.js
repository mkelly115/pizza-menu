import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1 style={style} className="header">
        Fast React Pizza Company
      </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length

  return (
    <li className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => {
            return <Pizza pizzaObj={pizza} key={pizza.name} />;
          })}
        </ul>
      )}

      {/* <Pizza
        name="Pizza Spinnaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={22}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={18}
        photoName="pizzas/funghi.jpg"
      /> */}
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if( hour >= openHour && hour <= closeHour) alert("We're Currently Open!")
  // else alert("Sorry we're Closed");

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're Open until {closeHour}:00. Come visit us or order online</p>
          <button className="btn">order</button>
        </div>
      )}
    </footer>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
