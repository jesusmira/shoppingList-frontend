import { useAppSelector } from "../../hooks/dbstore";

type ToolTipProps = {
    children: JSX.Element
    tipText: string
}
export const TooltipItem = ({ children, tipText}: ToolTipProps) => {

  const { isMobile } = useAppSelector((state) => state.isMobile);

  return (
        <div className="group relative inline-block">
            {children}
          <div
            className={`absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded bg-slate-600 px-4 py-[4px] text-sm  text-white opacity-0 group-hover:opacity-100 ${isMobile ? 'hidden' : 'flex'}`}
          >
            <span
              className={'absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-slate-600 font-quicksand'}
            ></span>
            {tipText}
          </div>
      </div>
  )
}
