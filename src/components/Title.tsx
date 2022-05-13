interface TitleProps {
  title: string
  adicionalClass?: string
}

export function Title({ title, adicionalClass }: TitleProps) {
  return (
    <div className="flex items-center gap-4 mb-40">
      <h2
        className={`${adicionalClass} text-3xl font-bold flex-shrink-0 flex items-center gap-2`}
      >
        <span className="text-brand-teal-500 text-xs">▶</span>
        {title}
      </h2>

      <div className="hidden xs:block h-[1px] w-2/3 bg-brand-gray-700 opacity-50" />
    </div>
  )
}
