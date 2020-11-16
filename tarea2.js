var objeto = {
    mascotas: ['perros','gatos','canarios','pez','serpiente'],
    esSegura: false,
    llamarAlerta: function(mensaje){ alert(mensaje) },
    esHttps: function(){ 
        var esSegura = location.protocol === "https:"
        this.esSegura = esSegura
        return esSegura
    },
    eliminarMascota: function(tipo){
        var indice = this.mascotas.indexOf(tipo)
        this.mascotas.splice(indice, 1)
        return this.mascotas
    },
    eliminarUltimaMascota: function(){ 
        this.mascotas.pop()
        return this.mascotas
    },
    agregarMascota: function(mascota){
        this.mascotas.push(mascota)
        return this.mascotas
    },
    contadorMascotas: function(){
        var termino = 'os'
        var contador = 0
        this.mascotas.forEach(function(mascota){
            if(mascota.endsWith(termino)){
                contador++
            }
        }) 
        return "En el arreglo hay " + contador + " mascotas que terminan con '" + termino + "'"
    }
} 