let base = 5;
 let asterisco ='*';
 let imputLine = '';
 let imputPosition = base;

 for (index = 0; index < base; index += 1){
     for (indice =0; indice <= base; indice += 1){
         if ( indice < imputPosition){
             imputLine = imputLine + ' ';
         } else {
             imputLine = imputLine + asterisco;
         }
     }
     console.log(imputLine);
     imputLine = '';
     imputPosition -=1;
 }
