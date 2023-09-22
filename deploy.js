const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { abi, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'crystal sand derive absent just art question ticket autumn company add document',
  // remember to change this to your own phrase!
  'https://sepolia.infura.io/v3/6ef223538dd746fbaed0b93915ba4289'
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(abi))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });
  console.log(interface);
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
