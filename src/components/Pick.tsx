import { signal } from "@preact/signals-react"
import { useNavigate } from "react-router-dom"
import evaluate from "../utils"
import { values } from "../utils"
export const pick = signal(values[Math.floor(Math.random()*3)])
export const randomPick = signal(values[Math.floor(Math.random()*3)])
export const res = signal("")
export const score = signal(parseInt(localStorage.getItem("score") || ""))

export default function Pick({icon,name,dimension}:{icon:string, name:string, dimension:string}) {
    const navigate = useNavigate()

  

    const handleClick = ()=> {
        if(dimension === "small") {
        let random = Math.floor(Math.random()*3)
       randomPick.value = values[random]
       pick.value = name
       res.value = evaluate({pick1:pick.value, pick2: randomPick.value})
       if(res.value==="You win") {
        score.value += 1
        localStorage.setItem("score", score.value.toString())
        
       }
        else if(res.value === "You lose") {
            score.value -= 1
            localStorage.setItem("score", score.value.toString())
        }
        
        navigate("/result") 
    }
    return
        
        
        
    }

    return (
        <div className={`${name} ${dimension} hover:translate-y-2 hover:scale-105`} onClick={handleClick}>
            <div className="bg-white h-full w-full rounded-full flex justify-center items-center box ">
            <img src={icon} />
            </div>

        </div>
    )
}