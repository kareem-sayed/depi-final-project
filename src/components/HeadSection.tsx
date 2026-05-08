export default function HeadSection(prop: { title: string, position?: string }) {
  return (
    <h1 className={`text-2xl font-bold mb-4 ${prop.position || ''}`}>{prop.title}</h1>
  )
}