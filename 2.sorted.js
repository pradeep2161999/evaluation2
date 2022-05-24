var a = [1,3,4,6,7,8,9];
var b = [1,4,6,7,10];
for(var i =0;i<a.length;i++){
    for(var j = 0;j<a.length;j++){
        if(a[i] === b[j] ){
            console.log(a[i]);
        }
}
}