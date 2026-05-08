import IconBox from "../components/IconBox";

export default function Box(props: { icon: string, HeadLine: string, text: string, position?: string, img?: boolean }) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all`}>
        <IconBox Icon={props.icon} position= {props.position || ''} img={props.img || false}></IconBox>
        <h3 className="text-lg font-bold text-foreground mb-2">{props.HeadLine}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{props.text}</p>
    </div>
  )
}