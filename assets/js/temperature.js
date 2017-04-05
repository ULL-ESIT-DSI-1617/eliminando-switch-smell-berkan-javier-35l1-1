class Temperature extends Measurement {
    constructor(value, magnitude) {
        super(value, magnitude);
    }
}

class Celsius extends Temperature {
    constructor(value, magnitude) {
        super(value, magnitude);
    }

    toKelvin() {
        return (this.value + 273.15).toFixed(2) + " Kelvin";
    }

    toFarenheit() {
        return ((this.value * 9 / 5) + 32).toFixed(2) + " Farenheit";
    }
}

class Farenheit extends Temperature {
    constructor(value, magnitude) {
        super(value, magnitude);
    }

    toKelvin() {
        return ((this.value + 459.67) * 5 / 9).toFixed(2) + " Kelvin";
    }

    toCelsius() {
        return ((this.value - 32) / (9 / 5)).toFixed(2) + " Celsius";
    }
}

class Kelvin extends Temperature {
    constructor(value, magnitude) {
        super(value, magnitude);
    }

    toCelsius() {
        return (this.value - 273.15).toFixed(2) + " Celsius";
    }

    toFarenheit() {
        return ((this.value * 9 / 5) - 459.67).toFixed(2) + " Farenheit";
    }
}