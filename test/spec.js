const expect = require('chai').expect; 
const tempConverter = require('../tempConverter');

const calc = new tempConverter;

describe('Temp Converter', ()=> {
    it('is an function', ()=> {
        expect(calc).to.be.ok;
    });

    it('has a function to convert C to F', ()=>{
        expect(calc.convertCtoF).to.be.a('function');
        expect(calc.convertCtoF(0)).to.equal(32);
        expect(calc.convertCtoF(55)).to.equal(131);
    });

    it('has a function to convert F to C', ()=>{
        expect(calc.convertFtoC).to.be.a('function');
        expect(calc.convertFtoC(32)).to.equal(0);
        expect(calc.convertFtoC(131)).to.equal(55);
    });
});