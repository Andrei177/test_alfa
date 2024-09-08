import { create } from "zustand";
import { IProductItem } from "../../CreateProduct/store/useCreateProduct";

interface IProductsStore{
    products: IProductItem[],
    setProducts: (newProducts: IProductItem[]) => void,
    removeProduct: (product: IProductItem) => void,
    addProduct: (product: IProductItem) => void,
    updateProducts: (product: IProductItem) => void
}

export const useProducts = create<IProductsStore>(set => ({
    products: [],
    setProducts: (newProducts: IProductItem[]) => set({products: newProducts}),
    removeProduct: (product: IProductItem) => set(state => (
            {products: [...state.products.filter(prod => prod.id !== product.id)]}
        )
    ),
    addProduct: (product: IProductItem) => set(state => (
            {products: [...state.products, product]}
        )
    ),
    updateProducts: (product: IProductItem) => set(state => (
            {products: state.products.map(prod => {
                if(product.id === prod.id){
                    return product
                }
                return prod
            })}
        )
    ),
}))