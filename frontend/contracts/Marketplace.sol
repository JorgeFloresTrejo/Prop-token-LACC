// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Marketplace is ReentrancyGuard {

    //Variables
    address payable public immutable feeAccount; //Dirección que recibe los pagos de muchos usuarios
    uint public immutable feePercent; //Porcentaje a pagar por crear un token
    uint public itemCount; //Contar cuántos items están creados en nuestra markeplace

    struct Item {
        uint itemId; //Item del token de la inmobilaria
        IERC721 inmobilaria;
        uint tokenId;
        uint precio;
        address payable vendedor;
        bool vendido;
    }

    mapping(uint => Item) public items;

    //Evento para la oferta del token
    event Oferta(
        uint itemId,
        address indexed inmobilaria,
        uint tokenId,
        uint precio,
        address indexed vendedor
        
    );

    //Evento para la realizanción de las compras
    event Compra(
        uint itemId,
        address indexed inmobilaria,
        uint tokenId,
        uint precio,
        address indexed vendedor,
        address indexed comprador
    );


    constructor (uint _feePercent){
        feeAccount = payable(msg.sender); //esta línea de código toma la dirección del quien desplegó el contrato y la almacena en la variable feeAccount después de convertirla en una dirección pagable.
        feePercent = _feePercent;
    }

    function crearToken(IERC721 _inmobilaria, uint _tokenId, uint _precio ) external nonReentrant {
        require(_precio > 0);
        itemCount++;
        _inmobilaria.transferFrom(msg.sender, address(this), _tokenId);
        items[itemCount] = Item(
            itemCount,
            _inmobilaria,
            _tokenId,
            _precio,
            payable(msg.sender), //De pago porque podrá recibir pagos
            false
        );

        //Se emite la oferta en el mercado
        //Recibe el id del item, la dirección del token, el id del token, y la dirección del vendedor
        emit Oferta(itemCount, address(_inmobilaria), _tokenId, _precio, msg.sender);
        
    }

    //Función para realizar las compras
    function comprarToken(uint _itemId) external payable nonReentrant{
        uint _precioTotal = obtenerPrecioTotal(_itemId);
        Item storage item = items[_itemId]; //definimos la variable item y referencia _itemId del mapping
        require(_itemId > 0 && _itemId <= itemCount );
        require(msg.value >= _precioTotal);
        require(!item.vendido); //En este momento tiene que estar en false
        item.vendedor.transfer(item.precio);
        feeAccount.transfer(_precioTotal - item.precio); //al precioTotal se le resta el precio del token y sólo queda el porcentaje de la comisión
        item.vendido = true;
        item.inmobilaria.transferFrom(address(this), msg.sender, item.tokenId);
        //Se emite el evento de compra
        emit Compra(_itemId, address(item.inmobilaria), item.tokenId, item.precio, item.vendedor, msg.sender); 
    }

    //Visualizar de forma pública el precio del token
    function obtenerPrecioTotal(uint _itemId) view public returns (uint){
        return ((items[_itemId].precio*(100 + feePercent))/100);  //((items[_itemId]. precio)) - Para acceder al precio 
    }

}