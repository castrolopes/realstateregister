/* This is for example purposes */
const contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "paramEndereco",
				"type": "address"
			},
			{
				"name": "paramEnderecoRua",
				"type": "string"
			},
			{
				"name": "paramCidade",
				"type": "string"
			},
			{
				"name": "paramEstado",
				"type": "string"
			},
			{
				"name": "paramCaracteristicas",
				"type": "string"
			},
			{
				"name": "paramNomeProprietario",
				"type": "string"
			},
			{
				"name": "paramMetragem",
				"type": "uint256"
			},
			{
				"name": "paramValorVenal",
				"type": "uint256"
			}
		],
		"name": "registraImovel",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "matricula",
				"type": "uint256"
			}
		],
		"name": "devolveTudo",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "livro1",
		"outputs": [
			{
				"name": "endereco",
				"type": "address"
			},
			{
				"name": "enderecoRua",
				"type": "string"
			},
			{
				"name": "cidade",
				"type": "string"
			},
			{
				"name": "estado",
				"type": "string"
			},
			{
				"name": "caracteristicas",
				"type": "string"
			},
			{
				"name": "metragem",
				"type": "uint256"
			},
			{
				"name": "nomeProprietario",
				"type": "string"
			},
			{
				"name": "valorVenal",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "livro2",
		"outputs": [
			{
				"name": "endereco",
				"type": "address"
			},
			{
				"name": "enderecoRua",
				"type": "string"
			},
			{
				"name": "cidade",
				"type": "string"
			},
			{
				"name": "estado",
				"type": "string"
			},
			{
				"name": "caracteristicas",
				"type": "string"
			},
			{
				"name": "metragem",
				"type": "uint256"
			},
			{
				"name": "nomeProprietario",
				"type": "string"
			},
			{
				"name": "valorVenal",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
if (network === "4") {
    contractAddress = "0xe9235a7ee4bf9fec80437f4f352d9dff1de6c44d"; 
} else {
    contractAddress = "0xe9235a7ee4bf9fec80437f4f352d9dff1de6c44d"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
