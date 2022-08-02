import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route excact path="/" element={<HomePage />} />
        <Route path="/categories/:idc" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
