# BSC NFT on testnet

## Add BSC testnet to metamask
ChainId ```97```
RPC ```https://data-seed-prebsc-1-s1.binance.org:8545/```

Go to ```https://testnet.binance.org/faucet-smart``` to get 1 test BNB

## NFT Metadata
Just create a db.json in your repo.
It will be inserted in 2_deploy.js
I'm going to use these images:

"Black Drongo 烏秋" by spongebabyalwaysfull is marked with CC0 1.0
https://live.staticflickr.com/3938/15617743576_b54929f668_b.jpg
"Black Drongo 烏秋" by spongebabyalwaysfull is marked with CC0 1.0
https://live.staticflickr.com/5611/15460717817_14e2ff5030_b.jpg
"Spangled Drongo (Dicrurus bracteatus)" by magdalena_b is marked with CC0 1.0
https://live.staticflickr.com/6215/6219515303_910ee8c82a_b.jpg
"Spangled Drongo (Dicrurus bracteatus)" by magdalena_b is marked with CC0 1.0
https://live.staticflickr.com/2066/5735923794_aea440efb2_b.jpg

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

##
