import { Link } from "react-router-dom";

export default function MainButton(props: { text: string, iconornot?: boolean, icon?: string, to: string, onClick?: () => void; }) {
  return (
    <Link to={props.to} onClick={props.onClick} className="flex gap-2 justify-center items-center text-sm transition-colors bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-8 py-3">
        {props.iconornot && <i className={`${props.icon}`}></i>}
        {props.text}
    </Link>
  )
}