import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

function RootLayout({ person }) {
  return (
    <>
      <Header person={person} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default RootLayout;
