
const autos = require('./autos');
//busca el auto por patente y si le pasamos otra patente me devuelve un null//


const concesionaria = {
    autos,
    buscarAuto: function (patente) {
        return this.autos.find(auto => auto.patente === patente) || null
    },
    venderAuto: function (patente) {
        let auto = this.buscarAuto(patente);
        auto && (auto.vendido = true);
        return auto || "AUTO NO ENCONTRADO"
    },
    autosParaLaVenta: function () {
        return this.autos.filter(auto => !auto.vendido)
    },
    autosNuevos: function () {

        return this.autosParaLaVenta().filter(auto => auto.km < 100)

    },
    listaDeVentas: function () {

        let vendidos = this.autos.filter(auto => auto.vendido === true);
        let listaDeAutosVendidos = vendidos.map(auto => auto.precio)
        return listaDeAutosVendidos
    },
    totalDeVentas: function () {
        return this.listaDeVentas().reduce((acumulador, elementoDelArray) => acumulador + elementoDelArray, 0)


    },
    puedeComprar: function (auto, persona) {
         auto = this.autos
        if (auto.precio < persona.capacidadDePagoTotal && persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas)) {
            return true
        }
        else {
            return false
        }
    },
    autosQuePuedeComprar: function(persona){
        let auto = this.autosParaLaVenta().filter(personas)
        if(this.puedeComprar(auto,persona)){
           return 
        }  } }
        console.log(concesionaria.autosQuePuedeComprar());
       
         
        
        


/* console.log(concesionaria.autosQuePuedeComprar());
 */