const Tag: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="bg-gray-900  px-2 py-1 text-xs  md:text-sm rounded   text-white shadow ">
      {text}
    </div>
  )
}
export default Tag
