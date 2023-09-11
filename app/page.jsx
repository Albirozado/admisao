import HeaderCompo from "@/components/HeaderCompo"
import ExamesCompo from "../components/ExamesCompo"
import BlogCompo from "../components/BlogCompo"
import MaterialHome from "../components/MaterialHome"


export default function Home() {
  return (      
    <>
    <header>
        <HeaderCompo/>
    </header>
    <main>
        <ExamesCompo/>
        <MaterialHome/>
        <BlogCompo/>
    </main>
      
    </>
  
    
  )
}
