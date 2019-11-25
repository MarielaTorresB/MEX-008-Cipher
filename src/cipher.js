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
        } else if (32 <= x && x <= 64) {
          let y=((x-32+despl)%33+32);
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
      } else if (32 <= x && x <= 64) {
        let y=((x+33-despl-32)%33+32);
        textodescifrado = textodescifrado + String.fromCharCode(y);
        i++;
      }
}
    return textodescifrado;
},

};
