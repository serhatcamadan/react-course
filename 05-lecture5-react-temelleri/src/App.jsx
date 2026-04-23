export default function App() {
  return (
    <main className= "container" style={{ padding: 24, fontFamily: 'system-ui' }}>
      <Header />
      <Menu />
      <Footer />
    </main>
  );
}



function Header() {
  const style = {}
  return (
  <header   className="header"> <h1 >
    Fast React Pizza Co.
  </h1>
</header>
  )
}

function Menu() {
  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <Pizza 
        photoName="./pizzas/spinaci.jpg" 
        name="Spinaci Pizza" 
        ingredients="Tomato, mozzarella, spinach, garlic" 
        price={12.99} 
      />
        <Pizza photoName="./pizzas/margherita.jpg" name="Margherita Pizza" ingredients="Tomato, mozzarella, basil" price={10.99} />
    </section>
  );
}

function Pizza(props) { 
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <h3> {props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price}</span>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 13;
  const isOpen = hour >= openHour && hour <= closeHour;
/*   if (hour >= openHour && hour <= closeHour) alert("We're open! Come visit us or order online.");
  else alert("Sorry, we're closed. Please come visit us between 12:00 and 16:00.");
 */
  return (<footer className="footer">
  {new Date().toLocaleTimeString()}. We're currently open.
</footer>)
}


