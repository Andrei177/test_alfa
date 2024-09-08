import { create } from "zustand";

export interface IProductItem{
    id: number,
    title: string,
    description: string,
    price: string | number | readonly string[] | undefined,
    like: boolean
}

interface IProductItemStore extends IProductItem{
    setTitle: (newTitle: string) => void,
    setDescription: (newDesc: string) => void,
    setPrice: (newPrice: number) => void,
}
export const useCreateProduct = create<IProductItemStore>(set => ({
    id: 0,
    title: "",
    description: "",
    price: "",
    like: false,
    setTitle: (newTitle: string) => set({title: newTitle}),
    setDescription: (newDesc: string) => set({description: newDesc}),
    setPrice: (newPrice: number) => set({price: newPrice}),
})) 