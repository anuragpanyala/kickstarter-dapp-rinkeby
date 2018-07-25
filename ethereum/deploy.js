// Code for Windows

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

// For testing deployment on ganache:
// const ganache = require('ganache-cli');
// const provider = ganache.provider();


const provider = new HDWalletProvider(
  'farm angle slab end degree next pig visual high occur tourist spawn',
  'rinkeby.infura.io/p7MT1Rnxz3M9sfi21lZn'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
