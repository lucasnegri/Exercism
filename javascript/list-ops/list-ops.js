//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = [...values]
  }

  append(list) {
    return new List([...this.values, ...list.values]);
  }

  concat(lists) {
    let t = [...this.values];
    lists.values.map((number) =>{
      t = [...t, ...number.values];
    })
    return new  List(t)
  }

  filter(predicated) {
    let filtered = [];
    this.values.map((number) => {
      if(predicated(number)) filtered = [...filtered, number]
    })
    return new List(filtered)
  }

  map(func) {
    let mapped = [];
    this.values.map((number) => {
      mapped = [...mapped, func(number)]
    })
    return new List (mapped)
  }

  length() {
    return this.values.length;
  }

  foldl(func, initial) {
    let acc = initial;
    this.map((number) => {
      acc = func(acc, number);
    })
    return acc
  }

  foldr(func, initial) {
    const list1= new List([...this.values].reverse());
    list1.reverse()
    let acc = initial;
    list1.map((number)=>{
      acc = func(acc,number);
    })
    return acc;
  }

  reverse() {
    return new List([...this.values].reverse())
  }
}
