import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Author from "../components/author/Author";

function RootLayout({ person }) {
  return (
    <>
      <Header person={person} />

      <main>
        <Outlet />
      </main>

      <Footer />
      <Author />
    </>
  );
}

export default RootLayout;
