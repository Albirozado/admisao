import styles from "../client/blogStyle.module.css"
import Image from "next/image"
import mulherAfricana from "../public/blog/estudante-afro.jpg"
import criancaEstudando from "../public/blog/crianca-estuda.jpg"
import jovemNegro from "../public/blog/jovem-negro.jpg"
import retratoJovem from "../public/blog/retrato-de-uma-jovem-mulher-africana.jpg"
import meninaSoridente from "../public/blog/menina-sorridente-na-leitura-do-sofa.jpg"
export default function HomeBlog(){
    return (
        <>
        <section className={styles.blogPage}>
            <div className={styles.boxGrid}>
                <div>
                    <div className="image">
                        <Image
                        src={mulherAfricana}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                        }}
                        />
                    </div>
                    <h3 className="text-lg leading-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h3>
                </div>
    
            </div>
            <div className={styles.boxGrid}>
                <div className="image">
                    <Image
                    src={criancaEstudando}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                    
                    />
                </div>
                <h3 className="text-lg leading-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h3>
            </div>
            <div className={styles.boxGrid}>
                <div className="image">
                    <Image
                    src={jovemNegro}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}                   
                     />
                </div>
                <h3 className="text-lg leading-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h3>
            </div>
            
            
            

        </section>
        </>
    )

}