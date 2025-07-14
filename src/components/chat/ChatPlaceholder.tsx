interface Props {
    icon:string,
    name:string
}

export const ChatPlaceholder=({icon,name}:Props)=>{
    return(
        <aside className="w-full flex flex-col gap-2 justify-center items-center h-full opacity-50">
            <i className={`ri-${icon} text-4xl`}></i>
            <p className="font-bold text-md">{name} está esperando tu mensaje!</p>
        </aside>
    )
}