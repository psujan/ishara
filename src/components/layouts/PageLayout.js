import Header from "../sections/Header";
import Footer from "../sections/Footer";

export default function PageLayout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
