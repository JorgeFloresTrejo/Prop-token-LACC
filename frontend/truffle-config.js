/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// require('dotenv').config();
// const mnemonic = process.env["MNEMONIC"];
// const infuraProjectId = process.env["INFURA_PROJECT_ID"];
 
const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = ["ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f"];

module.exports = {


  networks: {
 
    development: {
     host: "127.0.0.1",     
     port: 7545,            
     network_id: "*",    
    },
    test: {
      host: "127.0.0.1",     
      port: 8545,            
      network_id: "*",    
     },
    lacchain: {
      provider: () => {
        return new HDWalletProvider(privateKeys,"http://127.0.0.1:8545")
      },
      network_id: "5494202210",      
     },
    //
    // goerli: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraProjectId}`),
    //   network_id: 5,       // Goerli's id
    //   chain_id: 5
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19",      // Fetch exact version from solc-bin
    }
  }
};
