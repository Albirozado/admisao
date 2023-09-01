import styles from "../../client/MaterialStyle.module.css"
export default function BannerMaterial(){
    return(
        <header className={styles.Banner}>
            <h1 className={`className="text-center font-bold sm:base text-3xl"${styles.BannerTittle}`}>Aqui voce encontrara todo material para o apredendizado infantil de alta qualidade</h1>

        </header>
    )

}