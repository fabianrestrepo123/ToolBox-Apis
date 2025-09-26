# ToolBoxUI — Pruebas UI & API con Cypress

Repositorio: https://github.com/fabianrestrepo123/ToolBox-Apis.git

---

Petición GET al endpoint correspondiente: se valida que el status code sea esperado, que la respuesta llegue dentro de un tiempo razonable (<3 segundos), se verifica la estructura de los datos del body, y algunos headers importantes.
Petición POST al endpoint /test: se valida que el status code sea 200, la estructura del body devuelto (propiedades como date, protocol, method, etc.), que el objeto esté bien formado, que query y cookies estén vacíos, y que los headers sean apropiados.


##  Cómo ejecutar los tests

1. **Clona el repositorio**
   -bash
   git clone https://github.com/fabianrestrepo123/ToolBox-Apis.git
   cd ToolBoxUI

2. Instalar las depedencias 

    npm install

3. Ejecuta los tests de Cypress

    Por el modo interactivo : npx cypress open
    Por headless: npx cypress run
    Para correr solo los test de API : npx cypress run --spec "cypress/e2e/api/*.cy.js"




