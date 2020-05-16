export function logger (error: any) {
    if(error) {
        return console.error('Error writing file:', error);
    }

    console.info('File saved successfully!');
}