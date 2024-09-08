import { FC } from "react"
import Button from "../UI/Button";

interface IPropsPagination{
    numberProducts: number,
    limit: number,
    selectedPage: number,
    setSelectedPage: (num: number) => void
}

const Pagination: FC<IPropsPagination> = ({numberProducts, limit=10, selectedPage, setSelectedPage}) => {
  const numberPages = Math.ceil(numberProducts / limit);

  const arrNumbersPages = [];

  for (let i = 1; i <= numberPages; i++) {
    arrNumbersPages.push(i);
  }
  return (
    <div className="pagination">
      {arrNumbersPages.map(number => <Button onClick={() => {setSelectedPage(number)}} active={selectedPage === number}>{number}</Button>)}
    </div>
  )
}

export default Pagination
