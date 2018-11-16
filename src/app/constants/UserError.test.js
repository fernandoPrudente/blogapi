import {expect} from 'chai';
import sinon from 'sinon';
import { UserError } from './errors';

describe('classe UserError', () => {

    const errorCode = 200;
    const errorMessage = 'erro ocorreu;'

    const userErrorClass = new UserError(errorCode, errorMessage);

    describe('instancia deve ocorrer com consistência', () => {
        it('objeto UserError instanciado não pode ser nulo', () => {
            expect(userErrorClass).not.null;
        });

        it('código de erro deve estar correto', () => {
            expect(userErrorClass.code).eq(errorCode);
        });

        it('mensagem de erro deve estar correta', () => {
            expect(userErrorClass.message).eq(errorMessage);
        });        
    });
    
    describe('Tipo do Erro disparado', () => {
        it('deve ser "UserError"', () => {
            try {
                throw new UserError(errorCode, errorMessage);
            
            }catch(err){
                expect(err.name).eq('UserError');
            }
        });
    });
    
});