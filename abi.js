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
				"type": "text"
			},
			{
				"name": "paramCidade",
				"type": "text"
			},
			{
				"name": "paramEstado",
				"type": "text"
			},
			{
				"name": "paramMetragem",
				"type": "uint256"
			},
			{
				"name": "paramCaracteristicas",
				"type": "text"
			},
			{
				"name": "paramNomeProprietario",
				"type": "string"
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
		"name": "devolveNomeProprietario",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
];

if (network === "4") {
    contractAddress = "0xcdebe79015105858f0917bed19dc25e9bdebc6b2"; 
} else {
    contractAddress = "0xcdebe79015105858f0917bed19dc25e9bdebc6b2"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
