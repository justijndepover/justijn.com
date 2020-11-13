module.exports = {
    purge: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
    theme: {
        extend: {}
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
        borderColor: ['responsive', 'hover', 'focus', 'dark'],
        textColor: ['responsive', 'hover', 'focus', 'dark']
    },
    plugins: [
        function({ addVariant, e }) {
            addVariant('dark', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.darkmode .${e(`dark${separator}${className}`)}`
                })
            })
        }
    ],
};
