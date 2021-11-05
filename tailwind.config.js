module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm:'576px',
            md:'768px',
            lg:'992px',
            xl:'1200px',
        },
        container: {
            center: true,
            padding: '1rem'
        },
        colors: {
            'primary': '#FD3D57',
            'secundary': '#2B2D42',
            'white' : 'white',
            'light' : '#F3F4F6',
            'gray-300' : '#D1D5DB'
        },
        extend: {},
    },
    variants: {
        extend: {
            display: ['group-hover'],
            visibility: ['group-hover']
        },
    },
    plugins: [],
}