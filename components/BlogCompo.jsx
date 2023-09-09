import styles from "../client/blogStyle.module.css"
import Image from "next/image"
import BlogAminOthers from "../components/BlogAdminOthers"

export default function BlogCompo(props){
    return (
        <>
        <h2 className="text-center text-[#160E04] font-bold sm:base text-3xl">{props.title}</h2>
        <section className="grid sm:grid-cols-3 grid-cols-1  gap-2 mx-3">
            <div className={styles.boxCompo}>
                <div className={styles.imagesBlog}>
                    <Image
                    src={props.image}
                    width={400}
                    height={100}
                    />
                    
                </div>
                <BlogAminOthers/>
                <hr className="my-1"/>
                <h3 className=" leading-5 text-xl">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h3>
            </div>
            <div className={styles.boxCompo}>
                <div className={styles.imagesBlog}>
                <Image
                    src={props.image2}
                    width={400}
                    height={100}
                    />

                </div>
                <BlogAminOthers/>
                <hr className="my-1"/>
                <h3 className="text-base leading-5 sm:text-xl">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h3>
            </div>
            <div className={styles.boxCompo}>
                <div className={styles.imagesBlog}>
                    <Image
                    src={props.image3}
                    width={400}
                    height={100}
                    />
                         
                </div>
                <BlogAminOthers/>
                <hr className="my-1"/>

                <h3 className="text-base leading-5 sm:text-xl">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h3>

            </div>

        </section>
        
        </>
    )

}