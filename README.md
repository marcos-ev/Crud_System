# Projeto Crud Users Benefits

## Sobre o Projeto

Este projeto é uma aplicação Angular desenvolvida para melhorar a eficiência na gestão de usuários e de seus benefícios. Com uma interface amigável, nosso sistema substitui plataformas antigas e complicadas, tornando o trabalho até 3x mais rápido e simplificado.

Deploy: https://crud-system-wine.vercel.app/

## Funcionalidades

- **Gerenciamento de Usuários**: Adicione, atualize, visualize e delete usuários de forma simples e rápida.
- **Controle de Benefícios**: Gerencie os benefícios oferecidos aos usuários, com a possibilidade de adicionar novos benefícios, editar ou remover existentes.
- **Dashboard Interativo**: Acompanhe métricas importantes sobre os usuários e benefícios através de nosso painel interativo.
- **Upload de Foto de Perfil**: Usuários podem adicionar ou alterar suas fotos de perfil.

## Tecnologias Utilizadas

- **Front-end**: Angular
- **Estilização**: SCSS
- **Icones**: Angular Material Icons
- **Backend**: Firebase

## Configuração e Uso do Firebase

Para utilizar o Firebase como backend para autenticação e armazenamento de dados, siga os passos abaixo:

1. **Crie um Projeto no Firebase**: Acesse [Firebase Console](https://console.firebase.google.com/) e crie um novo projeto.
2. **Adicione seu App Angular ao Projeto Firebase**: Dentro do projeto Firebase, clique em "Adicionar app" e selecione a plataforma web para obter suas configurações específicas.
3. **Configure o Firebase no Projeto Angular**:
   - Instale o Firebase em seu projeto Angular utilizando NPM:
     ```bash
     npm install firebase @angular/fire
     ```
   - Adicione as configurações do Firebase ao seu ambiente Angular em `src/environments/environment.ts`:
     ```typescript
     export const environment = {
       production: false,
       firebaseConfig: {
         apiKey: "sua-api-key",
         authDomain: "seu-auth-domain",
         projectId: "seu-project-id",
         storageBucket: "seu-storage-bucket",
         messagingSenderId: "seu-messaging-sender-id",
         appId: "seu-app-id"
       }
     };
     ```
   - Inicialize o Firebase no seu módulo principal (`app.module.ts`), importando o `AngularFireModule` e o `AngularFirestoreModule`:
     ```typescript
     import { AngularFireModule } from '@angular/fire';
     import { AngularFirestoreModule } from '@angular/fire/firestore';
     import { environment } from '../environments/environment';

     @NgModule({
       imports: [
         AngularFireModule.initializeApp(environment.firebaseConfig),
         AngularFirestoreModule,
         // outros imports
       ],
       // declarações e bootstrap
     })
     export class AppModule { }
     ```

4. **Utilize o Firebase para Autenticação e Armazenamento de Dados**:
   - Autenticação: Utilize o `AngularFireAuth` para adicionar funcionalidades de login.
   - Armazenamento de Dados: Use o `AngularFirestore` para interagir com o Firestore Database.
  
   - ## Como Rodar o Projeto

```markdown
## Como Rodar o Projeto

Para executar este projeto Angular com integração ao Firebase em seu ambiente local, siga as instruções abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://link-para-seu-repositorio.git
   ```
2. **Entre no diretório do projeto**:
   ```bash
   cd crud-system
   ```
3. **Instale as dependências**:
   ```bash
   npm install
   ```
4. **Configure o Ambiente**:
   - Garanta que o arquivo `src/environments/environment.ts` esteja configurado com as suas credenciais do Firebase, conforme explicado na seção Configuração e Uso do Firebase.

5. **Inicie o servidor de desenvolvimento**:
   ```bash
   ng serve
   ```
   - Para rodar o servidor em uma porta específica, use `ng serve --port <numero-da-porta>`.

6. **Acesse a aplicação**:
   - Se o navegador não abrir automaticamente, você pode acessar manualmente inserindo `http://localhost:4200/` na barra de endereços.
``


## Contato

Linkedin - ([https://www.linkedin.com/in/marcos-eduardo-virgili/ ](https://www.linkedin.com/in/marcos-eduardo-virgili/)) - marcosev@gmail.com

Projeto Link: [https://github.com/marcos-ev/Crud_System](https://github.com/marcos-ev/Crud_System)




