(function(exports) {
    "use strict";
    // Clase Temperature
    function Temperature(valor, tipo) {
        Medida.call(this, valor, tipo);
    }
    // Clase Celsius
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

    // Clase Farenheit
    function Farenheit(valor){
        Temperature.call(this, valor, "f");
    }

    Farenheit.prototype = {
        name: "Farenheit",

        check: function(tipo){
            return tipo.match(/(f(?:a(?:h(?:r(?:e(?:n(?:h(?:e(?:i(?:t))))))))))/g);
        },

        toCelsius: function(value) {
            return ((this.valor - 32)*5/9);
        },

        toFahrenheit: function(value) {
            return this.valor;
        }
    };

    exports.Temperatura = Temperature;
    exports.Celsius = Celsius;
    exports.Farenheit = Farenheit;

})(this);