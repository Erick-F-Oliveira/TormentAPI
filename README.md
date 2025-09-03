![TormentAPI](./tormentApi.png)

### API não oficial do universo de Tormenta 

API de fã para consulta de nomes, criaturas, locais e referências do cenário de **Tormenta**.  
O objetivo é facilitar a busca e indicar **onde encontrar** as informações nos materiais oficiais.

---

## 🚀 Tecnologias  

### backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/) (com [Express-Session](https://github.com/expressjs/session))
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) (com [Mongoose](https://mongoosejs.com/))
- [Cors](https://github.com/expressjs/cors?tab=readme-ov-file)
- [Chalk](https://github.com/chalk/chalk)
- [Jsonwebtoken](https://www.jwt.io/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Nodemon](https://nodemon.io/)
- [Joi](https://joi.dev/)
- [Passport](https://www.passportjs.org/) (com [Passport-Discord](https://www.passportjs.org/packages/passport-discord/))
   
---  
### frontend
- [React](https://react.dev/learn) + [Vite](https://vite.dev/guide/)
---
## 📋 Pré requisitos
- Ter o Node.js (v22.17.0 ou maior) instalado.  
[Cique aqui](https://nodejs.org/pt/download) e instale
- Uma conta no MongoDB Atlas.  
[Cique aqui](../TormentAPI/public/config.mongoDB/README.md) e aprenda como se inscrever e configurar
---
## ⚙️ Instalação e Uso

### 1. Clone o repositório
```bash
git clone https://github.com/Erick-F-Oliveira/TormentAPI.git
```
### 2 Vá até o backend
```bash
cd backend
```
### 3 Instale o projeo
```javascript
npm install
```
### 4 Crie um arquivo .env
Use o arquivo .env.example como exemplo de criação.  
Mantenha os mesmos nomes do arquivo de exemplo, caso queira mudar não se esqueca de mudar no código também.  

npm run dev //para rodar o projeto com o nodemon
npm run start

