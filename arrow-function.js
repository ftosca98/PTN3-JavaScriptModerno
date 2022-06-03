/*Dado este array, realizar funciones de arrays moderno*/

let carros = [
    {
      color: 'morado',
      tipo: 'minivan',
      registroDia: new Date('2017-01-03'),
      capacidad: 7
    },
    {
      color: 'rojo',
      tipo: 'camioneta',
      registroDia: new Date('2018-03-03'),
      capacidad: 5
    },
    {
      color: 'azul',
      tipo: 'camioneta',
      registroDia: new Date('2018-06-03'),
      capacidad: 5
    },
    {
      color: 'rojo',
      tipo: 'camion',
      registroDia: new Date('2018-03-07'),
      capacidad: 7
    },
    {
      color: 'gris',
      tipo: 'camioneta',
      registroDia: new Date('2018-03-02'),
      capacidad: 5
    },
    {
      color: 'gris',
      tipo: 'auto',
      registroDia: new Date('2018-03-02'),
      capacidad: 4
    },
    {
      color: 'gris',
      tipo: 'cupe',
      registroDia: new Date('2018-03-02'),
      capacidad: 4
    },
  ];

/*punto1*/

/*ej1*/
const result = carros.filter((item)=>{
  if(item.color === "rojo")
  return item;
});
console.log(result);

/*ej2*/

const result2 = carros.filter((item)=>{
  if(item.color === "color")
  return item;
});
console.log("rojo");

/*punto2*/

/*ej1*/
const result3 = carros.filter((item)=>{
  if(item.tipo ==="camioneta")
  return item;
});
console.log(result3);

/*ej2*/
const result4 = carros.filter((item)=>{
  if(item.tipo ==="camionetas")
  return item;
});
console.log("quiero que traiga todas las camionetas.");

/*punto3*/

carros.push(
  { color: 'naranja', tipo: 'peugeot 208' ,  registroDia: new Date ('2021'), capacidad: '5' },
);

console.log(carros); 

/*punto4*/
let resutado = carros.map (item => {
  return {
    ...item,
    imformacioncarros: `${item.color} ${item.tipo} ${item.registroDia} ${item.capacidad}`
  }
});

console.log(carros);


/*carros.forEach(function(carros) {
  console.log(carros.color)
  console.log(carros.tipo)
  console.log(carros.registroDia)
  console.log(carros.capacidad)
})
*/
console.warn('For in');
for( let i in carros) {
  console.log(carros[i]);

}
