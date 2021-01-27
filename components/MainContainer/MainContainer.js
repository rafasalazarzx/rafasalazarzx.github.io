import styled from 'styled-components';
import { breakpoints } from '../../styles';

const MainContainer = styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    padding: 20px 10px 30px;
    width: 100vw;

    ${breakpoints.phone} {
        padding-left: 20px;
        padding-right: 20px;
    }

    ${breakpoints.tablet} {
        padding: 30px;
    }

    ${breakpoints.laptop} {
        margin: 0 auto;
        max-width: 1440px;
        padding: 40px;
    }
`;

export default MainContainer;
