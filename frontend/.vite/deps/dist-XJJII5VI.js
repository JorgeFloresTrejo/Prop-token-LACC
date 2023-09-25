import {
  ne,
  p,
  se,
  y
} from "./chunk-TSMIGI7S.js";
import "./chunk-ZKD3A47W.js";
import "./chunk-W7S2ME4R.js";

// node_modules/@walletconnect/modal/dist/index.js
var d = class {
  constructor(e) {
    this.openModal = se.open, this.closeModal = se.close, this.subscribeModal = se.subscribe, this.setTheme = ne.setThemeConfig, ne.setThemeConfig(e), y.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./dist-F3BFUVM3.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), p.setIsUiLoaded(true);
    }
  }
};
export {
  d as WalletConnectModal
};
//# sourceMappingURL=dist-XJJII5VI.js.map
