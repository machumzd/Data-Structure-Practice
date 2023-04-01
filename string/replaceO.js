const string="Heloooo"
const two=string.split("")
for(i=0;i<two.length;i++){
    if(two[i]=="o"){
        two[i]="m"
    }
}
console.log(two.join(""))


const hello="hellkkkkkk"
const modified=hello.replaceAll("k","o")
// const modified=hello.replaceAll(/k/g,"o")

console.log(modified)
