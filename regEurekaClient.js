const Eureka = require('eureka-js-client').Eureka;

const client = new Eureka({
    instance: {
        app: 'jqservice',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        port: 8888,
        vipAddress: 'jq.test.something.com',
        dataCenterInfo: {
            name: 'MyOwn',
        },
    },
    eureka: {
        host: '10.211.55.5',
        port: 8761,
    }
});

client.start();