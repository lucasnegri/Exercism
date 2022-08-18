//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let keys = dna.split("")
    let rna = []
    keys.forEach((key) => {
        switch(key){
            case 'A': key='U'; rna.push(key); break;
            case 'C': key='G'; rna.push(key); break;
            case 'G': key='C'; rna.push(key); break;
            case 'T': key='A'; rna.push(key); break;
            case 'A': key='U'; rna.push(key); break;
            default: return ''
        }
    })
    return rna.join("")
};
