import { FC } from "react"
import "../styles/ProductItem.css"
import { useProducts } from "../../Products/store/useProducts"
import { useNavigate } from "react-router-dom"
import { giveRating } from "../utils/giveRating"
import like from "../../../assets/like.svg"
import dislike from "../../../assets/dislike.svg"
import { IProductItem } from "../../CreateProduct/store/useCreateProduct"

interface IPropsProductItem{
  product: IProductItem
}

const ProductItem: FC<IPropsProductItem> = ({product}) => {

  const navigate = useNavigate();

  const {products, setProducts} = useProducts();

  const removeProduct = (product: IProductItem) => {
    setProducts([...products.filter(prod => prod.id !== product.id)])
  }

  return (
    <div className="product-item" onClick={() => navigate(`/products/${product.id}`)}>
      <h3>{product.id}. {product.title.length > 10 ? product.title.substring(0, 10) + "...": product.title}</h3>
      <hr />
      <h3>{product.description.length > 40 ? product.description.substring(0, 40) + "...": product.description}</h3>
      <h3>Price: {product.price}</h3>
      <div className="like">
        <img 
          className="like-img"
          style={{cursor: "pointer"}} 
          onClick={(e) => {
            e.stopPropagation()
            giveRating(product, products, setProducts)}
          }
          src={product.like ? like : dislike}
        >
        </img>
      </div>
      <button onClick={(e) => {
        e.stopPropagation()
        removeProduct(product)}
      }>X</button>
    </div>
  )
}

export default ProductItem
