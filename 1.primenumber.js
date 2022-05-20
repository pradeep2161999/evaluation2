
function prime(){
    let num = 200;
    for(let i=2; i<=num ; i++){
    let a =0;
    for(let j=2; j<i; j++){
      if(i%j==0){
          a = 1;
          break;
      }  
  }
  if(i> 1 && a == 0){
      console.log(i);
  }     
}
}prime()