import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div className="content">
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
      );
}
 
export default Layout;