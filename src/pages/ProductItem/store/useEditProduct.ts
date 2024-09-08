import { create } from "zustand";

interface IEditStore{
    title: string,
    description: string,
    price: string | number | readonly string[] | undefined,
    setTitle: (newTitle: string) => void,
    setDescription: (newDesc: string) => void,
    setPrice: (newPrice: string | number | readonly string[] | undefined) => void,
}

export const useEditProduct = create<IEditStore>(set => ({
    title: "",
    description: "",
    price: "",
    setTitle: (newTitle: string) => set({title: newTitle}),
    setDescription: (newDesc: string) => set({description: newDesc}),
    setPrice: (newPrice: string | number | readonly string[] | undefined) => set({price: newPrice}),
}))