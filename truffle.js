module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: "9545",
      network_id: "2" // match any network id
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: 2,
      gas: 4700000
    }
  }
};