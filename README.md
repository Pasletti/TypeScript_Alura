# Rodar projeto
- npm install
- npm run server
- http://localhost:3000/
- npm install typescript@4.2.2 --save-dev

- Criar o arquivo tsconfig.json
{
    "compilerOptions": {
        "outDir": "dist/js",
        "target": "ES6"
    },
    "include": [
        "app/**/*"
    ]
}

- No arquivo package.json
"scripts": {
    "compile": "tsc"
}

- npm run compile

- No arquivo package.json
"scripts": {
    "watch": "tsc -w"
}

- npm run watch

- npm run start

# Sites
- https://www.typescriptlang.org/