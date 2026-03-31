export function groupManufacturers(data){

const groups = {}

data.forEach((m)=>{

if(!groups[m.category]){

groups[m.category]=[]

}

groups[m.category].push(m)

})

return groups

}
