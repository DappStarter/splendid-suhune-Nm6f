require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remind huge half problem off genius'; 
let testAccounts = [
"0xd7b26b706ee5bbb51af93e31293c336adf34e3e85509d140c9fc792d94c5f9a1",
"0x5562e96cc1ed0561338633e9b88d115da748289ce7bb8bec26f5c6be9c444a20",
"0x14894a1b4e92e4fb819c565123ea9f380c686248b8e2baa6f3322d65b66ed72e",
"0xe9e8568cbffec23bfaf908a68bf33db3f073fca1fb73d272ac335cfc037a1528",
"0xd3cc9fe7be4a084dcc42371e9a3e415c6db08ee97b4634b4f41c8ab7491a461e",
"0xf426296395a22ffc44cb73c1b6b5732ac1681f301f88fd2698290c2bdb86c5ad",
"0x31f504480e5060cb55bb2eafae0e08d452e8b6025b0d74c01ecd07a457d2bd70",
"0x65894251330a00826e65bee1034c59e4e762e12e5bb8522211982b225cde99be",
"0x52322e2d8ada4e0055b8b9d2331538890563cd1be2d0254cca3af0d6b77dcebf",
"0x6237d178ff041763ac6cfa1b5506a0bf28447e509bfa540db4e88bd443909a2a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

