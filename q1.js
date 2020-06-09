let inputArray=[
    {'id':1, 'type': 'external'}, 
    {'id':2},
     {'id':3, type: 'internal'}];

let result=inputArray.map((item)=>{
    item.type= item["type"]
    return item;
}).filter((x)=>{
    return x.type === 'external'
})

console.log(result);