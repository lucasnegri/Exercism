//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(L) {
   return new List([...this.values, ...L.values]);
  }

  concat(L) {
    throw new Error('Remove this statement and implement this function');
  }

  filter(L) {
    throw new Error('Remove this statement and implement this function');
  }

  map(L) {
    throw new Error('Remove this statement and implement this function');
  }

  length(L) {
    throw new Error('Remove this statement and implement this function');
  }

  foldl(L) {
    throw new Error('Remove this statement and implement this function');
  }

  foldr(L) {
    throw new Error('Remove this statement and implement this function');
  }

  reverse(L) {
    throw new Error('Remove this statement and implement this function');
  }
}
