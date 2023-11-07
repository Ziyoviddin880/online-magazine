import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { createContext } from "react";

// Layout
import RootLayout from "./layout/RootLayout";

// Pages
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useState, useEffect } from "react";
import http from "./services/http";

export const ProductsContext = createContext();

function App() {
  const [user, setUser] = useState([
    {
      fullName: "Ziyoviddin Abdurashidov",
      email: "ziyoviddin1303@gmail.com",
      password: "nitro880$",
    },
  ]);
  const [person, setPerson] = useState("");
  const [loading, setLoading] = useState(false);

  // Get all products
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await http.get("/products");
      setProducts(data.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Register User
  const registerUser = (newUser) => {
    let allUser = [...user, newUser];
    setUser(allUser);
    setPerson(newUser);
  };

  // Login User
  const loginUser = (loginPerson) => {
    setPerson(loginPerson);
  };

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout person={person} />}>
          <Route path="/" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route
          path="register"
          element={<Register user={user} registerUser={registerUser} />}
        />
        <Route
          path="login"
          element={<Login user={user} loginUser={loginUser} />}
        />
      </Route>
    )
  );

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
