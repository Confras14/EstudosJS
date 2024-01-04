let cars = [
  { brand: 'BMW', year: 2014 },
  { brand: 'Ferrari', year: 1976 },
  { brand: 'Hyundai', year: 2003 },
  { brand: 'Honda', year: 2021 },
  { brand: 'Fiat', year: 1999 }
]

// Ordenando uma lista de objetos
cars.sort((a, b) => a.year - b.year)

console.log(cars)