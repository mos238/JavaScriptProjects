let cb = (n1, n2) => {return n1 + n2};

let hof = (func) => {
  let value = func(3,5);
  return `this function returned ${value}`;
}

hof(cb) // 'this function returned 8'
console.log(hof(cb));