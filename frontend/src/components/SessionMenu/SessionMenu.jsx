import React, { useState } from "react";
import "./SessionMenu.css";
import Loga from "../../images/logo1.png";
import WalletConnect from "../WalletConnect/WalletConnect";
import Web3 from "web3";

const SessionMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [Metamask, setMetamask] = useState(false);
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(null);
  const [walletDetallesVisible, setWalletDestallesVisible] = useState(false);
  //Metamask
  const conectarWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3Instance = new Web3(window.ethereum);
      //     /**----------------------------------------- */
      try {
        await window.ethereum.enable();
        //obteniendo la cuenta
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
        //obtener el saldo de la cuenta
        const balanceWei = await web3Instance.eth.getBalance(accounts[0]);
        const balanceEth = web3Instance.utils.fromWei(balanceWei, "ether");
        setBalance(balanceEth);
      } catch (e) {
        console.log("error: ", e);
      }
    } else {
      setMetamask(false);
    }
  };
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  //Mostrar detalles de la cuenta
  const walletDetalles = () => {
    setWalletDestallesVisible(!walletDetallesVisible);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="primer-div">
            <div className="loga">
              <img src={Loga} alt="logo" />
              <h3>
                <span>Inversion</span> Inmobiliaria
              </h3>
            </div>
            <div className="connection-wallet">
              <div className="connect-wallet">
                <WalletConnect />
              </div>
              <button onClick={conectarWallet} className="metamask-connect">
                <i>
                  {account
                    ? account.slice(0, 5) +
                      "..." +
                      account.slice(account.length - 4, account.length)
                    : "Metamask"}
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mostrar-botones-contenido">
        <div className="botones">
          <div className="segundo-div">
            <div className="desplegable">
              <button className="menu-button"> Crear Token</button>
              <button className="menu-button">Inmuebles</button>
              <button className="menu-button">Wallets</button>
              <button className="menu-button">Mis activos</button>
              <button className="menu-button">configuracion</button>
              <button className="menu-button">Cerrar Session</button>
            </div>
          </div>
          <div className="tercer-div"></div>
        </div>
      </div>
    </div>
  );
};

export default SessionMenu;
