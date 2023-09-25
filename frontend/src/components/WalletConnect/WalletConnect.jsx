//Coneect wallet
import { Web3Button } from "@web3modal/react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

const WalletConnect = () => {
  //Conectando WalletConnect
  const chains = [arbitrum, mainnet, polygon];
  const projectId = "3ac2664116164f8e791268281ac3ec50";

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId: "3ac2664116164f8e791268281ac3ec50" }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({
      projectId: "3ac2664116164f8e791268281ac3ec50",
      chains,
    }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Web3Button />
      </WagmiConfig>
      <Web3Modal
        projectId={"3ac2664116164f8e791268281ac3ec50"}
        ethereumClient={ethereumClient}
      />
    </>
  );
};

export default WalletConnect;
