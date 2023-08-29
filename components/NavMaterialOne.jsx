
import Link from "next/link"
export default function NavMaterialOne(){
    const style = {
        color: "red"
    }
    return (
        <nav >
            <Link href="#">Editais & Matrizes</Link>
            <Link href="#">Livros</Link>
        </nav>
    )

}