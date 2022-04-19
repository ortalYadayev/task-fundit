import express from 'express';
import {tempData, writeData} from "../utils/temp-data";
import * as fs from "fs";

const matchRouter = express.Router();
const FILE_PATH = '../../data.json';

matchRouter.get('/api/match', (request, response) => {
    const PAGE_SIZE = 5;

    const page = request.query.page || 0;

    const approvedCount = tempData.filter((item) => item.approvedAt).length;
    const declinedCount = tempData.filter((item) => item.declinedAt).length;

    const relevantData = tempData.filter(item => !item.approvedAt && !item.declinedAt)

    const paginatedData = relevantData.slice(
        Number(page) * PAGE_SIZE,
        (Number(page) + 1) * PAGE_SIZE
    );

    response.send({ data: paginatedData.length ? paginatedData : null, approvedCount, declinedCount, length: relevantData.length });
});

matchRouter.post('/api/approves', (request, response) => {
    const id = request.body.params.id;

    tempData.forEach((approvedCompany) => {
        if(approvedCompany.id === id) {
            approvedCompany.approvedAt = new Date();
            approvedCompany.declinedAt = null;
        }
    });

    writeData(JSON.stringify(tempData));

    response.send();
});

matchRouter.post('/api/declines', (request, response) => {
    const id = request.body.params.id;

    tempData.forEach((declinedCompany) => {
        if(declinedCompany.id === id) {
            declinedCompany.approvedAt = null;
            declinedCompany.declinedAt = new Date();
        }
    });

    writeData(JSON.stringify(tempData));

    response.send();
});

export default matchRouter;