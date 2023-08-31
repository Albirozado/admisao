import Image from "next/image"
import uem from "../public/instituicoes/uem.png"
import ujc from "../public/instituicoes/ujc.png"
import up from "../public/instituicoes/up.png"
import icm from "../public/instituicoes/icm.png"
import Link from "next/link"
export default function ExamesCompo(){
    return(
        <section className="mb-5 sm:mx-2 mx-2 sm:pt-0 pt-44 exameCompo">
            <h1 className="text-center text-[#160E04] font-bold sm:base text-3xl">baixe exame de <span className="text-[#FF931E]">todas as instituicoes</span> publicas </h1>

            <div className="container grid md:grid-cols-4 grid-cols-2 gap-2">
            <Link href="/caminho-para-a-pagina" style={{textDecoration: "none"}}>
            <div className="text-[#fff] shadow-md border-solid border-1 border-[#ccc] py-3 rounded-lg">
                <div className=" flex justify-center">
                    <Image
                     width={120}
                     height={50}
                    src={uem}
                    />
                </div>
                <p className="mb-0 text-center sm:text-sm text-sm text-[#333] ">baixar exames</p>
            </div>
            </Link>
            <Link href="/caminho-para-a-pagina" style={{textDecoration: "none"}}>
                <div className="text-[#fff] shadow-md border-solid border-1 border-[#ccc] py-3 rounded-lg">
                    <div className="flex justify-center">
                    <Image
                        width={130}
                        height={50}
                        src={ujc}
                        className="pb-3"
                    />
                    </div>
                    <p className="mb-0 text-center sm:text-sm text-sm text-[#333]">baixar exames</p>
                </div>
            </Link>
            <Link href="#" style={{textDecoration: "none"}}> 
            <div className="text-[#fff] shadow-md border-solid border-1 border-[#ccc] py-3 rounded-lg">
                <div className="  flex justify-center">
                    <Image
                    width={160}
                    height={50}
                    src={up}
                    className="pb-3"
                    />
                </div>
                <p className="mb-0 text-center sm:text-sm text-sm text-[#333]">baixar exames</p>
            </div>
            </Link>
            <Link href="#" style={{textDecoration: "none"}}>
            <div className="text-[#fff] shadow-md border-solid border-1 border-[#ccc] py-3 rounded-lg">
                <div className="  flex justify-center">
                    <Image
                    width={150}
                    height={50}
                    src={icm}
                    />
                </div>
                <p className="mb-0 text-center sm:text-sm text-sm text-[#333]">baixar exames</p>

            </div>
            </Link>

                
                

            </div>
        </section>
       
    )
}