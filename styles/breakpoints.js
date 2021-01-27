const deviceWidth = {
    phone: '425px',
    tablet: '768px',
    laptop: '1152px',
    desktop: '1920px',
};

const breakpoints = Object.entries(deviceWidth).reduce(
    (devices, [device, width]) => ({
        ...devices,
        [device]: `@media (min-width: ${width})`,
    }),
    {}
);

export default breakpoints;
