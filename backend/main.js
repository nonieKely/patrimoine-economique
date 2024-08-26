import express from "express";
import { readFile } from "../data/index.js";

const app = express()

app.get("/possession",(async(request, response)=>{
    response.send(await readFile("../UI/public/data.json"))
}))


app.get("/patrimoine/:valeur", (async(request, response)=>{
    const valeur = request.params.valeur
    const data = await readFile("../UI/public/data.json")
    const possessions =  data.data[1].data.possessions

    const filterPossession =  ()=>{
   return possessions.filter((valeur) => possessions.valeur <= valeur)
   } 
   response.send(filterPossession())
}))


app.listen(3000, () =>{
    console.log("je teste")
})

app.post("/possesion", (async(request, reponse)=>{
    const {libelle , valeur , dateDebut , taux } = request.body
    request.send(body)

    if (!libelle || !valeur || !dateDebut || !taux) {
        return reponse.status(400).json({ error: 'données incomplètes' });
      }
}))