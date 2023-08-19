import  Sugestoes from "@/components/Sugestoes"
import Anuncios from "@/components/Anuncios"
export default function ExamesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <section className="grid sm:grid-cols-4 grid-cols-1 " >
           <div className="hidden py-2.5 px-3 mr-2 bg-[#fff] sm:block  ">
              <Sugestoes/>
          </div>
          <div className="col-span-2 w-full max-w-auto "  >  
          {children}
          </div>
          <div className=" py-2.5 px-3 sm:ml-2 ml-0 bg-[#fff]">
            <Anuncios/>

          </div>
          </section>
  )
}
