import { useEffect, useMemo, useState } from "react";
import ProductItem from "../../ProductItem/components/ProductItem";
import { useProducts } from "../store/useProducts"
import "../styles/Products.css"
import { getProducts } from "../api/api";
import Filter from "../../../components/Filter";
import Pagination from "../../../components/Pagination";

const Products = () => {

  const { products, setProducts } = useProducts();
  const [isFavourites, setIsFavourites] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchStr, setSearchStr] = useState<string>("");
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const limit = 10;

  const filteredProducts = useMemo(() => {
    if(isFavourites){
      return products.filter(product => product.like === true)
    }
    return products
  }, [isFavourites, products])

  const searchedProducts = useMemo(() => {
    if(searchStr){
      return filteredProducts.filter(prod => 
        prod.id === +searchStr ||
        prod.title.toLowerCase().includes(searchStr.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchStr.toLowerCase()) ||
        prod.price == searchStr) 
    }
    return filteredProducts
  }, [searchStr, filteredProducts])

  useEffect(() => {
    if (!products.length) {
      setIsLoading(true);
      getProducts()
      .then(res => setProducts(res))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
    }
  }, [])

  return (
    <div className="products-page">
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <Filter isFavourites={isFavourites} setIsFavourites={setIsFavourites} setSelectedPage={setSelectedPage}/>
        <input type="text" placeholder="Поиск" value={searchStr} onChange={e => setSearchStr(e.target.value)}/>
      </div>
      <Pagination numberProducts={searchedProducts.length} limit={limit} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <div className="products">
        {
          isLoading
          ? <h3>Идёт загрузка...</h3>
          : searchedProducts.length
            ? searchedProducts.filter((_, index) => index >= (selectedPage * limit - limit) && index < (selectedPage * limit)).map(product => <ProductItem key={product.id} product={product} />)
            : <h2>Продукты не найдены...</h2>
        }
      </div>
    </div>
  )
}

export default Products
