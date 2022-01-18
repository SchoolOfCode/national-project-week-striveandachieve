import query from "../index.js";
import { sampleData } from "../../app.js";

async function populateMoodTable(){
    for (let i=0; i<sampleData.length; i++){
       const userid = sampleData[i].userid; 
       const name = sampleData[i].name;
       const week = sampleData[i].week;
       const day = sampleData[i].day;
       const learned = sampleData[i].learned;
       const revise = sampleData[i].revise;
       const mood = sampleData[i].mood;
       const feeling = sampleData[i].feeling;
       const res = await query(`INSERT INTO dailymood (userid, name, week, day, learned, revise, mood, feeling) VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,[userid, name, week, day, learned, revise, mood, feeling]);
        };
        };

populateMoodTable();