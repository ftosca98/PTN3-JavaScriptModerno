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

/*punto1: hacer un arrow funcion que me filtre mediante un argumento de color:  rojo*/
 let color = carros.filter( x => x.color == 'rojo')
 console.log(color);

/*punto2: hacer un arrow funcion que me filtre mediante un argumento de tipo de carro: quiero que traiga todas las camionetas*/
 let tipoDeCarro = carros.filter( x => x.tipo == 'camioneta')
 console.log(tipoDeCarro);

/*punto3: hacer un arrow funcion  que agrege un nuevo objeto al array, agregarlo al final*/

carros.push(
  { color: 'naranja', tipo: 'peugeot 208' ,  registroDia: new Date ('2021'), capacidad: '5' },
);

console.log(carros); 

/*punto4: mapear todos los objetos y mostrar por consola cada uno de sus ítems, utilizar .map()  o for

hacer un llamado de cada función con su parámetro.  */
let resutado = carros.map (item => {
  return {
    ...item,
    imformacioncarros: `${item.color} ${item.tipo} ${item.registroDia} ${item.capacidad}`
  }
});

console.log(resultado);

carros.forEach(function(carros) {
  console.log(carros.color)
  console.log(carros.tipo)
  console.log(carros.registroDia)
  console.log(carros.capacidad)
})


