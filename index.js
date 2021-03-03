const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});

// netstat -o -n -a mostra todas as portas abertas

//git ignore (faz com que eu não suba algumas arquivos que eu colocar dentro do .gitignore)