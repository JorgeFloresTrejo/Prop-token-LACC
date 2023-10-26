// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PropiedadNFT is ERC721, Ownable(){
    uint256 private contadorIDToken;
    mapping(uint256 => bool) private existePropiedad;

    //Estructura de la propiedad
    struct Propiedad {
        address propietario;
        string direccion; 
        string descripcion;
        uint256 precio;
    }

    mapping(uint256 => Propiedad) public propiedades;

    constructor() ERC721("NFT de Propiedad", "NFTP") {
        contadorIDToken = 0;
    }

    //Función para crear propiedad
    function crearPropiedad(string memory _descripcion, string memory _direccion, uint256 _precio) external  {
        contadorIDToken += 1;
        uint256 IDToken = contadorIDToken;
        _mint(msg.sender, IDToken);

        propiedades[IDToken] = Propiedad({
            propietario: msg.sender,
            descripcion: _descripcion,
             direccion: _direccion, 
            precio: _precio
        });

        existePropiedad[IDToken] = true;
    }

    //Función para actualizar la propiedad
    function actualizarPropiedad(uint256 _IDToken, string memory _descripcion, string memory _direccion, uint256 _precio) external onlyOwner {
        require(existePropiedad[_IDToken], "El token no existe");
        require(ownerOf(_IDToken) == msg.sender, "Solo el propietario puede actualizar la propiedad");

        Propiedad storage propiedad = propiedades[_IDToken];
        propiedad.descripcion = _descripcion;
        propiedad.direccion = _direccion;
        propiedad.precio = _precio;
    }

    //Función para obtener detalles de la propiedad
    function obtenerDetallesDePropiedad(uint256 _IDToken) external view returns (address, string memory, string memory, uint256) {
        require(existePropiedad[_IDToken], "El token no existe");

        Propiedad storage propiedad = propiedades[_IDToken];
        return (propiedad.propietario, propiedad.descripcion, propiedad.direccion, propiedad.precio);
    }
}
