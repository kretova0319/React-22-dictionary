import { Cards } from "../src/components/cards/Cards";
import { Header } from "../src/components/header/Header";
import { Footer } from "../src/components/footer/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
