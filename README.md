# BSC NFT on testnet

## Add BSC testnet to metamask
ChainId ```97```
RPC ```https://data-seed-prebsc-1-s1.binance.org:8545/```

Go to ```https://testnet.binance.org/faucet-smart``` to get 1 test BNB

## Openzeppelin-NFT + Truffle
```
$ mkdir bsc-nft && cd bsc-nft
$ npm init -y
$ npm i --save-dev @openzeppelin/contracts
$ npm i truffle
npx truffle init
```
Copy the contract preset
```
$ mkdir -p build/contracts/
$ cp node_modules/@openzeppelin/contracts/build/contracts/* build/contracts/
```
Create 2_deploy.js and modify truffle-config.js (see file to copy)

!WARNING!
Create a new .secret file in root directory and enter your 12 word mnemonic seed phrase to get started.
Don't share your mnemonic!!!
