const datos = [
    {
    id: 1,
    nombre: 'Juan',
    habilidades: ['JavaScript', 'HTML', 'CSS'],
    proyectos: [
    { id: 1, nombre: 'Proyecto 1' },
    { id: 2, nombre: 'Proyecto 2' }
    ]
    },
    {
    id: 2,
    nombre: 'María',
    habilidades: ['Python', 'SQL', 'Django'],
    proyectos: [
    { id: 3, nombre: 'Proyecto 3' },
    { id: 4, nombre: 'Proyecto 4' }
    ]
    },
    {
    id: 3,
    nombre: 'Pedro',
    habilidades: ['Java', 'Spring', 'Hibernate'],
    proyectos: [
    { id: 5, nombre: 'Proyecto 5' },
    { id: 6, nombre: 'Proyecto 6' }
    ]
    }
    ];

    


 const desarrolladores = (datos) =>{
    let desarrolladoresJs=datos.filter(desarrollador=>desarrollador.habilidades.includes("JavaScript"))
    return desarrolladoresJs
 }
const proyectos = (datos) =>{
    let proyectos = datos.map(proyecto => proyecto.proyectos.map(proyect => proyect.nombre).join(" , "))
     return proyectos
}

console.log(desarrolladores(datos))
console.log(proyectos(datos))