import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul id="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Our Menu</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <section id="hero">
        <div id="cta">
          <a href="#">Make a Booking</a>
        </div>
      </section>
      <section id="about-us">
        <div class="content">
          <h1>Japanese so fresh, any fresh you have to fly to Japan</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
