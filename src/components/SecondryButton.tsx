import { Link } from "react-router-dom";

export default function SecondryButton(props: { text: string, icon?: string, to: string }) {
  return (
    <Link to={props.to} className="border border-border rounded-md px-8 py-3 text-sm font-semibold bg-background text-foreground/80 hover:text-primary hover:border-primary transition-colors">
        <i className={`${props.icon} rtl:ml-2 rtl:mr-2`}></i>
        {props.text}
    </Link>
  )
}

