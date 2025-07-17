export const scrollToBottom=(container :React.RefObject<HTMLElement | null>)=>{
    if(container.current){
    container.current.scrollTop = container.current.scrollHeight
  }}