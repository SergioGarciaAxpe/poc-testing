
type TitleLabelProps = {
    title: string;
    subtitle: string;
}

export const TitleLabel = ({title, subtitle}: TitleLabelProps) => {
  return (
    <div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
    </div>
  )
}
