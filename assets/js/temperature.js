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

        toKelvin: function(value) {
            return (value + 273.15);
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
        },

        toKelvin: function(value) {
            return ((value + 459.67) * 5/9);
        }
    };

    // Clase Kelvin 
    function Kelvin(valor){
        Temperature.call(this, valor, "k");
    }

    Kelvin.prototype = {
        name: "Kelvin",

        toKelvin: function(value){
            return value;
        },

        toCelsius: function(value){
            return (value - 273.15);
        },

        toFahrenheit: function(value){
            return ((value * 9/5)-459.67);
        }
    },

    exports.Temperatura = Temperature;
    exports.Celsius = Celsius;
    exports.Fahrenheit = Fahrenheit;
    exports.Kelvin = Kelvin;

})(this);