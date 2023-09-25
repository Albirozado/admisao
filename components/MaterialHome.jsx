import {HiMiniScissors} from 'react-icons/hi2';
import {FaPencil} from 'react-icons/fa6'
import { FaCalculator } from 'react-icons/fa6'
import { FaGraduationCap } from 'react-icons/fa'
import scissorisIcon from "../public/material/scissors_2542051.svg"
import Calcuradora from "../public/material/calculator_438089.svg"
import Pencil from "../public/material/pencil_2280532.svg"
import Gradua from "../public/material/mortarboard_607485.svg"
import Image from 'next/image';
import Link from 'next/link';
export default function MaterialHome(){
    return(
        <section className='pb-5'>
            <h3 className='text-center text-[#160E04] font-semibold uppercase sm:base text-3xl'>Baixe <span className='text-[#FF931E]'>livros, editais e matrizes.</span></h3>
            <div className='MaterialHome'>
                <div>
                    <Link href="#" style={{textDecoration:"none"}}>
                        <div className="bg-[#fb8500] flex items-center px-3 py-2 rounded-md">
                            <Image
                            src={scissorisIcon}
                            width={24}
                            height={24}
                            className='mr-2'
                            style={{transform: "rotate(90deg)"}}
                            />
                            <span className='text-white'>Educacao Infantil</span>
                        </div>
                    </Link>

                </div>
                <div>
                    <Link href="#" style={{textDecoration:"none"}}>
                    <div  className="bg-[#ffb703] flex items-center px-3 py-2 rounded-md">
                        <Image src={Pencil} width={24} height={24} className='mr-2'/>
                        <span className='text-white'>Ensino Primario</span>
                    </div>
                    </Link>
                </div>
                <div>
                    <Link href="#" style={{textDecoration:"none"}}>
                    <div  className="bg-[#219ebc] flex items-center px-3 py-2 rounded-md">
                        <Image src={Calcuradora} width={24} height={24} className='mr-2'/>
                        <span className='text-white'>Ensino Medio</span>
                    </div>
                    </Link>
                </div>
                <div>
                    <Link href="#" style={{textDecoration:"none"}}>

                        <div  className="bg-[#023047] flex items-center px-3 py-2 rounded-md">
                        <Image src={Gradua} width={24} height={24} className='mr-2'/>
                            <span className='text-white'>Ensino Superior</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}