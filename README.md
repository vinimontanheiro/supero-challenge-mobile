
## Aplicativo React Native utilizando hooks, i18n, redux, apollo client(Graphql), launcher icons, splashscreen e a tela de login com implementação de um exemplo de styled components

## Dependências:

- [Yarn](https://yarnpkg.com/pt-BR/)
- [NodeJS](https://nodejs.org/en/)

### Development 
```
$ cd project-folder
$ yarn
$ yarn android
```

### Estrutura do projeto

```
- ios
- android
- src
  - services
    - apollo
    - redux
    - i18n
  - modules
    - Book
    - Login
    - hooks
    - ui
  - assets
    - img

```

### Para facilitar deixei a APK na raíz do projeto:
```
- project-folder
  - app-debug.apk
```

### A URL do servidor está apontando para o servidor de produção, ela pode ser alterara pela variável de ambiente GRAPHQL_URI ou pelo arquivo:

```
- project-folder
  - src
    - constants.js //GRAPHQL_URI
```

### Se for acaso tiver algum problema com servidor de produção, por favor me avisem, as vezes o Digital Ocean entra e manutenção, não deixei automatizado para levantar os serviços

### usuário e senha padrão de login:
  - e-mail : fulano@supero.com.br
  - password: supero

### Tela de login
![Login](https://raw.githubusercontent.com/vmontanheiro/supero-challenge-mobile/master/src/assets/img/login.png)

### Validação de senha
![Validação de senha](https://raw.githubusercontent.com/vmontanheiro/supero-challenge-mobile/master/src/assets/img/invalid_password.png)

### Validação de conta
![Validação de conta](https://raw.githubusercontent.com/vmontanheiro/supero-challenge-mobile/master/src/assets/img/account_not_found.png)

### Validação de formulário
![Validação de formulário](https://raw.githubusercontent.com/vmontanheiro/supero-challenge-mobile/master/src/assets/img/login_without_password_input.png)

### Tela de livros
![Tela de livros](https://raw.githubusercontent.com/vmontanheiro/supero-challenge-mobile/master/src/assets/img/books.png)

### Filtro por ano
![Filtro por ano](https://raw.githubusercontent.com/vmontanheiro/supero-challenge-mobile/master/src/assets/img/datepicker.png)

