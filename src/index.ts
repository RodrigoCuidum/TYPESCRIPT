let mensaje: string = "Hola mundo"

mensaje = "Chanchito feliz"

mensaje = "Chao mundo"

console.log(mensaje)

/**
 * Tipos de JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * Tipos de TS
 * any (mejor no utilizarlo)
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 * 
 * tipos inferidos
 */

let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = "Velociraptor"
let extintos = true

function chanchitoFeliz(config: any){
    return config
}


let animales: string[] = ['perro', 'gato', 'caballo']
let numeros: number[] = [38, 105, 300]
let checks: boolean[] = []
let numeros2: Array<number> = []

// numeros.map(x => x.) // el autocompletado sugiere métodos del tipo de dato

let tupla: [number, string[]] = [1, ["yurii", "Alexia"]]

const pequeña = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

// PascalCase
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }

const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success

type Direccion = {
        numero: number,
        calle: string,
        pais: string,
}

type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
}

const objeto: Persona = {
    id:1,
    nombre: 'Yurii',
    talla: Talla.Mediana,
    direccion: {
        numero: 7,
        calle: "alaverga_wey",
        pais: "penezuela"
    }
}

// objeto.nombre = 'Pablo'

const arr: Persona[] = []