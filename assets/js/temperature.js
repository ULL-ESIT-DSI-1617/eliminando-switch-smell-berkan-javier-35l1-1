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

        toFahrenheit: function(value) {
            return ((value * 9/5) + 32);
        },

        toCelsius: function(value) {
            return value;
        }
    
    };

    // Clase Fahrenheit
    function Fahrenheit(valor){
        Temperature.call(this, valor, "f");
    }

    Fahrenheit.prototype = {
        name: "Fahrenheit",

        toCelsius: function(value) {
            return ((value - 32)*5/9);
        },

        toFahrenheit: function(value) {
            return value;
        }
    };

    exports.Temperatura = Temperature;
    exports.Celsius = Celsius;
    exports.Fahrenheit = Fahrenheit;

})(this);