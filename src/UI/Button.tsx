import { ReactNode } from 'react'
import '../styles/Button.css'

interface IPropsButton{
    children: ReactNode,
    onClick: () => void,
    active: boolean
}

const Button = (props: IPropsButton) => {
  return (
    <button className='my-button' onClick={props.onClick} style={props.active ? {opacity: 1} : {opacity: 0.7}}>
      {props.children}
    </button>
  )
}

export default Button
