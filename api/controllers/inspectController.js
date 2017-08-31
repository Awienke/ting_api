'use strict';


exports.getTingInfo = function(req, res) {

var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://cypethco6.westeurope.cloudapp.azure.com:8545"));

			var ABIArray = require('./koalaMainABI.json');
/*			var ABIArray = [{
				"constant": false,
				"inputs": [{
					"name": "_tId",
					"type": "bytes32"
				}],
				"name": "getTing",
				"outputs": [],
				"payable": false,
				"type": "function"
			}, {
				"constant": false,
				"inputs": [{
					"name": "tingDescription",
					"type": "string"
				}, {
					"name": "_customData",
					"type": "string"
				}],
				"name": "newTing",
				"outputs": [],
				"payable": true,
				"type": "function"
			}, {
				"constant": true,
				"inputs": [],
				"name": "numTings",
				"outputs": [{
					"name": "",
					"type": "uint256"
				}],
				"payable": false,
				"type": "function"
			}, {
				"constant": true,
				"inputs": [{
					"name": "",
					"type": "bytes32"
				}],
				"name": "tings",
				"outputs": [{
					"name": "tingId",
					"type": "bytes32"
				}, {
					"name": "currentOwner",
					"type": "address"
				}, {
					"name": "creator",
					"type": "address"
				}, {
					"name": "description",
					"type": "string"
				}, {
					"name": "customData",
					"type": "string"
				}, {
					"name": "creationTime",
					"type": "uint256"
				}],
				"payable": false,
				"type": "function"
			}, {
				"constant": false,
				"inputs": [{
					"name": "_tId",
					"type": "bytes32"
				}, {
					"name": "newOwner",
					"type": "address"
				}],
				"name": "transferTing",
				"outputs": [],
				"payable": false,
				"type": "function"
			}, {
				"inputs": [],
				"payable": true,
				"type": "constructor"
			}, {
				"payable": true,
				"type": "fallback"
			}, {
				"anonymous": false,
				"inputs": [{
					"indexed": false,
					"name": "tingID",
					"type": "bytes32"
				}, {
					"indexed": false,
					"name": "creator",
					"type": "address"
				}, {
					"indexed": false,
					"name": "time",
					"type": "uint256"
				}, {
					"indexed": false,
					"name": "description",
					"type": "string"
				}],
				"name": "TingAdded",
				"type": "event"
			}, {
				"anonymous": false,
				"inputs": [{
					"indexed": false,
					"name": "tingId",
					"type": "bytes32"
				}, {
					"indexed": false,
					"name": "currentOwner",
					"type": "address"
				}, {
					"indexed": false,
					"name": "creator",
					"type": "address"
				}, {
					"indexed": false,
					"name": "description",
					"type": "string"
				}, {
					"indexed": false,
					"name": "customData",
					"type": "string"
				}, {
					"indexed": false,
					"name": "creationTime",
					"type": "uint256"
				}],
				"name": "TingFound",
				"type": "event"
			}, {
				"anonymous": false,
				"inputs": [{
					"indexed": false,
					"name": "tingID",
					"type": "bytes32"
				}, {
					"indexed": false,
					"name": "newOwner",
					"type": "address"
				}],
				"name": "TingTransferred",
				"type": "event"
			}];*/
			var iptContractAddress = "0x2dfa99b636a8cbbf1c2816ce075fcf9e7c20070d";
			var cyphaAddress = "0xdD21eC1b190f9AEbd2CE508b7d50F9b2577573Fa";
			web3.eth.defaultAccount = cyphaAddress;
			var iptContract = web3.eth.contract(ABIArray);
			var iptContractInstance = iptContract.at(iptContractAddress);
			
			var tingId = req.params.tingId;
			var ting = iptContractInstance.tings(tingId);
			var ting_json = {
			    tId: ting[0],
			    owner: ting[1],
			    creator: ting[2],
			    description: ting[3],
			    customData: ting[4],
			    creationTime: JSON.parse(ting[5])
			}

			res.json(ting_json);
};