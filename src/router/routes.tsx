import CreateProduct from "../pages/CreateProduct/components/CreateProduct";
import ProductItemPage from "../pages/ProductItem/components/ProductItemPage";
import Products from "../pages/Products/components/Products";

export const routes = [
    {path: "/products", element: <Products/>},
    {path: "/products/:id", element: <ProductItemPage/>},
    {path: "/create-product", element: <CreateProduct/>}
]