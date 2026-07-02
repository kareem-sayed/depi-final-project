export default function HeadSection(prop: {
  title: string;
  position?: string;
}) {
  return (
    <h1
      className={`text-3xl font-bold text-foreground mb-8 ${prop.position || ""}`}
    >
      {prop.title}
    </h1>
  );
}
