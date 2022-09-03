import styled from 'styled-components';
import colors from '../../styles/colors'
import sizes from '../../styles/sizes'

export const PhoneSectionWrapper = styled.div`
    @media (min-width: 320px){
        display: flex;
        flex-direction: ${props => props.reverse ? `column-reverse` : `column`} ;
        justify-content: center;
        align-items: center;
        padding: ${sizes.mainMobilePadding};
        
    }
    @media (min-width: 1200px){
        flex-direction: ${props => props.reverse ? `row-reverse` : `row`};
        justify-content: space-between;
        padding: ${sizes.mainPadding};
    }
`;

export const PhoneSectionDiv = styled.div`
    @media (min-width: 1200px){
        width: 50%;
    }
`;

export const PSImageContent = styled.div`
    @media (min-width: 320px){
        width: 300px;
    }
`;

export const PhoneSectionH2 = styled.h2`
    @media (min-width: 320px){
        color: ${colors.mainGreen};
        font-size: 2rem;
    }
`;

export const PhoneSectionH3 = styled.h3`
    @media (min-width: 320px){
        color: ${colors.lightGray};
        font-size: 1.5rem;
    }
`;

export const PhoneSectionP = styled.p`
    @media (min-width: 320px){
        font-weight: 300;
        margin-top: ${sizes.secondaryMargin};
        margin-bottom: ${sizes.secondaryMargin};
    }
`;

export const PhoneSectionHr = styled.hr`
    @media (min-width: 320px){
        width: 100px;
        color: ${colors.darkGray};
        margin: ${sizes.mainMargin} 0;
    }
`;