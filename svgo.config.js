export default {
    plugins: [
        {
            name: 'preset-default',
        },
        "removeDimensions",
        {
            name: "convertPathData",
            params: {
                floatPrecision: 2
            }
        }
    ]
};