import { useRef } from "react"

export function useRefChange(element:any,fn:()=>void){
  const ref = useRef(element)


  if(ref.current !== element) {
    ref.current = element
    fn()
  }
  }