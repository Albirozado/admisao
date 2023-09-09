
import Image from "next/image"
import JovemEstuda from "../../../public/blog/estudante-afrocut.jpg"
import styles from "../../../client/blogStyle.module.css"
import BlogAdminOthers from "../../../components/BlogAdminOthers"
export default function BlogDetalhes() {

  return (
    <article>
      <div>
          <Image
            src={JovemEstuda}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "1rem"
          }}          /> 
        </div>
      <div>
      <h1 className="text-2xl uppercase font-semibold pt-4 pb-2">Como estudar para o exame de admisao</h1>
      
      <hr className="m-0"/>
          <BlogAdminOthers admin = "BinoDasrosas"/>
      <p className={`text-[#797979] text-xl pt-4 ${styles.RobotoBlog}`} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quaerat quidem quasi, quim quod, quod, quaerat quaerat quaerat
        quaerat quaerat quaerat quaerat erat at quaerat quaerat quaerat</p>
        <p className={`text-[#797979] text-xl  ${styles.RobotoBlog}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quaerat ququibusdam quod, quod, quaerat quaerat quaerat
        quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat</p>
        <p className={`text-[#797979] text-xl  italic bg-[#dcdcdc] py-4 pl-2 ${styles.RobotoBlog}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quaerat quidem quasi, quibusdam quod, quod, quaeuaerat quaerat
        quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat
        quaerat quidem quasi, quibusdam quod, quod, quaeuaerat quaerat
        quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat</p>
        <p className={`text-[#797979] text-xl ${styles.RobotoBlog}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quaerat quidem quasi, quibusdam quod, quod, quaerat quaerat quaerat
        quaerat quaererat quaerat quaerat quaerat quaerat quaerat</p>
        <p className={`text-[#797979] text-xl ${styles.RobotoBlog}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quaerat quidem quasi, quibusdam quod, quod, quaerat quaerat quaerat
        quaerat quaerat quaerat quaerat qrat quaerat quaerat quaerat</p>

      </div>
    </article>
  
    
      
  
  );
}

