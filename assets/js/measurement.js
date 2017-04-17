(function(exports) {
    "use strict";

    // Constructor
    function Medida(value, type) {
        if (!type) {
            var param = XRegExp(""
                                + "(?<value>       [-+]?\\d+ (?:[\\.,]\\d*) \\s* ) # Get number \n"
                                + "((e(?<exponent> [-+]?\\d+)\\s*)?)               # Get Exponent\n"
                                + "(?<measure>     [a-zA-Z]+)                      # Get kind");
        var m = XRegExp.exec(value, param);
        this.value = parseFloat(m.value) * Math.pow(10, parseInt(m.exponent));
        this.type = m.measure;
        }
        else {
            this.value = value;
            this.type = type;
        }

    }
    
    Medida.match = function (input) {
        var measures = '[a-z]+';

        var inputRegex = XRegExp(
            '^(\\s*)                                                  # whitespaces \n'
                    + '(?<value>       [-+]?\\d+ (?:[\\.,]\\d*)?\\s*)     # captures the number\n'
                    + '((e(?<exponent> [-+]?\\d+)\\s*)?)                  # captures the exponent\n'
                    + '(?<tipo>       ' + measures + ')                   # Capture kind of value\n'
                    + '((?:\\s+to)?\\s+ (?<destino>' + measures + '))?    # Get "to" syntax \n'
                    + '(\\s*)$                                            # whitespaces \n'
                , 'xi');
        return XRegExp.exec(input, inputRegex);
    };
    
    Medida.medidas = {};

    Medida.convertir = function(valor){
        var measures = Medida.medidas;

        measures.c = Celsius;
        measures.f = Fahrenheit;
        measures.k = Kelvin;

        var match = Medida.match(valor);

        if(match) {
            var numero = match.value;
            var tipo = match.tipo.toLowerCase();
            var destino = match.destino.toLowerCase();
        
            var source = new measures[tipo[0]](numero);
            var target = "to" + measures[destino[0]].name;
            return source[target](numero).toFixed(2) + " " + measures[destino[0]].name;
            
        }
        else {
            return "Introduzca la temperatura de la siguiente forma: 3.14F to C";
        }
    };

    exports.Medida = Medida;

})(this);