import styles from "../client/blogStyle.module.css"
import Image from "next/image"
import mulherAfricana from "../public/blog/estudante-afro.jpg"
import criancaEstudando from "../public/blog/crianca-estuda.jpg"
import {HiMiniLink} from "react-icons/hi2"
import BlogAdminOthers from "./BlogAdminOthers"
import jovemNegro from "../public/blog/jovem-negro.jpg"
import BlogCompoHome from "../components/BlogCompoHome"
import Link from "next/link"
import MulherNegra from "../public/blog/estudante-afrocut.jpg"
import JovemNegro from "../public/blog/jovem-negro.jpg"
import CrincaEstuda from "../public/blog/crianca-estuda.jpg"

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
                        placeholder="blur"

                        alt="blogimage"
                       
                        />
                    </div>
                    <h3 className="text-xl leading-5 text-[#282828] font-semibold pt-3 uppercase">Duis aute irure dolor in reprehenderit in voluptate</h3>
                    <hr className="m-0"/>
                    <BlogAdminOthers admin = "DasRosas"/>

                    <p className={`text-[#797979] text-xl pt-3  ${styles.RobotoBlog}`} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    quaerat quidem quasi, quim quod, quod, quaerat quaerat quaerat
                    quaerat quaerat quaerat quaerat erat at quaerat quaerat quaerat <Link href="blog/id" className="text-base text-[#FF931E]">ler mais<HiMiniLink  className="inline-flex"/></Link></p>
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
                   placeholder="blur"

                   alt="blogimage"
                  

                    
                    />
                </div>

                <h3 className="text-xl leading-5 text-[#282828] font-semibold pt-3 uppercase">Duis aute irure dolor in reprehenderit in voluptate</h3>
                <hr className="m-0"/>
                    <BlogAdminOthers admin = "Emilia Dause"/>

            </div>
            <div className={styles.boxGrid}>
                <div className="image">
                    <Image
                    src={jovemNegro}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}  
                   placeholder="blur"

                   alt="blogimage"
                  
                 
                     />
                </div>
                <h3 className="text-xl leading-5 text-[#282828] font-semibold pt-3 uppercase">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h3>
                <hr className="m-0"/>
                    <BlogAdminOthers admin = "Jose Carverinha"/>

            </div>
        </section>
        <BlogCompoHome/> 
        <BlogCompoHome/>

        </>
    )

}