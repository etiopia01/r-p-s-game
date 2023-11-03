import { RulesOpen } from "./RulesBtn"
export default function Rules(){
    return (
        <div className="h-full w-full flex justify-center items-center absolute">
            <div className="h-auto bg-white rounded-lg flex flex-col justify-start items-center gap-6 p-8">
                <div className="flex justify-between w-full h-auto">
                    <h1 className="text-3xl text-Dark-Text">RULES</h1>
                    <button onClick={()=> {RulesOpen.value=false}}><img src="/icon-close.svg" /></button>
                </div>
                <img src="/image-rules.svg" />
            </div>
        </div>
    )
}