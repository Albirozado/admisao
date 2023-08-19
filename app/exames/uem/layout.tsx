import PortuguesNavBar from "@/components/PortuguesNavBar"
import Sugestoes from "@/components/Sugestoes"

export default function UemLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section>
          <div>
            <div><PortuguesNavBar/></div>              
          </div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-1 mx-2">
            <div className="bg-[#fff] mt-2 px-2 sm:hidden">
             <Sugestoes/>
            </div>
            <div className="col-span-2 mt-2 bg-[#fff] px-2 pt-2" style={{ maxWidth: "100%"}}>
            {children}
            </div>

          </div>
          </section>
    )
  }
  