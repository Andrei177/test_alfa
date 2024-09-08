import axios from "axios"
import { IProductItem } from "../../CreateProduct/store/useCreateProduct";

export const getProductById = async (productId: number) => {
    const {data} = await axios.get<IProductItem>(`https://dummyjson.com/products/${productId}`)

    return data;
}