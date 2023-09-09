import RecentesBlog from "../../../components/BlogRecebtes"
export default function DetalhesLay({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            {children}
          </div>
          <div>
            <RecentesBlog/>
          </div>

        
          </section>
    )
  }