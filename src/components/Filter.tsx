import { FC } from "react"
import Button from "../UI/Button"

interface IPropsFilter{
  isFavourites: boolean,
  setIsFavourites: (bool: boolean) => void,
  setSelectedPage: (num : number) => void
}

const Filter: FC<IPropsFilter> = ({isFavourites, setIsFavourites, setSelectedPage}) => {

  return (
    <div>
      <Button onClick={() => {
        setIsFavourites(true)
        setSelectedPage(1)
      }} active={isFavourites}>Избранное</Button>
      <Button onClick={() => setIsFavourites(false)} active={!isFavourites}>Все продукты</Button>
    </div>
  )
}

export default Filter
