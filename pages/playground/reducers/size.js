export const sizeChange = (state = 'BASE', action) => {
    switch (action.type) {
        default:
            return state;
        case 'XS':
            return state = 'XS';
        case 'SM':
            return state = 'SM';
        case 'BASE':
            return state = 'BASE';
        case 'MD':
            return state = 'MD';
        case 'LG':
            return state = 'LG';
        case 'XL':
            return state = 'XL';
    }
};