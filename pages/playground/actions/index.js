export const colorAction = (color) => {
    switch (color) {
        default:
            return {
                type: color
            }
        case '#e24545':
            return {
                type: 'RED'
            }
        case '#e2972a':
            return {
                type: 'ORANGE'
            }
        case '#dfdf43':
            return {
                type: 'YELLOW'
            }
        case '#8ee27f':
            return {
                type: 'GREEN'
            }
        case '#56d1ac':
            return {
                type: 'TEAL'
            }
        case '#5198da':
            return {
                type: 'BLUE'
            }
        case '#8290e6':
            return {
                type: 'BLURPLE'
            }
        case '#b374e7':
            return {
                type: 'PURPLE'
            }
        case '#c764e6':
            return {
                type: 'MAGENTA'
            }
        case '#ec6dda':
            return {
                type: 'PINK'
            }
    }
}

export const toolAction = (tool) => {
    switch (tool) {
        default:
            return {
                type: tool
            }
        case 'PENCIL':
            return {
                type: 'PENCIL'
            }
        case 'ERASER':
            return {
                type: 'ERASER'
            }
        case 'BUCKET':
            return {
                type: 'BUCKET'
            }
    }
}

export const sizeAction = (size) => {
    switch (size) {
        default:
            return {
                type: size
            }
        case 'XS':
            return {
                type: 'XS'
            }
        case 'SM':
            return {
                type: 'SM'
            }
        case 'BASE':
            return {
                type: 'BASE'
            }
        case 'MD':
            return {
                type: 'MD'
            }
        case 'LG':
            return {
                type: 'LG'
            }
        case 'XL':
            return {
                type: 'XL'
            }
    }
}

