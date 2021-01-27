const deviceWidth = {
    phone: '375px',
    tablet: '768px',
    laptop: '1280px',
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
