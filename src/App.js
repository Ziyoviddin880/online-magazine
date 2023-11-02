import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Layout
import RootLayout from "./layout/RootLayout";

// Pages
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([
    {
      fullName: "Ziyoviddin Abdurashidov",
      email: "ziyoviddin1303@gmail.com",
      password: "nitro880$",
    },
  ]);
  const [person, setPerson] = useState("");
  const registerUser = (newUser) => {
    let allUser = [...user, newUser];
    setUser(allUser);
    setPerson(newUser);
  };
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
          element={<Register registerUser={registerUser} />}
        />
        <Route
          path="login"
          element={<Login user={user} loginUser={loginUser} />}
        />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
