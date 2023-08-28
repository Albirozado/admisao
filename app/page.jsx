import HeaderCompo from "@/components/HeaderCompo"
import ExamesCompo from "../components/ExamesCompo"
import BlogCompo from "../components/BlogCompo"
export default function Home() {
  return (      
    <>
      <section>
        <HeaderCompo/>
      </section>
      <section>
        <ExamesCompo/>
      </section>
      <section className="mx-2">
        <BlogCompo/>

      </section>
    </>
  
    
  )
}
