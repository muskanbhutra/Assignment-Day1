let emprecords = [
    {ename:"Parag",id:100,bsal:10000},
    {ename:"Prachi",id:101,bsal:13000},
    {ename:"Manas",id:200,bsal:9000},
    {ename:"Daesha",id:115,bsal:8000},
    {ename:"Anagha",id:104,bsal:20000}
]

/* Map */
var enames = emprecords.map(e=>e.ename.toLowerCase())
console.log(enames);
 
/* Filter */
var enames = emprecords.filter(e=>e.bsal>9000 && e.id>100)
console.log(enames);
 
/* Reduce */
let totalsal = emprecords.reduce(((acc,emp)=>acc+emp.bsal),0)
console.log("All employee salary",totalsal)

let totalsalmorethan9000 = emprecords.filter(e=>e.bsal>9000).reduce(((acc,emp)=>acc+emp.bsal),0)
console.log(totalsalmorethan9000)

let enamesmorethan8000 = emprecords.filter(e=>e.bsal>8000).map(emp=>emp.ename.toUpperCase())
console.log(enamesmorethan8000)

let totalbsalmorethan9000 = emprecords.filter(e=>e.bsal>9000).reduce(((acc,emp)=>acc+emp.bsal+0.15*emp.bsal),0)
console.log(totalbsalmorethan9000)