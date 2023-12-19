import express from "express";
const app = express();

app.use(express.static("public"));


// Ao realizarmos esse teste, no console na página, iremos receber o erro, pois não há permissão para acessar. Para realizar esta liberação, vamos até a API que serve os recursos, e podemos instalar a biblioteca cors
app.listen(3001, ()=>{
    console.log("API iniciado, com sucesso - teste CORS");
});