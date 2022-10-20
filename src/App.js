import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import FirstPage from "./components/firstPage/FirstPage";
import SecondPage from "./components/secondPage/SecondPage";
import ThirdPage from "./components/thirdPage/ThirdPage";
import FourthPage from "./components/fourthPage/FourthPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/third-page" element={<ThirdPage />} />
        <Route path="/fourth-page" element={<FourthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
