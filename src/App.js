import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import "./App.css";
import FrontRoutes from "./routes/routes";

function App() {
  return (
    <div>
      <Header />
      <FrontRoutes />
      <Footer />
    </div>
  );
}

export default App;
