import { 
    PhoneSectionDiv,
    PhoneSectionH2, 
    PhoneSectionH3, 
    PhoneSectionHr, 
    PhoneSectionP, 
    PhoneSectionWrapper, 
    PSImageContent
} from "./styles";
import Button from '../button'
import Image from '../imagen'
import {bool} from 'prop-types'

function PhoneSection({h2a, h2b,h3,p,txt,fnc,src,reverse}) {
    return ( 
        <PhoneSectionWrapper reverse = {reverse}>
            <PhoneSectionDiv>
                <PhoneSectionH2>{h2a}</PhoneSectionH2>
                <PhoneSectionH2>{h2b}</PhoneSectionH2>
                <PhoneSectionHr />
                <PhoneSectionH3>{h3}</PhoneSectionH3>
                <PhoneSectionP>{p}</PhoneSectionP>
                <Button txt = {txt} func = {fnc} />
            </PhoneSectionDiv>
            <PSImageContent>
                <Image src={src} alt = 'src' />
            </PSImageContent>
        </PhoneSectionWrapper>
     );
}
PhoneSection.prototype ={
    reverse : bool,
}

export default PhoneSection;