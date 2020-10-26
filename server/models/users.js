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

async function rand() {
    var someVal = 0;
    const p = new Promise((resolve, reject)=>{
        setTimeout(() => {
            for (let index= 0; index < 999 * 999; index++){
                someVal = index * Math.random();
            }
            if(someVal < 999*999 *.5){
                reject({status: 501, message: "This is a fake error" })
            }
            resolve(someVal);
        }, 1);
    }
    )
    return p;
}


module.exports = { rand, getAll, add, search: async q => data.filter(x=> x.name == q) }
