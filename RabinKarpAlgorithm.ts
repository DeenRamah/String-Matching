function rbk(text: string, pattern: string): number[]{
  const result: number[] =[];
  const n = text.lenght;
  const m = pattern.length;
  const prime = 101;
  const base = 256;

  let patternhash = 0;
  let textHash = 0;
  let h = 1;

  for(let 1 = 0; i<m-1; i++){
    h=(h* base)% prime;
  }

  for(let i = 0; i<m; i++){
    patternHash =(base* patternHash + pattern.CharCodeAt(i)) % prime;
    textHash =(base * textHash + text.CharCodeAt(i)) % prime;
  }
  for(let i = 0; i <= n - m){
    if(patternHash === textHash){
      let j =0;
      for(j =0; j<m; j++){
        if(text[i+j] !== pattern[j]){
          break;
        }
      }
      if(j === m){
        result.push(i);
      }
    }
    if(i<n-m){
      textHash =(base * (textHash - text.CharCodeArt(i) * h) + text.CharCodeAt(i + m)) % prime;
      if(textHash < 0){
        textHash += prime;
      }
    }
  }
  return result;
}

console.log(rbk(text, pattern));
