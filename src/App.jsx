import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarsPage from "./pages/CarsPage";
import Home from "./pages/Home";
import './style/main.scss'

function App() {
  return (
    <Router>
      <div className="main-page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/masinlar" element={<CarsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
