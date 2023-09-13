import Link from "next/link"
import getPortuguesUemId from "../../getPortuguesUemId"
export default async function DownloadFinal({params:{id}}){
    const exame = await getPortuguesUemId(id)
 
    return(
        <>
        
                <h4 className="text-center text-lg"> baixar exame da {exame.escola} {exame.nome} {exame.variante} {exame.ano}</h4>
                <div className="flex justify-center">
                    <Link href={exame.baixar}>
                        <button className="text-white bg-slate-800 py-2 px-4 font-semibold text-base">Baixar Exame</button>
                    </Link>
                </div>
        </>
        
                
        
    )
}