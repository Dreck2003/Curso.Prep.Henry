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

  let matriz=[];

  for(let clav in objeto){

    matriz.push([clav,objeto[clav]]);

  }

  return matriz;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let object={};

  for(let letter of string){

  
    if(object[letter]){
      object[letter]++;

    }else{
      object[letter]=1;
    }


  }

return object;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let minus="";
  let mayus="";  

  for(let letra of s){
    if(letra.toUpperCase()== letra){
      mayus+=letra;
    }else{
      minus+=letra;
    }

  }

  return mayus+=minus;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

    let word="";
  let frase="";
  str+=" ";

  for(let letra of str){

    if(letra==" "){

      for(let i=word.length-1;i>=0;i--){

        frase+=word[i];

      }
      word="";
      frase+=" ";

    }else{
      word+=letra;
    }  

  }
  return frase.substring(0,frase.length-1);


} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí


  let numeroArray=[];
  let contador=0;

  while(numero!=0){

    numeroArray.push(numero%10);
    numero/=10;
    numero=Math.floor(numero);

    contador++;
    if(contador==100){
      break;
    }
  }


  let mitad=numeroArray.length/2;
  mitad=Math.floor(mitad);
  let atras=numeroArray.length-1;

  for(let i=0;i<=mitad-1;i++){
    if(numeroArray[i]!=numeroArray[atras]){
      return "No es capicua";
    }

    atras--;



  }
  return "Es capicua";

}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let word="";

  for(let letter of cadena){
    if(letter.toLowerCase()!="a" && letter.toLowerCase()!="b" && letter.toLowerCase()!="c"){

      word+=letter;

    }


  }
  return word;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let temp=0;

  for(let i=0;i<=arr.length-1;i++){

    for(let j=i+1;j<=arr.length-1;j++){
 
      if(arr[i].length>arr[j].length){
        temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;

      }
    }
  }

  return arr;
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let unionesarray=[];

  for(let index of arreglo1){

    for(let indice of arreglo2){
      if(index==indice){
        unionesarray.push(indice);
      }
    }
    
  }
  


return unionesarray;

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

