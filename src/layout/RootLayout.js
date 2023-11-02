import Main from "../components/body/Main";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function RootLayout({ person }) {
  return (
    <>
      <Header person={person} />
      <Main />
      <Footer />
    </>
  );
}

export default RootLayout;
