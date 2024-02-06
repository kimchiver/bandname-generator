// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express from "express";
import serverless from "serverless-http";

const app = express();
const router = express.Router();

router.get("/", (req, res) => {

const html = `
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles/main.css">
    <title>Band Generator</title>
  </head>

  <body>
    <main>
      <h1>Welcome to the Band Generator 🤟</h1>
      <form action="/submit" method="POST">
        <input type="submit" value="Generate Name">
      </form>

    <br/>
    <br/>
    </main>

    <footer>
    <p>Copyright © 2024</p>
    </footer>
  </body>
  </html>
          `;
  res.send(html);
});

router.post("/submit", (req, res) => {
  const randomAdj = ( adj.length ) ? adj [ Math.floor( Math.random() * adj.length )] : "";
  const randomNoun = ( noun.length ) ? noun [ Math.floor( Math.random() * noun.length )] : "";

  const html = `
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/styles/main.css">
      <title>Band Generator</title>
    </head>

    <body>
      <main>
        <h1>${randomAdj} ${randomNoun}</h1>
        <form action="/submit" method="POST">
          <input type="submit" value="Generate Name">
        </form>

      <br/>
      <br/>
      </main>

      <footer>
      <p>Copyright © 2024</p>
      </footer>
    </body>
    </html>
    `;
    res.send(html);
});

//app.use("/api/", router);
app.use('/.netlify/functions/server', router);

export const handler = serverless(app);



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
