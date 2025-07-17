import Markdown from "react-markdown";
import remarkGfm from "remark-gfm"; 'remark-gfm'

export function MDToHTML({children}:{children:string}){
    return (
        <Markdown remarkPlugins={[remarkGfm]}>
            {children}
        </Markdown>
    )
}