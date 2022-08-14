import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
export default Layout;
