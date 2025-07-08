import { Link } from "react-router-dom";

export function Contact (){
    return (
        <>
        <h1>Titulo del Contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aperiam libero officiis voluptatem ullam sint dolorem facere tenetur ex odio minima tempora, distinctio minus, quaerat mollitia magnam ab, reprehenderit facilis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aperiam libero officiis voluptatem ullam sint dolorem facere tenetur ex odio minima tempora, distinctio minus, quaerat mollitia magnam ab, reprehenderit facilis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aperiam libero officiis voluptatem ullam sint dolorem facere tenetur ex odio minima tempora, distinctio minus, quaerat mollitia magnam ab, reprehenderit facilis?</p>
        <Link className="text-white bg-blue-600 text-2xl" to="/">Ir a Home</Link>
        </>
    )
}