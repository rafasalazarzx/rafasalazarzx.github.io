import styled from 'styled-components';
import PropTypes from 'prop-types';
import { breakpoints } from '../../styles';

const Grid = styled.div`
    display: grid;
    gap: ${({ phoneGap }) => phoneGap};
    grid-template-columns: ${({ columns, phoneColumns }) =>
        columns || phoneColumns};
    min-height: ${({ minHeight }) => minHeight};
    width: ${({ width }) => width};

    ${breakpoints.tablet} {
        gap: ${({ tabletGap }) => tabletGap};
        grid-template-columns: ${({ columns, tabletColumns }) =>
            columns || tabletColumns};
    }

    ${breakpoints.laptop} {
        gap: ${({ laptopGap }) => laptopGap};
        grid-template-columns: ${({ columns, laptopColumns }) =>
            columns || laptopColumns};
    }

    ${breakpoints.desktop} {
        gap: ${({ desktopGap }) => desktopGap};
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
    phoneGap: PropTypes.string,
    tabletGap: PropTypes.string,
    laptopGap: PropTypes.string,
    desktopGap: PropTypes.string,
    minHeight: PropTypes.string,
    width: PropTypes.string,
};

Grid.defaultProps = {
    phoneColumns: '1fr',
    tabletColumns: '3fr 6fr',
    laptopColumns: '1fr 3fr',
    desktopColumns: '1fr 3fr',
    phoneGap: '1rem',
    tabletGap: '2.5rem',
    laptopGap: '4rem',
    desktopGap: '6rem',
    minHeight: 'auto',
    width: '100%;',
};

export default Grid;
