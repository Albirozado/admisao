import styles from "../client/blogStyle.module.css"
import Image from "next/image"
import BlogAminOthers from "../components/BlogAdminOthers"
import MulherNegra from "../public/blog/estudante-afrocut.jpg"
import JovemNegro from "../public/blog/jovem-negro.jpg"
import CrincaEstuda from "..//public/blog/crianca-estuda.jpg"
import Link from "next/link"
export default function BlogCompo(props){
    return (
        <>
        <h2 className="text-center text-[#160E04] font-bold sm:base text-3xl">Seu blog</h2>
        <section className="grid sm:grid-cols-3 grid-cols-1  gap-3 mx-3">
            <Link href="blog/8" style={{textDecoration: "none"}}>
            <div className={styles.boxCompo}>
                <div className={styles.imagesBlog}>
                    <Image
                    src={MulherNegra}
                    width={500}
                    height={100}
                    />
                    
                </div>
                <BlogAminOthers/>
                <hr className="my-1"/>
                <h3 className=" leading-5 text-xl">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h3>
            </div>
            </Link>
            <Link href="blog/8" style={{textDecoration: "none"}}>
            <div className={styles.boxCompo}>
                <div className={styles.imagesBlog}>
                <Image
                    src={JovemNegro}
                    width={500}
                    height={100}
                    />

                </div>
                <BlogAminOthers/>
                <hr className="my-1"/>
                <h3 className="text-base leading-5 sm:text-xl">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h3>
            </div>
            </Link>
            <Link href="blog/8" style={{textDecoration: "none"}}>
            <div className={styles.boxCompo}>
                <div className={styles.imagesBlog}>
                    <Image
                    src={CrincaEstuda}
                    width={500}
                    height={100}
                    />
                         
                </div>
                <BlogAminOthers/>
                <hr className="my-1"/>

                <h3 className="text-base leading-5 sm:text-xl">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h3>

            </div>
            </Link>

        </section>
        
        </>
    )

}