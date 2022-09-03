import PhoneSection from "../phoneSelection";
import { SecunSecitonWrapper } from "./styles";
import TwoPhone from '../../assets/images/two-phone.png'

function SecunSection( {bg, reverse} ) {
    return ( 
        <SecunSecitonWrapper bg ={bg}>
            <PhoneSection
                h2a = "Our App Is Ready For You! Take A Look & Enjoy."
                h3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                p = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                txt = "Learn More"
                fnc={() => window.alert("Puto el que lee")}
                src = {TwoPhone}
                reverse
            />
        </SecunSecitonWrapper>
     );
}

export default SecunSection;