import { create } from "zustand";
import { IProductItem } from "../../CreateProduct/store/useCreateProduct";

interface IProductsStore{
    products: IProductItem[],
    setProducts: (newProducts: IProductItem[]) => void
}

export const useProducts = create<IProductsStore>(set => ({
    products: [],
    setProducts: (newProducts: IProductItem[]) => set({products: newProducts})
}))