export function toRna(nucleotide:string) : string {
  const nucleotidesTranslation: Record<string, string> = {
    "G" : "C",
    "C" : "G",
    "T" : "A",
    "A" : "U",
  };

  let nucleotideTranslated: string = "";
  for(let i=0; i<nucleotide.length; i++){ // ACGTGGTCTTAA
    const nTranslated = nucleotide.charAt(i);

    //input validation
    if ( nTranslated !== 'T' && nTranslated !== 'A' && nTranslated !== 'G' && nTranslated !== 'C') {
      throw new Error("Invalid input DNA.")
    }else{
      nucleotideTranslated = `${nucleotideTranslated}${nucleotidesTranslation[nTranslated]}`;
    }
    //end input validation
  
  }

  return nucleotideTranslated; 
}
