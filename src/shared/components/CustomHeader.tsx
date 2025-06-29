
interface Props {
    title: string;
    description?: string;
}

export const CustomHeader = ({title, description}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 my-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && <p className="text-lg text-purple-200 mb-8">{description}</p>}
    </div>
  )
}
