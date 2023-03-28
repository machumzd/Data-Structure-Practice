const hello=[
    {
        name:"hello",age:20
    },
    {
        name:"athun",age:25
    },
    {
        name:"yatheesh",age:28
    }
]
const hello2=hello.filter((value)=>{
    return value.age > 20
})
console.log(hello)
console.log(hello2)
