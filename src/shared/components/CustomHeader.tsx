
interface Props {
    title: string;
    description?: string;
}

export const CustomHeader = ({title, description}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mb-8">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
    </div>
  )
}
