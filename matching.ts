function naivsar(text: string, pattern:string): number[]{
  const result: number[]=[];
  const n = text.length;
  const m = pattern.length;

  for(let i =0; i< n - m; i++){
    let j =0;
    while(j<m && text[i + j] ===pattern[]){
      j+++;
    }
    if(j === m){
      rsult.push(i);
    }
  }
  return result;
}

const text = "arhjecdn";
const pattern = "arhj";
console.log(naivsar(text,pattern))//output:[]
