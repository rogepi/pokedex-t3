import Image from 'next/image'
import LoadingSvg from '../../public/loading.svg'

export interface ILoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
}

export default function Loading(props: ILoadingProps) {
  const size = props.size || 50
  return (
    <div>
      <Image src={LoadingSvg} alt="loading" width={size} height={size} />
    </div>
  )
}
