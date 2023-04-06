export const colorChange = (state = '', action) => {
    switch (action.type) {
        default:
            return state;
        case 'RED':
            return state = '#e24545';
        case 'ORANGE':
            return state = '#e2972a';
        case 'YELLOW':
            return state = '#dfdf43';
        case 'GREEN':
            return state = '#8ee27f';
        case 'TEAL':
            return state = '#56d1ac';
        case 'BLUE':
            return state = '#5198da';
        case 'BLURPLE':
            return state = '#8290e6';
        case 'PURPLE':
            return state = '#b374e7';
        case 'MAGENTA':
            return state = '#c764e6';
        case 'PINK':
            return state = '#ec6dda';
    }
}