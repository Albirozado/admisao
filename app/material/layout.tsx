import NavMaterialOne from "../../components/NavMaterialOne"
export default function ExamesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <section>
           <div>
              <NavMaterialOne/>
          </div>
          <div >  
          {children}
          </div>
          </section>
  )
}
