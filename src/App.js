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
import Product from "./container/product/Product";
import NoteFound from "./pages/noteFound/NoteFound";

import { useState } from "react";
import { useFetch } from "./useFetch/useFetch";

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

  // Get all products
  const { data, loading } = useFetch("https://fakestoreapi.com/products");

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
          <Route path="products/:id" element={<Product />} />
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
        <Route path="*" element={<NoteFound />} />
      </Route>
    )
  );

  return (
    <ProductsContext.Provider value={{ data, loading }}>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
