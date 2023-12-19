import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import ProductList from "../product-list/components/ProductList";
import Footer from "../common/Footer";
function Home() {
    return ( 
        <div>
            <Navbar></Navbar>            
            <ProductList></ProductList>
            <Footer></Footer>
        </div>
     );
}

export default Home;