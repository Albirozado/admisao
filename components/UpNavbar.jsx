import Link from "next/link";
import Image from "next/image";
import Matematica from "@/public/operador-matematico.png"
import Filosofia from "@/public/cerebro.png"
import FisicaOnda from "@/public/onda.png"
import Portugues from "@/public/linguisti.png"
import Biologia from "@/public/celula.png"
import Quimic from "@/public/quimico.png"
import Historia from "@/public/historico.png"
import Ingles from "@/public/linguistic.png" 
export default function UpNavBar() {
    return (
        <div className="scroll-container rounded-md bg-[#fff]" >
            <ul className="flex flex-row gap-3 mb-1">
                <li className="bg-[#fff] mt-2 pt-2 px-2  rounded-md hover:scale-105 drop-shadow-md border-solid border-1 border-[#ccc]" >
                    <Link href="/exames/up/portugues" className="decoration-transparent ">
                        <div className="flex justify-center">
                            <Image src={Portugues}
                               width={25}
                               height={25}
                               alt="Picture of the author"/>    
                        </div>
                        <p className="my-0 pb-1 pt-0.5  text-sm ">Portugues</p>
                    </Link>
                </li>
                <li className="bg-[#fff] mt-2 pt-2 px-2   rounded-md hover:scale-105 drop-shadow-md border-solid border-1 border-[#ccc]" >
                    <Link href="/exames/up/matematica" className="decoration-transparent">
                        <div className="flex justify-center">
                            <Image src={Matematica}
                               width={25}
                               height={25}
                               alt="Picture of the author"/>    
                        </div>
                        <p className="my-0 pb-1 pt-0.5 text-sm">Matematica</p>
                    </Link>
                </li>
                <li className="bg-[#fff] mt-2 pt-2 px-2 rounded-md hover:scale-105 drop-shadow-md border-solid border-1 border-[#ccc]" >
                    <Link href="/exames/uem/biologia" className="decoration-transparent">
                        <div className="flex justify-center">
                            <Image src={Biologia}
                               width={25}
                               height={25}
                               alt="Picture of the author"/>    
                               
                        </div>
                        <p className="my-0 pb-1 pt-0.5 text-sm">Biologia</p>
                    </Link>
                </li>
                <li className="bg-[#fff] mt-2 pt-2 px-2   rounded-md hover:scale-105 drop-shadow-md border-solid border-1 border-[#ccc]" >
                    <Link href="#" className="decoration-transparent">
                        <div className="flex justify-center">
                            <Image src={Quimic}
                               width={25}
                               height={25}
                               alt="Picture of the author"/>    
                        </div>
                        <p className="my-0 pb-1 pt-0.5 text-sm">Quimica</p>
                    </Link>
                </li>
                <li className="bg-[#fff] mt-2 pt-2 px-2   rounded-md hover:scale-105 drop-shadow-md border-solid border-1 border-[#ccc]" >
                    <Link href="#" className="decoration-transparent">
                        <div className="flex justify-center">
                            <Image src={Filosofia}
                               width={25}
                               height={25}
                               alt="Picture of the author"/>    
                        </div>
                        <p className="my-0 pb-1 pt-0.5 text-sm">Filosofia</p>
                    </Link>
                </li>
                <li className="bg-[#fff] mt-2 pt-2 px-2   rounded-md hover:scale-105 drop-shadow-md border-solid border-1 border-[#ccc]" >
                    <Link href="#" className="decoration-transparent">
                        <div className="flex justify-center">
                            <Image src={FisicaOnda}
                               width={25}
                               height={25}
                               alt="Picture of the author"/>    
                        </div>
                        <p className="my-0 pb-0 pt-0.5 text-sm">Fisica</p>
                    </Link>
                </li>
                <li className="bg-[#fff] mt-2 pt-2 px-2   rounded-md hover:scale-105 drop-shadow-md border-solid border-1 border-[#ccc]" >
                    <Link href="#" className="decoration-transparent">
                        <div className="flex justify-center">
                            <Image src={Ingles}
                               width={25}
                               height={25}
                               alt="Picture of the author"/>    
                        </div>
                        <p className="my-0 pb-0 pt-0.5 text-sm">Ingles</p>
                    </Link>
                </li>
                <li className="bg-[#fff] mt-2 pt-2 px-2 rounded-md hover:scale-105 drop-shadow-md border-solid border-1 border-[#ccc]" >
                    <Link href="#" className="decoration-transparent">
                        <div className="flex justify-center">
                            <Image src={Historia}
                               width={25}
                               height={25}
                               alt="Picture of the author"/>    
                        </div>
                        <p className="my-0 pb-0 pt-0.5 text-sm">Historia</p>
                    </Link>
                </li>
                <li></li>
            </ul>
        </div>
    );
}
