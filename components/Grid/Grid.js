import styled from 'styled-components';
import PropTypes from 'prop-types';
import { breakpoints } from '../../styles';

const Grid = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: ${({ columns, phoneColumns }) =>
        columns || phoneColumns};
    min-height: ${({ minHeight }) => minHeight};
    width: ${({ width }) => width};

    ${breakpoints.tablet} {
        gap: 20px;
        grid-template-columns: ${({ columns, tabletColumns }) =>
            columns || tabletColumns};
    }

    ${breakpoints.laptop} {
        gap: 24px;
        grid-template-columns: ${({ columns, laptopColumns }) =>
            columns || laptopColumns};
    }

    ${breakpoints.desktop} {
        gap: 32px;
        grid-template-columns: ${({ columns, desktopColumns }) =>
            columns || desktopColumns};
    }
`;

Grid.propTypes = {
    columns: PropTypes.string,
    phoneColumns: PropTypes.string,
    tabletColumns: PropTypes.string,
    laptopColumns: PropTypes.string,
    desktopColumns: PropTypes.string,
    minHeight: PropTypes.string,
    width: PropTypes.string,
};

Grid.defaultProps = {
    phoneColumns: '1fr',
    tabletColumns: '2fr 3fr',
    laptopColumns: '2fr 3fr',
    desktopColumns: '1fr 2fr',
    minHeight: 'none',
    width: '100%;',
};

export default Grid;
