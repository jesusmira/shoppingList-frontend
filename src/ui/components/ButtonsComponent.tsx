import { ItemButton } from "./ItemButton"

export const ButtonsComponent = () => {
    const data = [
        {
            src: "./format_list_bulleted.svg",
            tipText: "items",
        },
        {
            src: "./replay.svg",
            tipText: "history",
        },
        {
            src: "./insert_chart.svg",
            tipText: "graph",
        },
    ]
    return (
        <div className="flex flex-col gap-16 items-center">
            {data.map(({ src, tipText }) => (
                <ItemButton key={src} src={src} tipText={tipText} />
            ))}
        </div>
    )
}

