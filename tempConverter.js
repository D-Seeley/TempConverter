class TempConverter {
    constructor () {
        this.convertFtoC = (tempF) => {
            return (tempF - 32)* 5/9;
        };
        this.convertCtoF = (tempC) => {
           return tempC * (9/5) + 32;
        };
    }
}

module.exports = TempConverter;
