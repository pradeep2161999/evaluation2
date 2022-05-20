var a = [1,2,3,5,6],
count = 6,
missing = [];
for (var i =1; i<=count; i++){
    if (a.indexOf(i) == -1){
        missing.push(i);
    }
}
console.log(missing);