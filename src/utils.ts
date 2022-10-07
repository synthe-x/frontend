import Web3 from "web3";
import Contract from "web3-eth-contract";
import {useContext} from 'react';

const config = require("../config.json");
let ETH_data = require(`../artifacts/ethereum/localhost.json`)
let TRON_data = require(`../artifacts/tron/localhost.json`);
const TronWeb = require('tronweb')
const tronWeblink = new TronWeb({
    fullHost: 'https://api.trongrid.io/wallet/createtransaction',
    headers: { "TRON-PRO-API-KEY": '25f66928-0b70-48cd-9ac6-da6f8247c663' },
    privateKey: '8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61'
})
export function getContract(name: string, network: string, mock: boolean = false) {
    console.log(network == "tron")
    if(network == "goerli"){
          const abi = ETH_data["sources"][ETH_data["contracts"][name].source];
    const web3 = new Web3(window.ethereum! as any);
    const contractInstance = new web3.eth.Contract(abi, web3.utils.toChecksumAddress(ETH_data["contracts"][name]["address"]));
    console.log("contractInstance",contractInstance)
    return contractInstance;
    }
    else if (network == "tron"){
        const abi = TRON_data["sources"][TRON_data["contracts"][name].source];
        const contractInstance = window.tronWeb.contract(abi,TRON_data["contracts"][name]["address"]);
       console.log("contractInstance",contractInstance)
        return contractInstance
    }
  
}

