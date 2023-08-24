import Link from "next/link"
export default function Sugestoes(){
    return(
            <aside>
                <div>
                    <h6 className="text-[#0e1d27] sugere font-medium text-sm sm:text-lg">Editais</h6>
                
                    <Link href="/blog" className="block text-[#0e1d27] LinkDecoration  text-xs sm:text-sm " >baixar edital da UEM 2020</Link>
                    <Link href="/blog"  className="block text-[#0e1d27] LinkDecoration  text-xs sm:text-sm  ">baixar edital da UEM 2019</Link>
                    <Link href="/blog"  className="block text-[#0e1d27] LinkDecoration  text-xs sm:text-sm  ">baixar edital da UP 2021</Link>
                    <Link href="/blog"  className="block text-[#0e1d27] LinkDecoration  text-xs sm:text-sm  ">baixar edital da UJC 2022</Link>
                </div>
                <div>
                    <h6 className="mt-3 font-medium sugere text-[#0e1d27] text-sm sm:text-lg">Blog</h6>
                    <Link href="/blog"  className="block text-[#0e1d27] LinkDecoration  text-xs sm:text-sm  ">como estudar para exames de admissao</Link>
                    <Link href="/blog"  className="block text-[#0e1d27] LinkDecoration  text-xs sm:text-sm  ">Melhores cursos e com mais mercdo em Moçambique</Link>
                </div>
                <div>
                    <h6 className="mt-3 font-medium sugere text-[#0e1d27] text-sm sm:text-lg">Materiais & Livros</h6>
                    <Link href="/material"  className="block text-[#0e1d27] LinkDecoration   text-xs sm:text-sm   ">baixar todos livros do ensino secundario </Link>
                    <Link href="/material"  className="block text-[#0e1d27] LinkDecoration   text-xs sm:text-sm   ">baixar todos livros do ensino primario  </Link>
                    <Link href="/material"  className="block text-[#0e1d27] LinkDecoration   text-xs sm:text-sm   ">baixar livro de histro moderna </Link>
                </div>

            </aside>
        
    )

}