import {HiMiniScissors} from 'react-icons/hi2'
import {FaPencil} from 'react-icons/fa6'
import { FaCalculator } from 'react-icons/fa6'
import { FaGraduationCap } from 'react-icons/fa'
export default function MaterialHome(){
    return(
        <section>
            <div>
            <h3>Tenha acesso a todos os materiais de aprendisagem: livros, editais, matrizes...</h3>
            <div className="bg-[#fb8500] ">
                <HiMiniScissors/>
                <span>Educacao Infantil</span>
            </div>
            <div  className="bg-[#ffb703] text-white">
                <FaPencil/>
                <span>Ensino Primario</span>
            </div>
            <div  className="bg-[#219ebc] text-white">
                <FaCalculator/>
                <span>Ensino Medio</span>
            </div>
            <div  className="bg-[#023047] text-white">
                <FaGraduationCap/>
                <span>Ensino Superior</span>
            </div>
            </div>
        </section>
    )
}