import { FaFacebookF } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Contact=()=>{
    document.title='Gadget Heaven-Contact';
    return(
        <div className="bg-purple-200 text-center mt-5">
            <h1 className="text-3xl font-bold pt-20">Fell free to contact with us !!</h1>
            <p>You can contact with us below </p>
            <div className="flex justify-around mx-20 mt-20 pb-20">
            <FaFacebookF className="w-14 h-14" />
            <ImLinkedin className="w-14 h-14"/>
            <FaGithubSquare className="w-14 h-14"/>
            <FaXTwitter className="w-14 h-14"/>
            </div>
        </div>
    )
}
export default Contact;