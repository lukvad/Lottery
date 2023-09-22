const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const address = '0xae67a2B25033A21909E5ef21c2eE4a0EF8b3604c';
const abi = [
	{
		"inputs": [],
		"name": "enter",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pickWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getPlayers",
		"outputs": [
			{
				"internalType": "address payable[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "manager",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "players",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const provider = new HDWalletProvider(
  'crystal sand derive absent just art question ticket autumn company add document',
  // remember to change this to your own phrase!
  'https://sepolia.infura.io/v3/6ef223538dd746fbaed0b93915ba4289'
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);
// updated imports added for convenience


const send = async () => {
  const accounts = await web3.eth.getAccounts();
  const lottery = await new web3.eth.Contract(abi,address);
  const result = await lottery.methods.enter().send({from : accounts[0], value: 200, gas: 1000000});  
  console.log(result);
  provider.engine.stop();
};
send();
