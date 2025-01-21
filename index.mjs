import express from "express";
import { products } from "./productData.mjs";
const app = express();
const port =process.env.PORT || 3000;
import cors from 'cors'


app.use(cors({origin:"https://javednihari.com/"}))


app.get("/", (req, response) => {
  response.send(`Hello World`);
});

app.get("/product", (request, response) => {
  console.log("request",request);
  

  // response.send({name:'Lemon',prize:150,Quantity:'1kg'});
  response.send(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

