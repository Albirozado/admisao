import {HiMiniScissors} from 'react-icons/hi2';
import {FaPencil} from 'react-icons/fa6'
import { FaCalculator } from 'react-icons/fa6'
import { FaGraduationCap } from 'react-icons/fa'
import scissorisIcon from "../public/material/scissors_2542051.png"
import Image from 'next/image';
export default function MaterialHome(){
    return(
        <section className='py-5'>
            <h1 className="text-center text-[#160E04] font-bold sm:base text-3xl">baixe exame de <span className="text-[#FF931E]">todas as instituicoes</span> publicas </h1>
            <div className='MaterialHome'>
                <div>
                <div className="bg-[#fb8500] flex items-center px-3 py-2 rounded-md">
                    <Image
                    src={scissorisIcon}
                    width={24}
                    height={24}
                    className='mr-2'
                    />
                    <span className='text-white'>Educacao Infantil</span>
                </div>

                </div>
                <div>
                    <div  className="bg-[#ffb703] flex items-center px-3 py-2 rounded-md">
                        <FaPencil/>
                        <span className='text-white'>Ensino Primario</span>
                    </div>
                </div>
                <div>
                    <div  className="bg-[#219ebc] flex items-center px-3 py-2 rounded-md">
                        <FaCalculator/>
                        <span className='text-white'>Ensino Medio</span>
                    </div>
                </div>
                <div>
                    <div  className="bg-[#023047] flex items-center px-3 py-2 rounded-md">
                        <FaGraduationCap/>
                        <span className='text-white'>Ensino Superior</span>
                    </div>
                </div>
            </div>
        </section>
    )
}