import chai from 'chai';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import { AuthorController } from '../../controllers/author.controller.js';


chai.use(chaiAsPromised);
chai.should();

const data =
{
    firstName: 'Jorge',
    lastName: 'Montes',
    birthDate: '1994-10-12',
    nationality: 'Argentina'
}


describe('Author Controller - add function', () => {
    //TODO OK
    it('Autor creado con éxito', async () => {
        const mockRequest = { body: data };
        const mockResponse = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const mockNext = sinon.stub();

        // Mock del servicio para simular la creación exitosa
        const mockCreate = sinon.stub().resolves(data);
        const authorService = { create: mockCreate };

        // Ejecuta la función add del controlador
        await AuthorController.create(mockRequest, mockResponse, mockNext, authorService);

        // Verifica que la respuesta sea correcta
        mockResponse.status.calledWith(201);


        // Verifricar que se llamó a json desde el controller
        sinon.assert.calledWith(mockResponse.json, sinon.match.object);

        // Verifica que la función del servicio fue llamada correctamente
        mockCreate.calledWith(mockRequest.body);

        // Verifica que la función next no fue llamada (ya que la operación fue exitosa)
        mockNext.called.should.be.false;

        // Verifica el contenido específico de la respuesta JSON
        sinon.assert.calledWithMatch(mockResponse.json, {
            data
        });
    });

    //ERROR
    it('Error al crear el Préstamo', async() => {
        const mockRequest = { body: data };
        const mockResponse = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
        const mockNext = sinon.stub();

        // Mock del servicio para simular la creación exitosa
        const mockCreate = sinon.stub().rejects(new Error('Error. No se ha podido crear el préstamo'));
        const authorService = { create: mockCreate };

        await AuthorController.create(mockRequest, mockResponse, mockNext, authorService);

        sinon.assert.calledWith(mockNext, sinon.match.instanceOf(Error).and(sinon.match.has('message', 'Error. No se ha podido crear el préstamo')))
    })
});