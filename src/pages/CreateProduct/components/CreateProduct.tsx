import Button from "../../../UI/Button";
import { useProducts } from "../../Products/store/useProducts";
import { IProductItem, useCreateProduct } from "../store/useCreateProduct"
import "../styles/CreateProduct.css"

const CreateProduct = () => {

  const {title, description, price, setTitle, setDescription, setPrice} = useCreateProduct();
  const {products, setProducts} = useProducts();

  const addProduct = () => {
    const newProduct: IProductItem = {
      id: products[products.length - 1].id + 1,
      title,
      description,
      price,
      like: false
    }
    setProducts([...products, newProduct])
    alert("Продукт успешно создан!")
  }

  return (
    <div className="create-page">
      <h2>Создание нового продукта</h2>
      <input type="text" placeholder="title" value={title} onChange={e => setTitle(e.target.value)}/>
      <textarea style={{resize: "none"}} placeholder="description" value={description} onChange={e => setDescription(e.target.value)}/>
      <input type="number" placeholder="price" value={price} onChange={e => setPrice(+e.target.value)}/>
      <Button onClick={addProduct} active={!!(title && description && price)}>Создать</Button>
    </div>
  )
}

export default CreateProduct
