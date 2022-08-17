import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import NewsDetails from "./pages/NewsDetails/NewsDetails";
function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news/details/:id" element={<NewsDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
