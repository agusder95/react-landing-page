import styled from 'styled-components';
import colors from '../../styles/colors';


export const SectionWrapper = styled.section`
    width:100%;
    height:100%;
    background: ${props => props.bkgr ? colors.secondaryColor : colors.mainColor};
`
