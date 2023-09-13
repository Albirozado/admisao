import Image from "next/image"
import Anuncio from "../public/anuncio.png"
export default function Anuncions(){
    return(
        <>
        <Image
        src={Anuncio}
        width={1000}
        height={600}

        />
        </>
    ) 

}