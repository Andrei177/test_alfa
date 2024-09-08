import { IProductItem } from "../../CreateProduct/store/useCreateProduct"

export const giveRating = (product: IProductItem, products: IProductItem[], setProducts: (products: IProductItem[]) => void) => {
    setProducts([...products.map(prod => {
      if(prod.id !== product.id){
        return prod
      }
      return {...product, like: !product.like}
    })])
}