let Measurement = (function() {

    let _value = Symbol();
    let _magnitude = Symbol();

    class Measurement {
        constructor(value, magnitude) {
            this[_value] = value;
            this[_magnitude] = magnitude;
        }
        get value() {
            return this[_value];
        }
        get magnitude() {
            return this[_magnitude];
        }
    }
    return Measurement;
}());

function converter(original_measure) {
    var temp = original_measure;
    var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])\s*(to)?\s*([fFcCkK])\s*$/;

    var m = temp.match(regexp);

    if (m) {
        var num = m[1];
        var fromType = m[2];
        var toType = m[4];
        num = parseFloat(num);
        if (fromType == 'c' || fromType == 'C') {
            var temp = new Celsius(num, fromType);
            switch (toType) {
                case "k":
                case "K":
                     return temp.toKelvin();
                    break;
                case "f":
                case "F":
                    return temp.toFarenheit();
                    break;
                default:
                    break;
            }
        } else if (fromType == 'f' || fromType == 'F') {
            var temp = new Farenheit(num, fromType);
            switch (toType) {
                case "k":
                case "K":
                    return temp.toKelvin();
                    break;
                case "c":
                case "C":
                    return temp.toCelsius();
                    break;
                default:
                    break;
            }
        } else {
            var temp = new Kelvin(num, fromType);
            switch (toType) {
                case "f":
                case "F":
                    return temp.toFarenheit();
                    break;
                case "c":
                case "C":
                    return temp.toCelsius();
                    break;
                default:
                    break;
            }
        }
    } else {
        return "ERROR! Try something like '-4.2C to f' or '-4.2C f' instead";
    }
}