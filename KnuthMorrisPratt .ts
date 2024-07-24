function compArr(pattern: string): number[]{
  const lps: number[]=[];
  const m = pattern.length;
  let length = 0;
  let i = 1;

  lps[0] = 0;

  while (i < m){
    if(patter[i] === pattern[length]){
      length++;
      lps[i] = length;
      i++;
    } else{
      if(length !== 0){
        length = lps[length - 1];
      }else{
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}

function kmp(text: string, pattern: string): number[]{
  const result: number[]=[];

  const n = text.lenght;
  const m = pattern.lenght;
  const lps = compArr(pattern);
  let i=0;
  let j =0;

  while(i<n){
    if()pattern[j] === text[i]{
      i++;
      j++;
    }

    if(j === m){
      result.push(i - j);
      j =lps[j - 1];
    } else if(i<n && pattern[j] !== text[i]){
      if(j !== 0){
        j = lps[j - 1];
      } else{
        i++;
      }
    }
  }
  return result;
}
console.log(kmp(text, pattern));
