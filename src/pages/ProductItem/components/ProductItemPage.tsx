import { useLocation, useNavigate } from "react-router-dom"
import "../styles/ProductItemPage.css"
import { useEffect, useState } from "react";
import { getProductById } from "../api/api";
import { useProducts } from "../../Products/store/useProducts";
import { giveRating } from "../utils/giveRating";
import Button from "../../../UI/Button";
import like from "../../../assets/like.svg"
import dislike from "../../../assets/dislike.svg"
import { IProductItem } from "../../CreateProduct/store/useCreateProduct";

const ProductItemPage = () => {

  const [currentProduct, setCurrentProduct] = useState<IProductItem>({
    id: 0,
    title: "",
    description: "",
    price: 0,
    like: false,
  })
  const {products, setProducts} = useProducts();

  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const candidateProduct = products.find(prod => prod.id === Number(location.pathname.split("/")[2]))
    if(!candidateProduct){
      getProductById(Number(location.pathname.split("/")[2]))
      .then(res => setCurrentProduct(res))
      .catch(err => console.log(err))
    }
    else{
      setCurrentProduct(candidateProduct)
    }
  }, [products])

  return (
    <div className="product-item-page">
      <div style={{textAlign: "start"}}><Button onClick={() => navigate("/products")} active>На главную</Button></div>
      <h3>{currentProduct.id}. {currentProduct.title}</h3>
      <hr />
      <h3>Description: {currentProduct.description}</h3>
      <h3>Price: {currentProduct.price}</h3>
      <div className="like">
        <img 
          className="like-img"
          style={{cursor: "pointer"}} 
          onClick={(e) => {
            e.stopPropagation()
            giveRating(currentProduct, products, setProducts)
          }
          }
          src={currentProduct.like ? like : dislike}
        >
        </img>
      </div>
    </div>
  )
}

export default ProductItemPage
