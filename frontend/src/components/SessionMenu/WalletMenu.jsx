import React from "react";
import walletmenu from "../../images/walletmenu.png";


function WalletMenu(){
    return(
        <div className="flex items-center justify-center ">
            <div className="px-9 pt-10 pb-14 flex flex-col gap-y-8 bg-blue-300 text-white rounded-xl shadow-lg shadow-blue-900 max-w-[510px] max-h-[468px] mt-20 mb-10">
               
                <div>
                    <p className="text-black font-sans text-center mt-5">
                        Necesitamos conectar tu wallet para que puedas invertir junto a la comunidad lider, ¿Empezamos?
                    </p>
                </div>
                <div className="flex justify-center">
                    <img width="32" height="32" src={walletmenu} alt="walletmenu" />
                </div>
            </div>
        </div>
    )
};

export default WalletMenu;