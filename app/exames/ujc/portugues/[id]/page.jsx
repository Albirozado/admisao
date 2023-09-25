import Link from "next/link"
export default async function DownloadFinal(){
 
    return(
        <>

            <div>
        <h4 className="text-center text-lg"> baixar exame da ujc portugues 2050</h4>
                <div className="flex justify-center">
                    <Link href="/">
                        <button className="text-white bg-slate-800 py-2 px-4 font-semibold text-base">Baixar Exame</button>
                    </Link>
                </div>
            </div>
        
                
        </>
        
                
        
    )
}