import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuCard from "./component/MenuCard";
import Product from "./component/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuCard/>} />
          <Route path="/product" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
