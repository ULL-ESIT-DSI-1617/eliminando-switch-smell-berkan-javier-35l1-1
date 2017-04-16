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
        //measures.f = Farenheit;

        var match = Medida.match(valor);

        if(match) {
            var numero = match.value;
            var tipo = match.tipo;
            var destino = match.destino;
        
            try {
                var source = new measures[tipo[0]](numero);
                var target = "to"+measures[destino[0]].name;
                if(!source.check(tipo) || !target.check(destino)) {
                    throw "error";
                }
                return source[target]().toFixed(2) + " " + target;
            }
            catch(err){
                return "No hay forma de convertir desde" + tipo + hasta + destino;
            }
        }

        else
            return "Introduzca la temperatura de la siguiente forma: 330e-1 F to C";
    };

    exports.Medida = Medida;

})(this);