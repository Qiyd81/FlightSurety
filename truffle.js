var HDWalletProvider = require("truffle-hdwallet-provider");
// var mnemonic = "still ramp loyal admit cool debate notable mosquito pulse need nation acid";
var mnemonic = "enact gym uncle motion dutch deliver enrich luxury occur spray funny blossom";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:9545/", 0, 50);
      },
      network_id: '*',
      gas: 9
    }
  },
  compilers: {
    solc: {
      version: "^0.5.16"
    }
  }
};