export function TokenLoading({children}:{children:string}){
    
    if(typeof children !== "string"){
        return <>{children}</>
    }

    const characters = children.split(" ")
    
    return (
        <>
            {characters.map((word,index)=>{
                return (
                    <span key={index} style={{animation:"show-with-scale 2s both",animationDelay: `${index*0.1 - index*0.06}s`}}>
                        {word + " "}
                    </span>
                )
            })}
        </>
    )
}