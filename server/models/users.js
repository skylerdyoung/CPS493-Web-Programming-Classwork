const data = [{name: 'John', age: 43}, { name: 'Smith', age: 78}]

async function getAll(){
    //throw { status: 501, message: "This is a fake error"}
    //await Promise.resolve()
    console.log("Called Get All")
    return data;
}

async function add(name,age){
    data.push({name, age});
}


module.exports = { getAll, add, search: q => data.filter(x=> x.name == q) }