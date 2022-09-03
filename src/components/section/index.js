import { SectionWrapper } from "./styles";
import {bool, node} from 'prop-types'

function Section ({bg, children}) {
    return ( 
        <SectionWrapper bkgr = {bg}>
            {children}
        </SectionWrapper>
    );
}

Section.propTypes ={
    bg : bool,
    children : node
}

Section.defaultProps ={
    bg: false,
}

export default Section;
