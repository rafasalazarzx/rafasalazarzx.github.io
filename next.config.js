const { NEXT_PUBLIC_BASE_PATH = '' } = process.env;

module.exports = {
    basePath: NEXT_PUBLIC_BASE_PATH,
    assetPrefix: NEXT_PUBLIC_BASE_PATH,
};
