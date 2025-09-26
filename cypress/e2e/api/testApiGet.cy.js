describe('API Testing - Echo Service', () => {
  
  const baseUrl = 'https://echo-serv.tbxnet.com/v1';
  const endpoint = '/echo';

  it(' Validar status code, tiempo de respuesta, body y headers', () => {
  const start = Date.now();

  cy.request({
    method: 'GET',
    url: `${baseUrl}${endpoint}`,
    qs: {
      text: 'prueba',
      randomawait: 2,
      wait: 3
    }
  }).then((response) => {
    const duration = Date.now() - start;

    //  Status Code
    //meter al try cahtch para validar el menssaje de error
    expect(response.status).to.eq(200);
    

    //  Tiempo de respuesta (menor a 3 segundos)
    expect(duration).to.be.lessThan(3000);

    //  Headers útiles
    expect(response.headers).to.have.property('content-type').and.include('application/json');
    expect(response.headers).to.have.property('date');

    // 🔹 Body (estructura esperada)
    expect(response.body).to.have.property('text', 'prueba');
    
  });
});



});
