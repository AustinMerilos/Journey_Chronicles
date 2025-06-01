import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
