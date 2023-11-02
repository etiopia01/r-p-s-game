import Pick from "./Pick";


export default function Picker() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 h-[600px] w-[600px] bg-[url(/bg-triangle.svg)] bg-center bg-no-repeat">
            <div className="flex gap-12">
<Pick icon={"/icon-paper.svg"} name={"Paper"}/>
<Pick icon={"/icon-rock.svg"}  name={"Rock"}/>
</div>
<Pick icon={"/icon-scissors.svg"}  name={"Scissors"}/>

        </div>
    )
}