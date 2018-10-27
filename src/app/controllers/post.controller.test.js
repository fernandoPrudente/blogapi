import {expect} from 'chai'
import httpMocks from 'node-mocks-http';
import postController from './post.controller';
import postService from '../services/post.service';
import sinon from 'sinon';

describe('Posts Controller', () => {   

    describe('Quando recupero lista de posts', () => {

        const spyPostService = sinon.spy(postService, 'getList');

        afterEach(() => {
            spyPostService.resetHistory();
        });

        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse(); 

        it('precisa acessar 1 vez o método "getList" de "PostService"', () => {          
            postController.list(req, res);     
            expect(spyPostService.callCount).eq(1);    
        });

        it('precisa retornar array de itens', () => {
            return postController.list(req, res).then(() => {
                const data = res._getData();
                expect(data.length).greaterThan(-1);
            }); 
        }); 
        
        // it('fail example', () => {
        //     try
        //     {
        //         postController.list(req, res);     
        //     }
        //     catch(a){

        //     }
        //     expect(spyPostService.threw()).to.be.true;
        // }); 
    });

    describe('Quando incluo um novo post', () => {

        const spyPostService = sinon.spy(postService, 'save');

        afterEach(() => {
            spyPostService.resetHistory();
        });

        it('Precisa acessar uma vez o método "save" de PostService', () => {
            const req = httpMocks.createRequest();
            const res = httpMocks.createResponse();  
                        
            postController.create(req, res).catch(() => {});
            expect(spyPostService.callCount).eq(1);
        });
        
        it('Se nulo, exceção com mensagem correta deve ser retornada', () => {
            const req = httpMocks.createRequest();
            const res = httpMocks.createResponse();     
            
            return postController.create(req, res).catch(err => {
                expect(err.message).eq('Post não pode ser nulo')               
            }); 
        });

        it('precisa retornar campos gerados para o novo post', () => {
            const req = httpMocks.createRequest({
                body: {
                    title: 'novo post'
                }
            });
            const res = httpMocks.createResponse();     
            
            return postController.create(req, res).then(data => {
                const result = res._getData();
                expect(result.id, 'campo "id" não foi retornado').not.be.undefined  
                expect(result.dateCreated, 'campo "dateCreated" não foi retornado').not.be.undefined;       
            }); 
        });        
    });
});