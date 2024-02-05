// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/", (req, res) => res.render ('index.ejs'));
router.post("/submit", (req, res) => {
  const randomAdj = ( adj.length ) ? adj [ Math.floor( Math.random() * adj.length )] : "";
  const randomNoun = ( noun.length ) ? noun [ Math.floor( Math.random() * noun.length )] : "";
  res.render ('index.ejs', { bandName: randomAdj + " " + randomNoun });
});

api.use("/api/", router);

export const handler = serverless(api);


const adj = [
  "abandoned",
  "able",
  "absolute",
  "adorable",
  "adventurous",
  "academic",
  "acceptable",
  "acclaimed",
  "accomplished",
  "accurate",
  "aching",
  "acidic",
  "acrobatic",
  "active",
  "actual"
];

const noun = [
  "aardvark",
  "abacus",
  "abbey",
  "abdomen",
  "abolishment",
  "abroad",
  "abyssinian",
  "accelerant",
  "accelerator",
  "accompanist",
  "accordion",
  "account",
  "accountant",
  "achieve",
  "achiever"
];
