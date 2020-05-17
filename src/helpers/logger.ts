export function logger (error: any) {
    if(error) {
        return console.error('Error altering file:', error);
    }
}