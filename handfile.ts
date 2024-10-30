//Clase  Persistencia
// CLASE 28/10/24
// Asíncrono se refiere a cualquier proceso que se realiza independientemente o "en paralelo" al flujo principal del programa, sin que este se detenga mientras espera su finalización.
// Las promesas (promises) sirven para crear alternativas virtuales
// Los metodos sincronicos hasta que no termina de grabarse el archivo, va a quedar detenido
// Los metodos Asincronicos, mientras el archivo se graba se puede seguir trabajando sin quedar detenido
// fs: modulo de Node.js, para trabajar con sistema de archivos
// writeFile: Permite escribir en un archivo. Si el archivo no existe, lo crea; si existe, sobrescribirá el contenido.
import { promises } from 'node:fs';
import fs from 'node:fs/promises';
import { create } from 'ts-node';
async function createFile(fileName: string, content:string): Promise<void>{
    try {
        await fs.writeFile (fileName, content, "utf-8"); // await se usa para esperara que la promesa se resuelva
        console.log ("File Created Succesfully");
    } catch (error){
        console.log ("Procces Failed with error: ", error);
    }
}
// createFile ('sample.txt', "Hello world!");
// createFile ("./db/sample.txt", "Hello world!");
// La función append en fs se usa para agregar contenido a un archivo sin sobrescribir el contenido existente.fs.appendFile, permite escribir al final del archivo, agregando el nuevo contenido en lugar de reemplazar el ya existente.
async function updateFile(fileName:string, content:string): Promise<void> {
    const formatedContent = `\n${content}`; // ***
    try {
        await fs.appendFile (fileName, /* ** "\n"+ */ formatedContent, "utf-8"); // append Agrega algo a un archivo que ya existe
                                                            // ** Para que haga un salto de linea sin que lo tenga que poner el usuario se puede poner "\n" + content
                                                            // *** Pero puede ser const formatedContent = '\n${content};
                                                            // formatedContent
        console.log ("File Updated Successfully");
    } catch (error){
        console.log ("Proccess Failed with error: ", error);
    }
}
//updateFile('sample.txt', "Goodbye world!"); // Al cambiar lo que dice lo agrega en una nueva linea de texto
// fs.readFile para leer contenido del archivo (operacion asincrona)
async function readFile (fileName:string): Promise<void> {
    try{
        const content = await fs.readFile (fileName, 'utf-8');
        console.log(content)
    } catch (error){
        console.log ("Proccess Failed with error: ", error);
    }
}

createFile("tareas.txt","");
//readFile ('sample.txt');