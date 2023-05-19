const { writeFileSync } = require('fs');
const autos = require('./autos.json');
const { log } = require('console');
const personas = require('./personas.json');
//busca el auto por patente y si le pasamos otra patente me devuelve un null//
function guardarCambios(autos) {
    writeFileSync('./autos.json', JSON.stringify(autos, null, 3), 'utf-8');
  }
const concesionaria = {
    autos,
    buscarAuto: function (patente) {
        return this.autos.find(auto => auto.patente === patente) || null
    },
    venderAuto: function (patente) {
        /*   let auto = this.buscarAuto(patente) */
        const autosModificados = this.autos.map(auto => {
            if (auto.patente === patente) {
                auto.vendido = true
            }
            return auto
        })
        guardarCambios(autosModificados);

        return autosModificados.find(auto => auto.patente === patente)
    },
    autosParaLaVenta: function () {
        return this.autos.filter(auto => auto.vendido === false )
    },
    autosNuevos: function () {

        return this.autosParaLaVenta().filter(auto => auto.km < 100)
    },
    listaDeVentas: function () {

        return this.autos.filter(auto => auto.vendido).map(auto => auto.precio)

    },
    totalDeVentas: () => {
        return this.listaDeVentas().reduce((acum, num) => acum + num, 0);

    },
    puedeComprar :function(auto,persona){
return auto.precio <= persona.capacidadDePagoTotal && (auto.precio / auto.cuotas)<= persona.capacidadDePagoEnCuotas
    },
 autosQuePuedeComprar: function(persona){
        return this.autosParaLaVenta().filter(autos=>this.puedeComprar(autos,persona))
        
       
        }   } 





console.log(concesionaria.autosQuePuedeComprar(personas[0]));
