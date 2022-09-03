
import { HeaderWrapper } from "./styles";
import PhoneSection from "../phoneSelection";

import phoneFront from '../../assets/images/iphone-front.png'

function Header({bg}) {
    return ( 
        <HeaderWrapper bg = {bg}>
            <PhoneSection 
                h2a = "Our App Is Ready For You!"
                h2b = "Take A Look & Enjoy."
                h3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                p = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                txt = "Learn More"
                func = {() => window.alert('hola')}
                src = {phoneFront}
            />
        </HeaderWrapper>
    );
}

export default Header;