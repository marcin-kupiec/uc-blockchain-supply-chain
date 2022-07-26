const fs = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');

const infuraKey = fs.readFileSync(".secretInfuraKey").toString().trim();
const mnemonic = fs.readFileSync(".secretMnemonic").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Rinkeby's id
      gas: 4500000,       // Rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
      // confirmations: 1,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: false     // Skip dry run before migrations? (default: false for public nets )
    },
  }
};