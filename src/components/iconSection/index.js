import { 
    IconSectionWrapper,
    ISectContainer,
    IsecUl,
    ISecLi,
    H2,
    P,
    ImageCont,

} from "./styles";

import Image from "../imagen";
import { INFO } from "../../constants";

function IconSection({bg}) {
    return ( 
        <IconSectionWrapper bg = {bg}>
            <ISectContainer>
                <IsecUl>
                    {
                        INFO.slice(0,3).map(item => {
                            return(
                                <ISecLi key={item.id}>
                                    <ImageCont>
                                        <Image src={item.image} alt = {item.title}/>
                                    </ImageCont>
                                    <H2> {item.title} </H2>
                                    <P>{item.text}</P>
                                </ISecLi>
                            )
                        })    
                    }
                </IsecUl>
                <IsecUl>
                    {
                        INFO.slice(3,6).map(item => {
                            return(
                                <ISecLi key={item.id}>
                                    <ImageCont>
                                        <Image src={item.image} alt = {item.title}/>
                                    </ImageCont>
                                    <H2> {item.title} </H2>
                                    <P>{item.text}</P>
                                </ISecLi>
                            )
                        })    
                    }
                </IsecUl>
            </ISectContainer>
        </IconSectionWrapper>
    );
}

export default IconSection;