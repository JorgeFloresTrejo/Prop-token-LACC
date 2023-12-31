import {
  Connector,
  InjectedConnector,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  connect,
  createWalletClient,
  custom,
  disconnect,
  fetchBalance,
  fetchEnsAvatar,
  fetchEnsName,
  getAccount,
  getNetwork,
  switchNetwork,
  watchAccount,
  watchNetwork
} from "./chunk-I5QNE62M.js";
import "./chunk-ZJFNPFZ5.js";
import {
  SwitchChainError,
  UserRejectedRequestError,
  getAddress
} from "./chunk-CS2Z27NR.js";
import {
  numberToHex
} from "./chunk-VE5OM65L.js";
import "./chunk-5W2CEEWB.js";
import "./chunk-ABLC2WDW.js";
import {
  se
} from "./chunk-EEVG2WDH.js";
import "./chunk-WNTIHYJ3.js";
import "./chunk-W7S2ME4R.js";

// node_modules/@wagmi/connectors/dist/walletConnect.js
var NAMESPACE = "eip155";
var STORE_KEY = "store";
var REQUESTED_CHAINS_KEY = "requestedChains";
var ADD_ETH_CHAIN_METHOD = "wallet_addEthereumChain";
var _provider;
var _initProviderPromise;
var _createProvider;
var createProvider_fn;
var _initProvider;
var initProvider_fn;
var _isChainsStale;
var isChainsStale_fn;
var _setupListeners;
var setupListeners_fn;
var _removeListeners;
var removeListeners_fn;
var _setRequestedChainsIds;
var setRequestedChainsIds_fn;
var _getRequestedChainsIds;
var getRequestedChainsIds_fn;
var _getNamespaceChainsIds;
var getNamespaceChainsIds_fn;
var _getNamespaceMethods;
var getNamespaceMethods_fn;
var WalletConnectConnector = class extends Connector {
  constructor(config) {
    super({
      ...config,
      options: { isNewChainsStale: true, ...config.options }
    });
    __privateAdd(this, _createProvider);
    __privateAdd(this, _initProvider);
    __privateAdd(this, _isChainsStale);
    __privateAdd(this, _setupListeners);
    __privateAdd(this, _removeListeners);
    __privateAdd(this, _setRequestedChainsIds);
    __privateAdd(this, _getRequestedChainsIds);
    __privateAdd(this, _getNamespaceChainsIds);
    __privateAdd(this, _getNamespaceMethods);
    this.id = "walletConnect";
    this.name = "WalletConnect";
    this.ready = true;
    __privateAdd(this, _provider, void 0);
    __privateAdd(this, _initProviderPromise, void 0);
    this.onAccountsChanged = (accounts) => {
      if (accounts.length === 0)
        this.emit("disconnect");
      else
        this.emit("change", { account: getAddress(accounts[0]) });
    };
    this.onChainChanged = (chainId) => {
      const id = Number(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", { chain: { id, unsupported } });
    };
    this.onDisconnect = () => {
      __privateMethod(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, []);
      this.emit("disconnect");
    };
    this.onDisplayUri = (uri) => {
      this.emit("message", { type: "display_uri", data: uri });
    };
    this.onConnect = () => {
      this.emit("connect", {});
    };
    __privateMethod(this, _createProvider, createProvider_fn).call(this);
  }
  async connect({ chainId, pairingTopic } = {}) {
    var _a, _b, _c, _d, _e;
    try {
      let targetChainId = chainId;
      if (!targetChainId) {
        const store = (_a = this.storage) == null ? void 0 : _a.getItem(STORE_KEY);
        const lastUsedChainId = (_d = (_c = (_b = store == null ? void 0 : store.state) == null ? void 0 : _b.data) == null ? void 0 : _c.chain) == null ? void 0 : _d.id;
        if (lastUsedChainId && !this.isChainUnsupported(lastUsedChainId))
          targetChainId = lastUsedChainId;
        else
          targetChainId = (_e = this.chains[0]) == null ? void 0 : _e.id;
      }
      if (!targetChainId)
        throw new Error("No chains found on connector.");
      const provider = await this.getProvider();
      __privateMethod(this, _setupListeners, setupListeners_fn).call(this);
      const isChainsStale = __privateMethod(this, _isChainsStale, isChainsStale_fn).call(this);
      if (provider.session && isChainsStale)
        await provider.disconnect();
      if (!provider.session || isChainsStale) {
        const optionalChains = this.chains.filter((chain) => chain.id !== targetChainId).map((optionalChain) => optionalChain.id);
        this.emit("message", { type: "connecting" });
        await provider.connect({
          pairingTopic,
          chains: [targetChainId],
          optionalChains: optionalChains.length ? optionalChains : void 0
        });
        __privateMethod(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, this.chains.map(({ id: id2 }) => id2));
      }
      const accounts = await provider.enable();
      const account = getAddress(accounts[0]);
      const id = await this.getChainId();
      const unsupported = this.isChainUnsupported(id);
      return {
        account,
        chain: { id, unsupported }
      };
    } catch (error) {
      if (/user rejected/i.test(error == null ? void 0 : error.message)) {
        throw new UserRejectedRequestError(error);
      }
      throw error;
    }
  }
  async disconnect() {
    const provider = await this.getProvider();
    try {
      await provider.disconnect();
    } catch (error) {
      if (!/No matching key/i.test(error.message))
        throw error;
    } finally {
      __privateMethod(this, _removeListeners, removeListeners_fn).call(this);
      __privateMethod(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, []);
    }
  }
  async getAccount() {
    const { accounts } = await this.getProvider();
    return getAddress(accounts[0]);
  }
  async getChainId() {
    const { chainId } = await this.getProvider();
    return chainId;
  }
  async getProvider({ chainId } = {}) {
    if (!__privateGet(this, _provider))
      await __privateMethod(this, _createProvider, createProvider_fn).call(this);
    if (chainId)
      await this.switchChain(chainId);
    return __privateGet(this, _provider);
  }
  async getWalletClient({
    chainId
  } = {}) {
    const [provider, account] = await Promise.all([
      this.getProvider({ chainId }),
      this.getAccount()
    ]);
    const chain = this.chains.find((x) => x.id === chainId);
    if (!provider)
      throw new Error("provider is required.");
    return createWalletClient({
      account,
      chain,
      transport: custom(provider)
    });
  }
  async isAuthorized() {
    try {
      const [account, provider] = await Promise.all([
        this.getAccount(),
        this.getProvider()
      ]);
      const isChainsStale = __privateMethod(this, _isChainsStale, isChainsStale_fn).call(this);
      if (!account)
        return false;
      if (isChainsStale && provider.session) {
        try {
          await provider.disconnect();
        } catch {
        }
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    var _a, _b;
    const chain = this.chains.find((chain2) => chain2.id === chainId);
    if (!chain)
      throw new SwitchChainError(new Error("chain not found on connector."));
    try {
      const provider = await this.getProvider();
      const namespaceChains = __privateMethod(this, _getNamespaceChainsIds, getNamespaceChainsIds_fn).call(this);
      const namespaceMethods = __privateMethod(this, _getNamespaceMethods, getNamespaceMethods_fn).call(this);
      const isChainApproved = namespaceChains.includes(chainId);
      if (!isChainApproved && namespaceMethods.includes(ADD_ETH_CHAIN_METHOD)) {
        await provider.request({
          method: ADD_ETH_CHAIN_METHOD,
          params: [
            {
              chainId: numberToHex(chain.id),
              blockExplorerUrls: [(_b = (_a = chain.blockExplorers) == null ? void 0 : _a.default) == null ? void 0 : _b.url],
              chainName: chain.name,
              nativeCurrency: chain.nativeCurrency,
              rpcUrls: [...chain.rpcUrls.default.http]
            }
          ]
        });
        const requestedChains = __privateMethod(this, _getRequestedChainsIds, getRequestedChainsIds_fn).call(this);
        requestedChains.push(chainId);
        __privateMethod(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, requestedChains);
      }
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: numberToHex(chainId) }]
      });
      return chain;
    } catch (error) {
      const message = typeof error === "string" ? error : error == null ? void 0 : error.message;
      if (/user rejected request/i.test(message)) {
        throw new UserRejectedRequestError(error);
      }
      throw new SwitchChainError(error);
    }
  }
};
_provider = /* @__PURE__ */ new WeakMap();
_initProviderPromise = /* @__PURE__ */ new WeakMap();
_createProvider = /* @__PURE__ */ new WeakSet();
createProvider_fn = async function() {
  if (!__privateGet(this, _initProviderPromise) && typeof window !== "undefined") {
    __privateSet(this, _initProviderPromise, __privateMethod(this, _initProvider, initProvider_fn).call(this));
  }
  return __privateGet(this, _initProviderPromise);
};
_initProvider = /* @__PURE__ */ new WeakSet();
initProvider_fn = async function() {
  const { EthereumProvider, OPTIONAL_EVENTS, OPTIONAL_METHODS } = await import("./index.es-E6UK33MU.js");
  const [defaultChain, ...optionalChains] = this.chains.map(({ id }) => id);
  if (defaultChain) {
    const {
      projectId,
      showQrModal = true,
      qrModalOptions,
      metadata,
      relayUrl
    } = this.options;
    __privateSet(this, _provider, await EthereumProvider.init({
      showQrModal,
      qrModalOptions,
      projectId,
      optionalMethods: OPTIONAL_METHODS,
      optionalEvents: OPTIONAL_EVENTS,
      chains: [defaultChain],
      optionalChains: optionalChains.length ? optionalChains : void 0,
      rpcMap: Object.fromEntries(
        this.chains.map((chain) => [
          chain.id,
          chain.rpcUrls.default.http[0]
        ])
      ),
      metadata,
      relayUrl
    }));
  }
};
_isChainsStale = /* @__PURE__ */ new WeakSet();
isChainsStale_fn = function() {
  const namespaceMethods = __privateMethod(this, _getNamespaceMethods, getNamespaceMethods_fn).call(this);
  if (namespaceMethods.includes(ADD_ETH_CHAIN_METHOD))
    return false;
  if (!this.options.isNewChainsStale)
    return false;
  const requestedChains = __privateMethod(this, _getRequestedChainsIds, getRequestedChainsIds_fn).call(this);
  const connectorChains = this.chains.map(({ id }) => id);
  const namespaceChains = __privateMethod(this, _getNamespaceChainsIds, getNamespaceChainsIds_fn).call(this);
  if (namespaceChains.length && !namespaceChains.some((id) => connectorChains.includes(id)))
    return false;
  return !connectorChains.every((id) => requestedChains.includes(id));
};
_setupListeners = /* @__PURE__ */ new WeakSet();
setupListeners_fn = function() {
  if (!__privateGet(this, _provider))
    return;
  __privateMethod(this, _removeListeners, removeListeners_fn).call(this);
  __privateGet(this, _provider).on("accountsChanged", this.onAccountsChanged);
  __privateGet(this, _provider).on("chainChanged", this.onChainChanged);
  __privateGet(this, _provider).on("disconnect", this.onDisconnect);
  __privateGet(this, _provider).on("session_delete", this.onDisconnect);
  __privateGet(this, _provider).on("display_uri", this.onDisplayUri);
  __privateGet(this, _provider).on("connect", this.onConnect);
};
_removeListeners = /* @__PURE__ */ new WeakSet();
removeListeners_fn = function() {
  if (!__privateGet(this, _provider))
    return;
  __privateGet(this, _provider).removeListener("accountsChanged", this.onAccountsChanged);
  __privateGet(this, _provider).removeListener("chainChanged", this.onChainChanged);
  __privateGet(this, _provider).removeListener("disconnect", this.onDisconnect);
  __privateGet(this, _provider).removeListener("session_delete", this.onDisconnect);
  __privateGet(this, _provider).removeListener("display_uri", this.onDisplayUri);
  __privateGet(this, _provider).removeListener("connect", this.onConnect);
};
_setRequestedChainsIds = /* @__PURE__ */ new WeakSet();
setRequestedChainsIds_fn = function(chains) {
  var _a;
  (_a = this.storage) == null ? void 0 : _a.setItem(REQUESTED_CHAINS_KEY, chains);
};
_getRequestedChainsIds = /* @__PURE__ */ new WeakSet();
getRequestedChainsIds_fn = function() {
  var _a;
  return ((_a = this.storage) == null ? void 0 : _a.getItem(REQUESTED_CHAINS_KEY)) ?? [];
};
_getNamespaceChainsIds = /* @__PURE__ */ new WeakSet();
getNamespaceChainsIds_fn = function() {
  var _a, _b, _c;
  if (!__privateGet(this, _provider))
    return [];
  const namespaces = (_a = __privateGet(this, _provider).session) == null ? void 0 : _a.namespaces;
  if (!namespaces)
    return [];
  const normalizedNamespaces = se(namespaces);
  const chainIds = (_c = (_b = normalizedNamespaces[NAMESPACE]) == null ? void 0 : _b.chains) == null ? void 0 : _c.map(
    (chain) => parseInt(chain.split(":")[1] || "")
  );
  return chainIds ?? [];
};
_getNamespaceMethods = /* @__PURE__ */ new WeakSet();
getNamespaceMethods_fn = function() {
  var _a, _b;
  if (!__privateGet(this, _provider))
    return [];
  const namespaces = (_a = __privateGet(this, _provider).session) == null ? void 0 : _a.namespaces;
  if (!namespaces)
    return [];
  const normalizedNamespaces = se(namespaces);
  const methods = (_b = normalizedNamespaces[NAMESPACE]) == null ? void 0 : _b.methods;
  return methods ?? [];
};

// node_modules/@wagmi/core/dist/providers/jsonRpc.js
function jsonRpcProvider({
  rpc
}) {
  return function(chain) {
    const rpcConfig = rpc(chain);
    if (!rpcConfig || rpcConfig.http === "")
      return null;
    return {
      chain: {
        ...chain,
        rpcUrls: {
          ...chain.rpcUrls,
          default: { http: [rpcConfig.http] }
        }
      },
      rpcUrls: {
        http: [rpcConfig.http],
        webSocket: rpcConfig.webSocket ? [rpcConfig.webSocket] : void 0
      }
    };
  };
}

// node_modules/@web3modal/ethereum/dist/index.js
var A = "wallet_addEthereumChain";
var j = class {
  constructor(t, e) {
    this.wagmi = {}, this.chains = [], this.namespace = "eip155", this.disconnect = disconnect, this.getAccount = getAccount, this.watchAccount = watchAccount, this.fetchBalance = fetchBalance, this.getNetwork = getNetwork, this.watchNetwork = watchNetwork, this.switchNetwork = switchNetwork, this.fetchEnsName = fetchEnsName, this.fetchEnsAvatar = fetchEnsAvatar, this.wagmi = t, this.chains = e;
  }
  getWalletConnectConnector() {
    const t = this.wagmi.connectors.find((e) => e.id === "walletConnect");
    if (!t)
      throw new Error("WalletConnectConnector is required");
    return t;
  }
  async connectWalletConnectProvider(t, e) {
    return await t.getProvider(), new Promise((n) => {
      t.once("message", (o) => {
        o.type === "display_uri" && (e(o.data), n());
      });
    });
  }
  getConnectorById(t) {
    const e = this.wagmi.connectors.find((n) => n.id === t);
    if (!e)
      throw new Error(`Connector for id ${t} was not found`);
    return e;
  }
  getConnectors() {
    return this.wagmi.connectors.filter((t) => !t.id.includes("walletConnect"));
  }
  async connectWalletConnect(t, e) {
    const n = this.getWalletConnectConnector(), o = { connector: n };
    return e && (o.chainId = e), Promise.all([connect(o), this.connectWalletConnectProvider(n, t)]);
  }
  async connectConnector(t, e) {
    const n = { connector: this.getConnectorById(t) };
    return e && (n.chainId = e), await connect(n);
  }
  isInjectedProviderInstalled() {
    return typeof window.ethereum < "u";
  }
  safeCheckInjectedProvider(t) {
    var e;
    try {
      const n = String(t);
      return Boolean((e = window.ethereum) == null ? void 0 : e[n]);
    } catch (n) {
      return console.error(n), false;
    }
  }
  async getConnectedChainIds() {
    var t, e, n;
    const o = (e = (t = (await this.getWalletConnectConnector().getProvider()).signer) == null ? void 0 : t.session) == null ? void 0 : e.namespaces, s = (n = o == null ? void 0 : o[this.namespace]) == null ? void 0 : n.methods;
    if (s != null && s.includes(A))
      return "ALL";
    if (o) {
      const i = [];
      return Object.keys(o).forEach((r) => {
        r.includes(this.namespace) && i.push(...o[r].accounts);
      }), i == null ? void 0 : i.map((r) => r.split(":")[1]);
    }
    return "ALL";
  }
};
var P = "eip155";
var y = "https://rpc.walletconnect.com";
function W({ projectId: c }) {
  return jsonRpcProvider({ rpc: (t) => {
    var e;
    return [1, 3, 4, 5, 10, 42, 56, 69, 97, 100, 137, 280, 324, 420, 42161, 42220, 43114, 80001, 421611, 421613, 1313161554, 1313161555].includes(t.id) ? { http: `${y}/v1/?chainId=${P}:${t.id}&projectId=${c}` } : { http: t.rpcUrls.default.http[0], webSocket: (e = t.rpcUrls.default.webSocket) == null ? void 0 : e[0] };
  } });
}
function B({ chains: c, projectId: t }) {
  return [new WalletConnectConnector({ chains: c, options: { projectId: t, showQrModal: false } }), new InjectedConnector({ chains: c, options: { shimDisconnect: true } })];
}
export {
  j as EthereumClient,
  B as w3mConnectors,
  W as w3mProvider
};
//# sourceMappingURL=@web3modal_ethereum.js.map
