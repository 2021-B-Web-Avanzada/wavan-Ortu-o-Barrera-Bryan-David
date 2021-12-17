class Pais {
    constructor(idioma, fundacion, presidente, poblacion, prefijo_telefono) {
        this.idioma = idioma;
        this.fundacion = fundacion;
        this.presidente = presidente;
        this.poblacion = poblacion;
        this.prefijo_telefono = prefijo_telefono;
    }
}

class Ciudad {
    constructor(pais, es_capital, fundacion, superficie, poblacion) {
        this.pais = pais;
        this.es_capital = es_capital;
        this.fundacion = fundacion;
        this.superficie = superficie;
        this.poblacion = poblacion;
    }
}

