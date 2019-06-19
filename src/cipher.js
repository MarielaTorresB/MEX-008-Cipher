window.cipher = {
  encode : (offset, string) => {
      const despl =parseInt(offset);
      const size= string.length;
      let textocifrado= "";
      let i=0;
      while(i<size){
        let x=string.charCodeAt(i);
        if(65 <= x && x <= 90){
          let y=((x-65+despl)%26+65);
          textocifrado = textocifrado + String.fromCharCode(y);
          i++;
        } else if (97 <= x && x <= 122) {
          let y=((x-97+despl)%26+97);
          textocifrado = textocifrado + String.fromCharCode(y);
          i++;
        }
      }
      return textocifrado;

},
  decode : (offset, string) => {
    const despl = parseInt(offset);
    const size=string.length;
    let textodescifrado="";
    let i=0;
    let y;
    while(i<size){
      let x=string.charCodeAt(i);
      if(65 <= x && x <= 90){
        let y=((x+65-despl)%26+65);
        textodescifrado = textodescifrado + String.fromCharCode(y);
        i++;
        } else if (97 <= x && x <= 122) {
          let y=((x+26-despl-97)%26+97);
          textodescifrado = textodescifrado + String.fromCharCode(y);
          i++;
        }
}
    return textodescifrado;
},
  //   encode : (offset, string) => {
  //   const n =parseInt(offset);
  //   const size= string.lenght;
  //   let encoded="";
  //
  //   let i=0;
  //   while(i<size){ // Mientras la posición (i) sea menor al tamaño de la palabra, se ejecuta el bloque de código
  //     let x=string.charCodeAt(i); // Obtiene el código ascii de la letra en posición i y lo almacena en la variable x
  //     let y=((x-65+n)%26+65);// Obtiene la posición de la letra ya aplicado el offset y lo almacena en la variable y
  //     encoded= encoded+String.fromCharCode(y);
  //     i++
  //   }
  //   return encoded;
  // },
};
