// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = [];
  for(let clave in objeto){
    array.push([clave, objeto[clave]]);
  }
  //console.log(array);
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objeto = {}
  let contador = 0;
  for(let c in string){
    for(let i in string){
      if(string[c] === string[i]){
        contador++;
      }
    }
    Object.assign(objeto, {[string[c]]:contador});
    contador = 0; 
  }
  //console.log(objeto);
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let sMayus = "";
  let sMinus = "";
  let nuevaString = "";

  for(let c in s){
    if(s.charAt(c) === s.charAt(c).toUpperCase()){
      sMayus += s.charAt(c);
    }else{
      sMinus += s.charAt(c);
    }
  }
  nuevaString = sMayus + sMinus;
  return nuevaString;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let strArray = str.split(" ");
  let strInvertida = "";
  let palabra = "";

  for(let pal in strArray){
    for(let l in strArray[pal]){
      palabra = strArray[pal].charAt(l) + palabra;
    }
    if(pal == strArray.length - 1){
      strInvertida += palabra;
    }else{
      strInvertida += palabra + " ";
    }
    palabra = "";
  }
  return strInvertida;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let reversa = "";
  numero += "";
  for(let i = numero.length - 1; i >= 0; i--){
    reversa += numero.charAt(i);
  }
  if(reversa == numero){
    return "Es capicua";
  }else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nuevaCadena = "";
  for(let c in cadena){
    if(cadena.charAt(c) != "a" && cadena.charAt(c) != "b" & cadena.charAt(c) !== "c"){
      nuevaCadena += cadena.charAt(c);
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let cambio = true;
  let aux = "";
  while(cambio){
    cambio = false;
    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i].length > arr[i+1].length){
        aux = arr[i + 1];
        arr[i+1] = arr[i];
        arr[i] = aux;
        cambio = true;
      }
    }
  }
  console.log(arr);
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let nuevo = [];
  for(let n in arreglo1){
    for(let i in arreglo2){
      if(arreglo1[n] === arreglo2[i]){
        nuevo.push(arreglo2[i]);
      }
    }
  }
  return nuevo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

