import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import StyledJobRow from './JobRow.style';

const JobRow = ({
    companyName,
    endDate,
    first,
    location,
    startDate,
    title,
    type,
}) => (
    <StyledJobRow.Container first={first}>
        <StyledJobRow.Header>
            <StyledJobRow.Title>{companyName}</StyledJobRow.Title>
            {type && (
                <StyledJobRow.Type>{type.toUpperCase()}</StyledJobRow.Type>
            )}
        </StyledJobRow.Header>
        <StyledJobRow.Header>
            <StyledJobRow.Subtitle>
                {title}
                {location && <span>{location}</span>}
            </StyledJobRow.Subtitle>
            <StyledJobRow.Dates>
                {startDate && `${moment(startDate).format('MMMM YYYY')} - `}
                {endDate ? moment(endDate).format('MMMM YYYY') : 'Present'}
            </StyledJobRow.Dates>
        </StyledJobRow.Header>
    </StyledJobRow.Container>
);

JobRow.propTypes = {
    companyName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    type: PropTypes.oneOf(['partTime', 'fullTime', 'freelance']).isRequired,
    first: PropTypes.bool,
};

JobRow.defaultProps = {
    startDate: '',
    endDate: '',
    first: false,
};

export default JobRow;
