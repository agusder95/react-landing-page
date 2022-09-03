import styled from 'styled-components';
import sizes from '../../styles/sizes';
import colors from '../../styles/colors';
import Section from '../section';

export const IconSectionWrapper = styled(Section)`
`;

export const ISectContainer = styled.div`
    @media (min-width: 320px){
        padding: ${sizes.mainMobilePadding}
    }

    @media (min-width: 1200px){
        padding: ${sizes.mainPadding};
    }
`;

export const IsecUl = styled.ul`
    @media (min-width: 320px){
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 1200px){
        display: flex;
        flex-direction: row;
        margin-bottom: 3rem;
    }
`;

export const ISecLi = styled.li`
    @media (min-width: 320px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 2rem;
    }
    @media (min-width: 1200px){
        margin-bottom: 0;
        padding: 1rem;
    }
`;

export const ImageCont = styled.div`
    width: 10rem;
`;

export const H2 = styled.h2`
    @media (min-width: 320px){
        text-transform: uppercase;
    }
`;

export const P = styled.p`
    @media (min-width: 320px){
        font-size: 1rem;
        color: ${colors.darkGray};
        font-weight: 300;
    }
`;