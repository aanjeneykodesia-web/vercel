function distance(a,b){

const R = 6371

const dLat = (b.lat-a.lat)*Math.PI/180
const dLon = (b.lng-a.lng)*Math.PI/180

const lat1 = a.lat*Math.PI/180
const lat2 = b.lat*Math.PI/180

const x =
Math.sin(dLat/2)*Math.sin(dLat/2)+
Math.sin(dLon/2)*Math.sin(dLon/2)*
Math.cos(lat1)*Math.cos(lat2)

const c = 2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x))

return R*c

}

export function groupManufacturers(data){

const groups=[]
const maxDistance=40

data.forEach(m=>{

let placed=false

for(const g of groups){

let sameCategory = g.some(x=>x.category===m.category)

if(!sameCategory && distance(m,g[0])<maxDistance){

g.push(m)
placed=true
break

}

}

if(!placed) groups.push([m])

})

return groups

}
