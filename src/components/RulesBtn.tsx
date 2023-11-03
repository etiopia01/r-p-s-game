import { signal } from "@preact/signals-react"

export const RulesOpen = signal(false)
export default function RulesBtn (){
     const handleClick = ()=> {
        RulesOpen.value = true
     }

    return (
        <button className="border-2 border-Header-Outline text-white text-md text-center p-2 h-auto w-[160px] rounded-md hover:scale-110 hover:text-lg" onClick={handleClick}>RULES</button>
    )
}