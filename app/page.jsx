import HeaderCompo from "@/components/HeaderCompo"
import ExamesCompo from "../components/ExamesCompo"
import BlogCompo from "../components/BlogCompo"
import MaterialHome from "../components/MaterialHome"
import MulherNegra from "../public/blog/estudante-afrocut.jpg"
import JovemNegro from "../public/blog/jovem-negro.jpg"
import CrincaEstuda from "../public/blog/crianca-estuda.jpg"

export default function Home() {
  return (      
    <>
    <header>
        <HeaderCompo/>
    </header>
    <main>
        <ExamesCompo/>
        <MaterialHome/>
        <BlogCompo image = {MulherNegra} image2 = {JovemNegro} image3 = {CrincaEstuda} title = "Blog"/>
    </main>
      
    </>
  
    
  )
}
