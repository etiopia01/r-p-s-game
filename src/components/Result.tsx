import { signal } from "@preact/signals-react"
import Pick from "./Pick"
import { pick, randomPick } from "./Pick"
import evaluate from "../utils"
import { Link } from "react-router-dom"


export const score = signal(0)


export default function Result (){
    
    
    let res = evaluate({pick1:pick.value, pick2: randomPick.value})
    if(res === "You win") {
        score.value += 1
    }
    if(res === "You lose") {
        score.value -= 1
    }




    return (
        <div className="flex items-center justify-between gap-12 h-[600px] p-6">
            <div className="flex flex-col gap-4 items-center">
                <p className="text-lg text-white">YOU PICKED</p>
            <Pick name={pick.value} dimension="big" icon={`/icon-${pick.value}.svg`}/>
            </div>
<div className="flex flex-col gap-4">
    <p className="text-5xl text-white">{res}</p>
    <Link to={"/"}>
        <button className="w-full h-12 bg-white rounded-md p-6 flex items-center justify-center hover:text-red-600">PLAY AGAIN</button>
    </Link>

</div>
            <div className="flex flex-col gap-4 items-center">
                <p className="text-lg text-white">THE HOUSE PICKED</p>
                <Pick name={randomPick.value} dimension="big" icon={`/icon-${randomPick.value}.svg`}/>
            </div>
        </div>
    )
}