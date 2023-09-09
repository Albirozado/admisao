import {BiSolidUser} from "react-icons/bi"  
import {AiFillTag} from "react-icons/ai"
import {BsCalendarDateFill} from "react-icons/bs"

export default function BlogAdminOthers(props){
    return(
        <div className="flex justify-end pt-3">
        <span className="flex items-center px-2"><BiSolidUser className="mr-1 text-base"/><span>By: {props.admin}</span></span>
        <span className="flex items-center px-2"><AiFillTag className="text-white mr-1 text-base"/><span>Educaçao</span></span>
        <span className="flex items-center px-2"><BsCalendarDateFill className="mr-1 text-base"/><span>12/08/23</span></span>
      </div>
    )
}