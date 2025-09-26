describe('API Testing - Echo Service', () => {
  
  const baseUrl = 'https://echo-serv.tbxnet.com/v1';
  const endpoint = '/test';

  it('Validar status code, tiempo de respuesta, body y headers', () => {
  const start = Date.now();

  cy.request({
    method: 'POST',
    url: `${baseUrl}${endpoint}`,
    
  }).then((response) => {
    
    //Status Code
    //meter al try cahtch para validar el menssaje de error
    expect(response.status).to.eq(200);
    
    //  Headers útiles
    expect(response.headers).to.have.property('content-type').and.include('application/json');
  

    //  Body (estructura esperada)
    expect(response.body).to.have.property('date');
    expect(response.body).to.have.property('protocol', 'https');
    expect(response.body).to.have.property('method', 'POST');
    expect(response.body).to.have.property('originalUrl', '/v1/test');
    
  });
});



});
