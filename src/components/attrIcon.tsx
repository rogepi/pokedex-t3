interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  type: string
}

const attrColorMap = new Map([
  ['一般', 'a4acaf'],
  ['格斗', 'd56723'],
  ['飞行', '3dc7ef'],
  ['毒', 'b97fc9'],
  ['地面', 'f7de3f'],
  ['岩石', 'a38c21'],
  ['虫', '729f3f'],
  ['幽灵', '7b62a3'],
  ['钢', '9eb7b8'],
  ['火', 'fd7d24'],
  ['水', '4592c4'],
  ['草', '9bcc50'],
  ['电', 'eed535'],
  ['超能力', 'f366b9'],
  ['冰', '4fc0e2'],
  ['龙', 'f16e57'],
  ['恶', '707070'],
  ['妖精', 'fdb9e9'],
])

export default function AttrIcon(props: IProps) {
  return (
    <div>
      <div
        className="flex h-5 w-12 items-center justify-center rounded-md text-sm text-white md:text-base"
        style={{ backgroundColor: '#' + attrColorMap.get(props.type) }}
      >
        {props.type}
      </div>
    </div>
  )
}
