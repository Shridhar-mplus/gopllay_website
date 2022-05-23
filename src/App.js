import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import "./App.css";
import Front_Routes from "./routes/routes";

function App() {
  return (
    <div>
      <Header />
      <Front_Routes />
      <Footer />
    </div>
  );
}

export default App;
