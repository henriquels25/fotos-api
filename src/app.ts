import express from 'express'
import {Request, Response} from "express";
import initDB from './initDB';
initDB();

import { Usuario } from './entities/Usuario';
import { Foto } from './entities/Foto';
import { Endereco } from './entities/Endereco';

import {getRepository} from "typeorm";

// create and setup express app
const app = express();
app.use(express.json());

app.get("/usuarios", async function(req: Request, res: Response) {
    const usuariosRepo = getRepository(Usuario);
    const usuarios = await usuariosRepo.find();
    return res.send(usuarios);
});

app.post("/usuarios", async function(req: Request, res: Response) {
    // if (req.body.endereco != undefined){
    //     const enderecoRepo = getRepository(Endereco);
    //     await enderecoRepo.save(req.body.endereco);
    // }
    const usuariosRepo = getRepository(Usuario);
    await usuariosRepo.save(req.body);
    return res.status(201).send();
});

app.post("/fotos", async function(req: Request, res: Response) {
    const fotosRepo = getRepository(Foto);
    try {
        await fotosRepo.save(req.body);
    } catch (e){
        console.log(e);
        return res.status(500).send(e);
    };
    return res.status(201).send();
});

app.get("/fotos", async function(req: Request, res: Response) {
    const fotosRepo = getRepository(Foto);
    const fotos = await fotosRepo.find();
    return res.send(fotos);
});

// start express server
app.listen(8080);
console.log('Application running on port 8080')