import React from "react";
import {Ripple, initTE} from "tw-elements";

import { useEffect } from "react";
import { Link } from "react-router-dom";



function Mainkyc(){

    useEffect(() => {
        // Inicializar la biblioteca "tw-elements"
        initTE({Ripple });
      }, []);

   
   
    return(
        <div className="h-20 mt-24">
            <nav
                class="relative flex w-full items-center justify-between bg-neutral-50 py-2 text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-300 dark:shadow-black/5 lg:flex-wrap lg:justify-start"
                data-te-navbar-ref>
                <div class="px-6">
                    
                    <div
                        class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContentZ"
                        data-te-collapse-item>
                        <ul class="mr-auto flex flex-row" data-te-navbar-nav-ref>
                            <li data-te-nav-item-ref>
                                <Link to = "/inicio-kyc">
                                <a
                                    class="block py-2 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                                    href="#!"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >Iniciar KYC</a
                                >
                                </Link>
                                
                            </li>
                            
                        </ul>
                        <ul class="mr-auto flex flex-row" data-te-navbar-nav-ref>
                            <li data-te-nav-item-ref>
                                <Link to = "#">
                                <a
                                    class="block py-2 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
                                    href="#!"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                >Configuración de usuario</a
                                >
                                </Link>
                                
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
    
        </div>    
            
        
    )
};

export default Mainkyc;