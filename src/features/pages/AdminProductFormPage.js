import ProductForm from "../admin/components/ProductForm";
import NavBar from "../navbar/navbar";
function AdminProductFormPage() {
    return ( 
        <div>
            <NavBar>
                <ProductForm></ProductForm>
            </NavBar>
        </div>
     );
}

export default AdminProductFormPage;