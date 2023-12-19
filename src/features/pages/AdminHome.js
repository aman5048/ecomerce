import AdminProductList from "../admin/components/AdminProductList";
import NavBar from "../navbar/navbar";

function AdminHome() {
    return ( 
        <div>
            <NavBar>
                <AdminProductList></AdminProductList>
            </NavBar>
            Foot
        </div>
     );
}

export default AdminHome;