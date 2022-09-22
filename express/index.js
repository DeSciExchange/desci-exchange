const http = require('http');
const express = require("express");
const { initialize } = require('@oas-tools/core');
const proxy = require('express-http-proxy');
const app = require('express')();

app.use('/', proxy('app.quantimo.do'));

const serverPort = 8080;
app.use(express.json({limit: '50mb'}));

const config = {
    middleware: {
        security: {
            auth: {
                access_token: () => { /* no-op */ },
                bearerAuth: () => {  },
                client_id: () => { /* no-op */ },
                curedao_oauth2: () => { /* no-op */ },
            }
        }
    }
}


initialize(app, config).then(() => {
    http.createServer(app).listen(serverPort, () => {
    console.log("\nApp running at http://localhost:" + serverPort);
    console.log("________________________________________________________________");
    if (config.middleware.swagger?.disable !== false) {
        console.log('API docs (Swagger UI) available on http://localhost:' + serverPort + '/docs');
        console.log("________________________________________________________________");
    }
    });
});
