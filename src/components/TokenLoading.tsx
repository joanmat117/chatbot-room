export function TokenLoading({children}:{children:any}){
    
    
    return (
        <>
            <span style={{animation:"show-with-scale 2s both"}}>
                {children}
            </span>
        </>
    )
}