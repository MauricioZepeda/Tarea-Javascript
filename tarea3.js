var objeto = {
    lista: null,
    llamadaApi: async function(){
        if(!this.lista){ 
            this.lista = await fetch('https://escalab-6b3e3.firebaseio.com/javascript.json')               
                .then(function(respuesta){
                    return respuesta.json();
                })
                .then(function(respuesta){  
                    return respuesta;
                })
                .catch(function(error){
                    console.log("error: ", error);
            }); 
        } 
    },
    verDatoLista: function(posicion){
        if(this.lista && this.lista[posicion]){ 
            return this.lista[posicion];
        }
        console.log("No existe ese elemento en la lista");
    },
    vaciarLista: async function(){
        console.log("Se eliminará la lista de forma asíncrona");
        this.lista = await new Promise(function(resolve){
            setTimeout(function(){ 
                resolve();
            }, 3000);
        }).then(function(){
            console.log("Lista eliminada!");
            return null;
        });
    },
    verPorPropiedad: function(posicion, propiedad){
        if(this.lista && this.lista[posicion]){ 
            var elemento = this.lista[posicion];
            var valorElemento = elemento[propiedad]
            if(valorElemento){
                return valorElemento
            }
        }
        return "No existe la propiedad"
    }
}
