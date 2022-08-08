import styled from 'styled-components';
import Colors from '../../styles/colors';
import Sizes from '../../styles/sizes';

export const ButtonWrapper = styled.div`
    background: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    border-radius: 3rem;
    margin-bottom: ${Sizes.mainMargin};
    border: 2px solid ${Colors.lightGray};
`;