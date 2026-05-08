export default function Sbox(props: { icon: string, text: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-secondary/40 p-4 text-center">
        <i className={`${props.icon} text-primary`}></i>
        <p>{props.text}</p>
    </div>
  )
}