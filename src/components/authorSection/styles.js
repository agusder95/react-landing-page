import styled from 'styled-components';
import sizes from '../../styles/sizes';
import Section from '../section';
import Image from '../imagen';

export const AuthorWrapper = styled(Section)`
`;

export const AuthorContainer = styled.div`
    @media (min-width: 320px){
        display: flex;
        justify-content: center;
        align-items: center;
        padding: ${sizes.mainMobilePadding};
        text-align: center;
        flex-direction: column;
    }
    @media (min-width: 1200px){
        padding: ${sizes.mainPadding}
    }
`;

export const AuthorH2 = styled.h2`
    font-size: 2rem;
`;

export const AuthorImageContent = styled.div`
    width: 10rem;
    border-radius: 50%;
    margin: 3rem 0;
`;

export const AuthorImage = styled(Image)`
    
`

export const AuthorP = styled.p`
    
`;