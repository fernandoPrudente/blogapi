import {expect} from 'chai'
import {x} from './teste';

describe('classe x', () => {
    describe('passando valor numerico válido', () => {

        const param = 2;
        const resultadoCorreto  = 3;           

        it('deve retornar resultado de cálculo correto', () => {

            const result = x(param);             

            expect(result, 'resultado de cálculo incorreto').eq(resultadoCorreto)
        }); 
    }); 
});