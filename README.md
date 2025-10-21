# crud-backend-nodejs-jp-2025
Aulas de CRUD em backend com Node.js do curso Jovem Programador 2025

## Iniciar projeto:

> npm init

Enter enter enter...

> npm i express crossenv jest

## No package.json:

  "scripts": {  
    "dev": "node --watch ./src/index.js",  
    "test": "cross-env TEST=true node --experimental-vm-modules node_modules/jest/bin/jest.js"  
  },  

### IMPORTANTE!

Não esquecer do:
> "type": "module",
no package.json

## Estrutura de pastas:

src  
  -- controller  
     - users.js   
  -- router  
     - users.js  
  -- service  
     - users.js  
  index.js  
