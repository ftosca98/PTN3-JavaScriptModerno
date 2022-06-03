
/*punto6*/
const carro =  {
      color: 'gris',
      tipo: 'auto',
      registroDia: new Date('2018-03-02'),
      capacidad: 4
    };



    const imprimePropiedades = ({color, tipo, registroDia, capacidad}) => {
     
      console.log({color});
      console.log({tipo});
      console.log({registroDia});
      console.log({capacidad});
       
      }
       imprimePropiedades(carro);
      
   