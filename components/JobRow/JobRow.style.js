import styled from 'styled-components';
import { breakpoints } from '../../styles';

const StyledJobRow = {
    Container: styled.section`
        display: block;
        height: auto;
        width: 100%;
        border-top: ${({ first }) => (first ? 'none' : '1px solid #ccc')};
        padding-top: 1rem;
    `,
    Header: styled.header`
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
        float: left;
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
        background-color: #666;
        border-radius: 10px;
        color: white;
        float: right;
        font-weight: normal;
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
