export const toolChange = (state = 'PENCIL', action) => {
    switch (action.type) {
        default:
            return state;
        case 'PENCIL':
            return state = 'PENCIL';
        case 'ERASER':
            return state = 'ERASER';
        case 'BUCKET':
            return state = 'BUCKET'
    }
}