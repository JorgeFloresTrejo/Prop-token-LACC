const PropiedadNFT = artifacts.require("PropiedadNFT");
const Marketplace = artifacts.require("Marketplace");

module.exports =async function (deployer, network, accounts) {
  
  //Despliegue del PropiedadNFT
  await deployer.deploy(PropiedadNFT)
  const propiedadNFT = await PropiedadNFT.deployed()

  //Despliegue de la Marketplace, recibiendo el PropiedadNFT
  await deployer.deploy(Marketplace, propiedadNFT.address)
  const marketplace = await Marketplace.deployed()

  
};