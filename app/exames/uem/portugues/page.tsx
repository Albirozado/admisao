import {LiaFileDownloadSolid} from "react-icons/lia"
import Link from "next/link"
import { Exames } from "@/typings"
export default async function ExamePortugues(){
    const res = await fetch("https://lively-lab-coat-fox.cyclic.app/exames/uem/portugues")
    const exames: Exames[] = await res.json()


    return (
        
        <section>
             <div> 
                    <h6 className="font-light text-center sm:text-sm text-xs">baixe todos<span className="font-medium"> exames de portugues da UEM</span>  desde o ano 2009 ate 2023</h6>
                    
                    {exames.map((exame, index)=>(
                    <div key={exame.ano} className="border border-[#ccc] py-2 px-3 mb-2 rounded-md sm:flex justify-between  items-center sm:text-sm text-xs ">
                        <p className="m-0">baixar exame de <span className="font-semibold">{exame.escola} {exame.nome} {exame.variante} {exame.ano}</span> </p>

                        <Link href={`/exames/uem/portugues/download/${exame.id}`} style={{textDecoration: "none"}} className=" text-[#2c8385] font-semibold tracking-normal rounded-sm flex mt-0.5 sm:sm:text-sm text-xs">baixar<LiaFileDownloadSolid className="text-xs sm:text-lg"/></Link>
                    </div>
                    ))}
             
             </div>
        </section>
    )
}