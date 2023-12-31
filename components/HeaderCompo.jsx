import Image from "next/image";
import girl from "@/public/girlStudy.jpg"
export default function HeaderCompo(){
    return(
        <section>
        <div className="header">
          <div className="textContetent header_content ">
            <span className="stokWeb block plantaforma sm:text-lg text-base font-bold text-[#FF931E]">Plantaforma de Educacional</span>
            <h1 className="font-extrabold sm:text-4xl text-3xl text-[#160E04]  leading-8 ">Tenha acesso a uma <span className="text-[#FF931E]">dezena de material</span> de aprendizagem e de avaliacao.</h1>
            <p className="sm:text-lg sm:leading-6 leading-4 font-medium mb-1 text-[#333] text-sm">aqui voce encontrara uma gama diversificada de recursos para enriquecer sua jornada educacional</p>
            <button className="bg-[#FF931E] font-semibold text-white py-1 px-2 mb-3 rounded-sm ">Explorar</button>
          </div>  

          <div className="girlImage header_content">
          <Image src={girl}
              width={375}
              height={375}
              sizes="100%"
              alt="Picture of the author"
              placeholder="blur"
              />              
          </div>
        </div>

      </section>
    )
}