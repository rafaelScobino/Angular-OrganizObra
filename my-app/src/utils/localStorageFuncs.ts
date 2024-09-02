//Functions to handle localStorage
export function lsObjSet(key:string,item:object){
  localStorage.setItem(key,JSON.stringify(item))
}

export function lsObjGetOne(key:string){
    let item = localStorage.getItem(key)
    if(typeof item === 'string'){
      return JSON.parse(item)}
}

export function lsObjGetAll(){
  let obrasArr = [];
  for(let i = 0; i <= localStorage.length-1; i++){
    obrasArr.push(lsObjGetOne(`${localStorage.key(i)}`))
  }
  return obrasArr
}

export function lsKeyGetAll(){
  let keysArr = [];
  for(let i = 0; i<= localStorage.length-1; i++){
    keysArr.push(localStorage.key(i))
  }
  return keysArr;
}
