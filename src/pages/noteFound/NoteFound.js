import "./noteFound.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Author from "../../components/author/Author";

function NoteFound() {
  return (
    <>
      <Header person={false} />
      <div className="noteFound">
        <img src="images/noteFound.jpg" alt="Page Not Found" />
      </div>
      <Footer />
      <Author />
    </>
  );
}

export default NoteFound;
