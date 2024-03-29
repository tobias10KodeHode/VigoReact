import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./page/mainpage/MainPage";
import { SubPageOne } from "./page/subpageone/SubPageOne";
import { SubPageTwo } from "./page/subpagetwo/SubPageTwo";
import { Footer } from "./components/navigation/Footer";

function App() {
  return (
    <>
      <Router>
        <header>
          <nav>
            <Link to="/">Hjem</Link>
            <Link to="/SubPageOne">Se data</Link>
            <Link to="/SubPageTwo">Se annen data</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/subPageOne" element={<SubPageOne />} />
          <Route path="/subPageTwo" element={<SubPageTwo />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
