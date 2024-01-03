import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./com/Nav";
import Home from "./com/Home";
import Search from "./com/Search";
import Books from "./com/Books";
import Tes from "./com/Tes";
import Login from "./com/Login";
import Register from "./com/Register";
import AllBooks from "./com/AllBooks";
import Footer from "./com/Footer";
import { auth } from "./Firebase";
import Drop from "./com/Drop";
import Details from "./com/Details";
import AllBooksDetails from "./com/AllBooksDetails";
import CartDetails from "./com/CartDetails";

function App() {
  const [ToggleSearch, setToggleSearch] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const handleSearch = () => {
    setToggleSearch(!ToggleSearch);
  };

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="App dark:bg-dark">
      <Nav handleSearch={handleSearch} cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home ToggleSearch={ToggleSearch} />} />
        <Route path="search" element={<Search />} />
        <Route path="login" element={<Login />} />
        <Route path="CartDetails" element={<CartDetails />} />
        <Route path="Register" element={<Register />} />
        <Route path="AllBooks"element={<AllBooks ToggleSearch={ToggleSearch} setCartCount={setCartCount} />}/>
        <Route path="Details/:id" element={<Details setCartCount={setCartCount} />} />
        <Route path="AllBooksDetails/:id" element={<AllBooksDetails  setCartCount={setCartCount} />} />
      </Routes>
      {isHome && <Books setCartCount={setCartCount} />}
      {isHome && <Tes />}
      {isHome && <Footer />}
    </div>
  );
}

export default App;
