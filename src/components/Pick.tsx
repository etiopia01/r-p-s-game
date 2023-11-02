export default function Pick({icon,name}:{icon:string, name:string}) {
    return (
        <div className={`${name} hover:translate-y-2 hover:scale-105`}>
            <div className="bg-white h-full w-full rounded-full flex justify-center items-center ">
            <img src={icon} />
            </div>

        </div>
    )
}