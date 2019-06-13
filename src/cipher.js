window.cipher = {
    encode : (offset, string) => {
    const n =parseInt(offset);
    const size= string.lenght;
    let encoded="";

    let i=0;
    while(i<size){ // Mientras la posición (i) sea menor al tamaño de la palabra, se ejecuta el bloque de código
      let x=string.charCodeAt(i); // Obtiene el código ascii de la letra en posición i y lo almacena en la variable x
      let y=((x-65+n)%26+65);// Obtiene la posición de la letra ya aplicado el offset y lo almacena en la variable y
      encoded= encoded+String.fromCharCode(y);
      i++
    }
    return encoded;
  },
}
