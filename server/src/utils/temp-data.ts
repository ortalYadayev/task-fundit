import * as fs from "fs";

const FILE_PATH = '../../data.json';

export const tempData = require(FILE_PATH);

export const writeData = (payload: string) => {
    fs.writeFile(FILE_PATH, JSON.stringify(payload), (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully for approve");
        }
    });

    return;
}