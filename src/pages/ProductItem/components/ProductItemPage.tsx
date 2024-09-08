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
import { useEditProduct } from "../store/useEditProduct";

const ProductItemPage = () => {

  const [currentProduct, setCurrentProduct] = useState<IProductItem>({
    id: 0,
    title: "",
    description: "",
    price: 0,
    like: false,
  })
  const {products, setProducts, updateProducts} = useProducts();
  const {title, description, price, setTitle, setDescription, setPrice} = useEditProduct();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const candidateProduct = products.find(prod => prod.id === Number(location.pathname.split("/")[2]))
    if(!candidateProduct){
      setIsLoading(true);
      getProductById(Number(location.pathname.split("/")[2]))
      .then(res => setCurrentProduct(res))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
    }
    else{
      setCurrentProduct(candidateProduct)
    }
  }, [products])

  useEffect(() => {
    setTitle(currentProduct.title)
    setDescription(currentProduct.description)
    setPrice(currentProduct.price)
  }, [isEditing])

  const editProduct = () => {
    const updatedProduct: IProductItem = {
      id: currentProduct.id,
      title,
      description,
      price,
      like: currentProduct.like
    }

    updateProducts(updatedProduct)
    setIsEditing(false)
  }

  return (
    <div className="product-item-page">
      <div style={{textAlign: "start"}}><Button onClick={() => navigate("/products")} active>На главную</Button></div>
      {
        isEditing
        ?<h3>{currentProduct.id}.<input type="text" value={title} onChange={e => setTitle(e.target.value)}/></h3>
        :<h3>{currentProduct.id}. {currentProduct.title}</h3>
      }
      <hr />
      {
        isEditing
        ?<h3>Description: <textarea style={{resize: "none"}} value={description} onChange={e => setDescription(e.target.value)}/></h3>
        :<h3>Description: {currentProduct.description}</h3>
      }
      {
        isEditing
        ?<h3>Price: <input type="text" value={price} onChange={e => setPrice(e.target.value)}/></h3>
        :<h3>Price: {currentProduct.price}</h3>
      }
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
      <div style={{textAlign: "start"}}><Button onClick={() => setIsEditing(true)} active={!isEditing}>Редактировать</Button></div>
      <div style={{textAlign: "start"}}>{isEditing && <Button onClick={editProduct} active>Сохранить изменения</Button>}</div>
      {isLoading && <h2>Идет подгрузка информации...</h2>}
    </div>
  )
}

export default ProductItemPage
