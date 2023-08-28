import Image from "next/image"
import styles from "../client/blogStyle.module.css"

export default function BlogCompo(){
    return (
        <>
        <h2 className="text-center font-semibold text-[#333]">Blog</h2>
        <section className={styles.Blogau}>
            <div className={styles.boxCompo}>
                <div className={styles.imagesBlogBack}>
                <div className={styles.textoBlog}>
                        <h3 className="text-base leading-5 sm:text-xl">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h3>
                    </div>
                                    </div>
            </div>
            <div className={styles.boxCompo}>
                <div className={styles.imagesBlogBack2}>
                    <div className={styles.textoBlog}>
                        <h3 className="text-base leading-5 sm:text-xl">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h3>
                    </div>
                </div>

            </div>
            <div className={styles.boxCompo}>
                <div className={styles.imagesBlogBack3}>

                <div className={styles.textoBlog}>
                        <h3 className="text-base leading-5 sm:text-xl">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h3>
                    </div>           
                         </div>

            </div>

        </section>
        </>
    )

}