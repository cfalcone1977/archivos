para poder utilizar de forma asincrona una funcion, el menu principal o la parte principal que llama a las funciones que son asincronas,
fue necesario que el programa principal exista en una funcion asincrona (linea 40 a linea 60) y que cuando llama a la funcion que lee 
el contendio del archivo se establezca una pausa. Esto lo hacemos con la palabra reservada "await" linea 55.
