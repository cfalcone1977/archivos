//Tarea clase
// Crear un archivo tareas.txt
// A traves de un menu el usuario podra:
// 1 - Crear una terminal
// 2 - Listar todas las tareas
import {promises} from 'node:fs'
import fs from 'node:fs/promises'
import {create} from 'ts-node'
import * as rls from "readline-sync"
let opcMenu : number = 0;
let tarea:string ="";
let pausa:number=0;
async function createFile(fileName: string, content:string): Promise<void>{
    try {
        await fs.writeFile (fileName, content, "utf-8");
        console.log ("File Created Succesfully");
    } catch (error){
        console.log ("Procces Failed with error: ", error);
    }
}
async function updateFile(fileName:string, content:string): Promise<void> {
    const formatedContent = `\n${content}`; // ***
    try {
        await fs.appendFile (fileName, /* ** "\n"+ */ formatedContent, "utf-8");
        console.log ("File Updated Successfully");
    } catch (error){
        console.log ("Proccess Failed with error: ", error);
    }
}
async function readFile (fileName:string): Promise<void> {
    try{
        const content = await fs.readFile (fileName, 'utf-8');
        console.log(content)
        rls.question();
    } catch (error){
        console.log ("Proccess Failed with error: ", error);
    }
}

async function main(){
while (opcMenu!=3){
    console.clear();
    console.log("--------------------------------------------");
    console.log("----------------MENU------------------------");
    console.log("--------------------------------------------");
    console.log(" 1 -- Crear Tarea");
    console.log(" 2 -- Ver Tareas ");
    console.log(" 3 -- SALIR");
    console.log("--------------------------------------------");
opcMenu=rls.questionInt("Ingrese OPCION: ");
if (opcMenu==1) {
                 tarea=rls.question("Ingrese tarea a guardar: ");
                 updateFile("tareas.txt",tarea);
                } else if (opcMenu==2) {
                                        await readFile("tareas.txt");
                                       } else if (opcMenu==3){
                                                                console.log("\x1b[31m SALIENDO....");
                                                             } else console.warn("OPCION INEXISTENTE!!!");
}
}

main();