/*punto6: según este objeto hacer una desestructuración o  destructuring de cada atributo y mostrar en consola*/
const carro =  {
      color: 'gris',
      tipo: 'auto',
      registroDia: new Date('2018-03-02'),
      capacidad: 4
    };


/*Ej:1
    /*const imprimeatributos = (carro) => {
      console.log("color",carro.color);
      console.log("tipo" ,carro.tipo);
      console.log("registroDia" ,carro.registroDia);
      console.log("capacidad" ,carro.capacidad);

    }

    imprimeatributos(carro);*/

/*Ej:2*/

let imprimeAtributos = ( { color, tipo, registroDia, capacidad }) => {

console.log({color});
console.log({tipo});
console.log({registroDia});
console.log({capacidad});
}
imprimeAtributos(carro);