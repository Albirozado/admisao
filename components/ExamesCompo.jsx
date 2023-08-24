import Image from "next/image"
import uem from "../public/instituicoes/uem.png"
import ujc from "../public/instituicoes/ujc.png"
import up from "../public/instituicoes/up.png"
import icm from "../public/instituicoes/icm.png"
export default function ExamesCompo(){
    return(
        <section className="mb-5 sm:mx-5 mx-3 sm:mt-0 mt-44 ">
            <h1 className="text-center text-[#160E04] font-bold sm:base text-3xl">baixe exame de <span className="text-[#FF931E]">todas as instituicoes</span> publicas </h1>
            <div className="container grid sm:grid-cols-4 grid-cols-2 gap-4">
                <div className=" text-[#fff] shadow-md border-solid border-1 border-[#ccc] py-3 rounded-lg flex justify-center">
                    <Image
                     width={120}
                     height={50}
                    src={uem}
                    />
                </div>
                <div className=" text-[#fff] shadow-md border-solid border-1 border-[#ccc] py-3 rounded-lg flex justify-center">
                    <Image
                    width={140}
                    height={50}
                    src={ujc}
                    />
                </div>
                <div className=" text-[#fff] shadow-md border-solid border-1 border-[#ccc] py-3 rounded-lg flex justify-center">
                    <Image
                    width={160}
                    height={50}
                    src={up}
                    />
                </div>
                <div className=" text-[#fff] shadow-md border-solid border-1 border-[#ccc] py-3 rounded-lg flex justify-center">
                    <Image
                    width={160}
                    height={50}
                    src={icm}
                    />
                </div>

            </div>
        </section>
       
    )
}