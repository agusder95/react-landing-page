import styled from 'styled-components';
import Section from '../section';
import colors from '../../styles/colors';

export const FooterWrapper = styled(Section)`
`;

export const FooterContent = styled.footer`
    @media (min-width: 320px){
        background: ${colors.mainBlack};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem 0;
    }
`;

export const FooterSpan = styled.span`
    @media (min-width: 320px){
        color: ${colors.mainColor};
        font-weight: 300;
    }
`;

export const FooterStrong = styled.strong`
    color: ${colors.mainGreen}
`;

export const FooterA = styled.a`
    color: ${colors.mainGreen};
    text-decoration: none
`;
