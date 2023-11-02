import { signal } from "@preact/signals-react"
import { useNavigate } from "react-router-dom"
export const pick = signal("")
export const randomPick = signal("")

export default function Pick({icon,name,dimension}:{icon:string, name:string, dimension:string}) {
    const navigate = useNavigate()
    const values = ["rock","paper","scissors"]

    const handleClick = ()=> {
        let random = Math.floor(Math.random()*3)
       randomPick.value = values[random]
        
        pick.value = name
        navigate("/result")
        
    }

    return (
        <div className={`${name} ${dimension} hover:translate-y-2 hover:scale-105`} onClick={handleClick}>
            <div className="bg-white h-full w-full rounded-full flex justify-center items-center ">
            <img src={icon} />
            </div>

        </div>
    )
}