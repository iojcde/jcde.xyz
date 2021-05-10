import Image from 'next/image'
export type ProjectProps = {
  image: string
  url: string
  height: string
  className?: string
  width: string
}
const Card: React.FC<ProjectProps> = ({
  image,
  height,
  className,
  width,
  url,
}: ProjectProps) => {
  return (
    <div
      className={
        className +
        ' max-w-min mx-auto  rounded-xl shadow-md transition hover:-translate-y-1 duration-100 transform border border-gray-100 dark:border-gray-400 hover:shadow-xl'
      }
    >
      <div className="flex-col flex justify-center items-center  ">
        <div className="flex-shrink-0">
          <a href={url} className="block ">
            <Image
              src={image}
              width={width}
              height={height}
              layout="fixed"
              alt="profile"
              className=" bg-white rounded-lg"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Card
