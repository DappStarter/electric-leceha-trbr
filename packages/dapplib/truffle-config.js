require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remember million gloom clip blue gasp'; 
let testAccounts = [
"0x4770e1845c186b66425802d79c4abb1f93248b2596aa81b7663589a931b1ab61",
"0x7aa5fdbde17ac93e22997303e8b0ba24d6244f743d2cb8cf218fd455a64cfbbe",
"0x7ca3ce7ede23c90c2a143a92ced87790f72d17d9fabd3b648c96b1f587d9bde4",
"0x96455fbc30965d9c898463bcc7547fa5015e10239dc6184e063dd8f6f5b785ee",
"0x575ea6571eb7cc6194569f2083dce42d6eef57874dde34896e41f6e8239da0ce",
"0xb3f5a340bf59b01a7f9a1668a404f857b80fbd7e63dea50596e12c60658745bc",
"0xcadeb5b130b4c340d71fe17bfadfe3532e1fc5dbf6f0153f54acbcd3232c3950",
"0x7e9285244f389b7a1f519d240c4a31346c6b9a16e6294d63f9d139e8ba1154b4",
"0x550590b544bef423ebb2cca0627cf0d27cfb64b216bd476fce087b3d30e116a8",
"0xf890466981ff9d13d79f5f813b7744fff73ce45e0d78bee9825782a0b7f92843"
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

