      

      /*
        Desarrolla la lógica para convertir los valores del textArea en minusculas: 

        Tip: Divide el problema en partes pequeñas. 

        1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
        2) Parte los valores por la coma (,). TIP. Utiliza la función split
        3) convierte los valores a minuscula con alguna de las funciones de javascript. 
        4) Escribe en el textArea los nuevos valores

        Realiza todo lo anterior al hacer click en el botón. 
        */

let  min = document.getElementById("btn_mayusculas")
min.addEventListener("click", Conv)
function Conv(event){
  

  let conv = document.getElementById("txt_may").value

  let arr = conv.split(',')

  arr.toLowerCase()

  document.getElementById("txt_may").value = arr
  
}
      /*
        Crea una funcion llamada "calculateDogAge" que: 
    
    - reciba como argumento un número representando la edad en años humanos.
    - realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
    - Deberá escribir en valor convertido. 
    - Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
    - Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
           Deberás convertir el string a Entero. 
    
    */

  let num = document.getElementById("btn_añoshumano")
  num.addEventListener("click", calculateDogAge)
  function calculateDogAge(event){
    event.preventDefault()
    let age = document.getElementById("edad_humano").value
    edad=age.parseInt()
    edadh=edad*7
    document.getElementById("edad_perro").value = edadh
  }

      /*  OBJETOS 
  
  
    A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
    
    1) Nombre
    2) Especie
    3) Ataque
    4) Defensa
    
    
    B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
       Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
       El Nombre y la Especie son Strings, Ataque y Defensa numericos.
       
       Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

     */

function Pokemon (Nombre, Especie, Ataque, Defensa){
  this.Nombre = Nombre;
  this.Especie = Especie;
  this.Ataque = Ataque;
  this.Defensa = Defensa;
}

var poke1 = new Pokemon('Chorizo','Fuego',90,85);
var poke2 = new Pokemon('Tena','Hielo',130,20);

let Poke = document.getElementById("btn_muestra")
Poke.addEventListener("click", poke)
function poke(event){
  event.preventDefault()
  document.getElementById("nombre_poke1").value = poke1.Nombre;
  document.getElementById("especie_poke1").value = poke1.Especie;
  document.getElementById("ataque_poke1").value = poke1.Ataque;
  document.getElementById("defensa_poke1").value = poke1.Defensa;
  document.getElementById("nombre_poke2").value = poke2.Nombre;
  document.getElementById("Especie_poke2").value = poke2.Especie;
  document.getElementById("ataque_poke2").value = poke2.Ataque;
  document.getElementById("defensa_poke2").value = poke2.Defensa;
}