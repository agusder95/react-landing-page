import styled from 'styled-components';
import Colors from '../../styles/colors'

export const SectionWrapper = styled.div`
    width:100%;
    height:100%;
    background-color: ${props => props.bg ? Colors.secondaryColor : Colors.mainColor},
`;