export default function IconBox(prop: { Icon: string, position?: string, img?: boolean }) {
  return (
    <div className={`logo-hero flex justify-center items-center bg-primary/10 rounded-card w-fit h-fit px-5 py-4 mb-6 ${prop.position || ''}`}>
        {prop.img ? <img className="rounded w-16 h-16" src={prop.Icon} alt="" /> : <i className={`text-2xl ${prop.Icon}`}></i>}
    </div>
  )
}