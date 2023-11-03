import Pick from "./Pick";


export default function Picker() {
    return (
        <div className="flex flex-col items-center justify-center gap-12  bg-[url(/bg-triangle.svg)] bg-center bg-no-repeat">
            <div className="flex gap-12">
<Pick icon={"/icon-paper.svg"} name={"paper"} dimension="small"/>
<Pick icon={"/icon-rock.svg"}  name={"rock"} dimension="small"/>
</div>
<Pick icon={"/icon-scissors.svg"} name={"scissors"}dimension="small"/>

        </div>
    )
}