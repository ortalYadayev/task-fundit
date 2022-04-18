export const DECLINE: string = 'decline';
export const POSSIBLE: string = 'possible';
export const OPEN: string = 'open';
export const CLOSE: string = 'close';

export const filterByLabel = (label: string): boolean => {
    let result = false;

    if(label.toLowerCase() === DECLINE) {
        result = true;
    } else if(label.toLowerCase() === POSSIBLE) {
        result = true;
    } else if(label.toLowerCase() === OPEN) {
        result = true;
    } else if(label.toLowerCase() === CLOSE) {
        result = true;
    }
    return result;
}
