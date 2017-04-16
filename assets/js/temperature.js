(function(exports) {
    "use strict";

    function Temperature(valor, tipo) {
        Medida.call(this, valor, tipo);
    }

    function Celsius(valor) {
        Temperatura.call(this, valor, "c");
    }

    Celsius.prototype = {
        name: "Celsius",

        check: function(tipo) {
            return tipo.match(/(c(?:e(?:l(?:s(?:i(?:u(?:s)))))))/g);
        },

        toFarhenheit: function(value) {
            return ((this.valor * 9/5) + 32);
        },

        toCelsius: function(value) {
            return this.valor;
        }
    };

    exports.Temperatura = Temperature;
    exports.Celsius = Celsius;

})(this)