var TradCoin = artifacts.require("./contracts/TradCoin.sol");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(TradCoin, "0x872a65109B9720D55871D743ebf21eB292B7A450");
  };
