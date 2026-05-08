import { Link } from "react-router-dom";

export default function MainButton(props: { text: string, icon?: string, to: string }) {
  return (
    <Link to={props.to} className="text-sm transition-colors bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-8 py-3">
        <i className={`${props.icon} rtl:ml-2 rtl:mr-2`}></i>
        {props.text}
    </Link>
  )
}