import styled from 'styled-components';
import { breakpoints } from '../../styles';

const StyledJobRow = {
    Container: styled.section`
        border-top: ${({ first }) => (first ? 'none' : '1px solid #ccc')};
        display: block;
        height: auto;
        padding-top: ${({ first }) => (first ? '0' : '1rem')};
        width: 100%;
    `,
    Header: styled.div`
        clear: both;
        display: block;
        width: 100%;

        ${breakpoints.phone} {
            align-items: center;
            display: flex;
            justify-content: space-between;
        }
    `,
    Title: styled.h2`
        color: ${({ theme }) => theme.primary};
        float: left;
        max-width: ${({ hasType }) => (hasType ? '60vw' : 'none')};

        ${breakpoints.tablet} {
            max-width: none;
        }
    `,
    Subtitle: styled.h3`
        span {
            opacity: 0.7;
            display: block;

            ${breakpoints.laptop} {
                display: inline;
                &:before {
                    content: ' @ ';
                }
            }
        }
    `,
    Dates: styled.h4``,
    Type: styled.h5`
        background-color: ${({ theme }) => theme.secondary};
        border-radius: 10px;
        color: white;
        float: right;
        font-size: 0.7rem;
        font-weight: normal;
        margin-top: 2px;
        padding: 3px 8px;

        ${breakpoints.phone} {
            display: inline-block;
            float: none;
        }

        ${breakpoints.laptop} {
            text-align: right;
        }
    `,
};

export default StyledJobRow;
