let tokensContract = "0xd35CCeEAD182dcee0F148EbaC9447DA2c4D449c4";
let stakingContract = "0x2b52917b2dFD87CF47b40819a45654a4945c8022";
let connectedAddress = "";
let chainId = null;
let web3Object = null;
let selectedAccount = null;
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

const ABItoken = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_upgradedAddress", "type": "address" }], "name": "deprecate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "deprecated", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_evilUser", "type": "address" }], "name": "addBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "upgradedAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maximumFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_maker", "type": "address" }], "name": "getBlackListStatus", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowed", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newBasisPoints", "type": "uint256" }, { "name": "newMaxFee", "type": "uint256" }], "name": "setParams", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "issue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "basisPointsRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isBlackListed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_clearedUser", "type": "address" }], "name": "removeBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_blackListedUser", "type": "address" }], "name": "destroyBlackFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_initialSupply", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_decimals", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Issue", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newAddress", "type": "address" }], "name": "Deprecate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "feeBasisPoints", "type": "uint256" }, { "indexed": false, "name": "maxFee", "type": "uint256" }], "name": "Params", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_blackListedUser", "type": "address" }, { "indexed": false, "name": "_balance", "type": "uint256" }], "name": "DestroyedBlackFunds", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "AddedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "RemovedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }]
const ABIContract = [{"inputs":[{"internalType":"address","name":"_tokenContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"stakingId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CapitalWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"stakingId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"InterestWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"stakingId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"StakingCreated","type":"event"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getStakingIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextStakingId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"stakeTime","type":"uint256"},{"internalType":"uint256","name":"lastWithdrawalTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenContract","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakingId","type":"uint256"}],"name":"withdrawCapital","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakingId","type":"uint256"}],"name":"withdrawInterest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]

function changeText(id, text) {
    var div = document.getElementById(id);
    div.innerHTML = text;
    }

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            rpc: {
                5: "https://eth‑goerli.g.alchemy.com/v2/demo",
            },
            chainId: 5,
            network: 'goerli',
            infuraId: "e77435344ef0486893cdc26d7d5cf039",
            pollingInterval: "10000",
        },
    },
    coinbasewallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
          appName: "web3", // Required
          infuraId: "e77435344ef0486893cdc26d7d5cf039", // Required
          rpc: "https://eth‑goerli.g.alchemy.com/v2/demo", // Optional if `infuraId` is provided; otherwise it's required
          chainId: 5, // Optional. It defaults to 1 if not provided
          network: 'goerli',
          darkMode: false // Optional. Use dark theme, defaults to false
        }
      }
  
};

let web3Modal = new Web3Modal({
    providerOptions,
    cacheProvider: false,
    disableInjectedProvider: false,
});

async function connect() {
    try {
        let provider = await web3Modal.connect();
        onProvider(provider);
        provider.on("accountsChanged", (accounts) => {
            web3.eth.defaultCommon = {
                customChain: {name: 'goerli', chainId: 5, networkId: 5}, baseChain: 'mainnet', hardfork: 'petersburg'};           
            console.log(accounts);
            onProvider(provider);
        });
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }
   
}

async function onProvider(provider) {
    web3Object = new Web3(provider);
    let accounts = await web3Object.eth.getAccounts();
    selectedAccount = accounts[0];
    connectedAddress = selectedAccount

    chainName = await web3Object.eth.getChainId();
  	console.log(chainId)
    console.log(selectedAccount)
    if (accounts.length) {
        changeText("connectBtn", "Connected");
    }
    await loadStake(selectedAccount);
}


async function stake(){
    var amount = document.getElementById("amount").value;
    amount = amount * 1000000;
        let tokenInstance = new web3Object.eth.Contract(ABItoken, tokensContract);
        let stakeInstance = new web3Object.eth.Contract(ABIContract, stakingContract);
        
        await tokenInstance.methods.approve(
            stakingContract,
            amount)
            .send({
                from: selectedAccount,
                to: tokensContract
            })
            .on('transactionHash', (hash) => {
                changeText("status", "Approving ...");
                console.log(`Transaction Hash: ${hash}`)
                setTimeout(function() {alert ('Error ... Return to your wallet or browser extension to approve smart contract'); }, 1)
            })
            .on('receipt', (receipt) => {
                console.log(`Transaction Receipt: ${receipt}`)
            })
            .on('error', (error) => {
                console.log(`Error: ${error}`)
            })

        await stakeInstance.methods.stakeTokens(
            amount)
            .send({
                from: selectedAccount,
                to: stakingContract
            })
            .on('transactionHash', (hash) => {
                changeText("status", "Staking ...");
                console.log(`Transaction Hash: ${hash}`)
                setTimeout(function() {alert ('Error ... Return to your wallet or browser extension to approve smart contract'); }, 1)
            })
            .on('receipt', (receipt) => {
                console.log(`Transaction Receipt: ${receipt}`)
            })
            .on('error', (error) => {
                console.log(`Error: ${error}`)
            })
            changeText("status", "Staking completed");
        }

        async function unstake(){
            var amount = document.getElementById("amount").value;
            amount = amount * 1000000;
                let stakeInstance = new web3Object.eth.Contract(ABIContract, stakingContract);
                
                await stakeInstance.methods.withdrawTokens(
                    amount)
                    .send({
                        from: selectedAccount,
                        to: stakingContract
                    })
                    .on('transactionHash', (hash) => {
                        changeText("status", "Unstaking ...");
                        console.log(`Transaction Hash: ${hash}`)
                        setTimeout(function() {alert ('Error ... Return to your wallet or browser extension to approve smart contract'); }, 1)
                    })
                    .on('receipt', (receipt) => {
                        console.log(`Transaction Receipt: ${receipt}`)
                    })
                    .on('error', (error) => {
                        console.log(`Error: ${error}`)
                    })
                    changeText("status", "unstaked ...");
                }
                
    async function loadStake(address){
        let stakeInstance = new web3Object.eth.Contract(ABIContract, stakingContract);
        let stakingIds = contract.methods.getStakingIds(address).call();
        let stakeInfos = [];
        for(let i=0; i < stakingIds.length; i++){
            stakeInfos[i] = contract.methods.stakes(address, stakingIds[i]).call();
        }
        console.log(stakeInfos)
    }