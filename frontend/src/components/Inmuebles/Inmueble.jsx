import React, { useEffect, useState } from 'react';
import "./Inmueble.css";
import PropiedadNFT from "../../../build/contracts/PropiedadNFT.json";
import Marketplace from "../../../build/contracts/Marketplace.json";
import Web3 from "web3";

const Inmueble = () => {
  const [properties, setProperties] = useState([]);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [marketplaceContract, setMarketplaceContract] = useState(null);

  useEffect(() => {
    // Inicializa Web3 y conecta con la red de LACChain
    async function initWeb3() {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          // Cargar contrato Marketplace
          const networkId = await web3.eth.net.getId();
          const marketplaceContractData = Marketplace.networks[networkId];

          if (marketplaceContractData) {
            const marketplace = new web3.eth.Contract(Marketplace.abi, marketplaceContractData.address);
            setMarketplaceContract(marketplace);
          } else {
            console.error("Contrato Marketplace no encontrado en esta red.");
          }

          setWeb3(web3);
          setAccounts(accounts);
        } catch (error) {
          console.error("El usuario rechazó la solicitud de acceso a la cuenta o hubo un error:", error);
        }
      }
    }

    initWeb3();
  }, []);

  useEffect(() => {
    // Cargar propiedades desde el contrato Marketplace
    async function loadProperties() {
      if (web3 && marketplaceContract) {
        const propertyIds = await marketplaceContract.methods.getAllProperties().call();
        const propertiesData = await Promise.all(
          propertyIds.map(async (propertyId) => {
            const property = new web3.eth.Contract(PropiedadNFT.abi, propertyId);
            const ubicacion = await property.methods.ubicacion().call();
            const precio = await property.methods.precio().call();
            const imagen = await property.methods.imagen().call();

            return { ubicacion, precio, imagen };
          })
        );
        setProperties(propertiesData);
      }
    }

    loadProperties();
  }, [web3, marketplaceContract]);

  return (
    <div className="todo">
      <div className="container-inmuebles">
        {properties.map((property, index) => (
          <div key={index}>
            <img src={property.imagen} alt="" />
            <div className="inmueble_principal">
              <h4>{property.ubicacion}</h4>
              <p>{property.precio} $</p>
            </div>
            {/* Mas información del inmueble */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inmueble;
