export default function HeadSection(prop: { title: string, position?: string }) {
  return (
    <h1 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${prop.position || ''}`}>{prop.title}</h1>
  )
}