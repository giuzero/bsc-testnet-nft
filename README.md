# BSC NFT on testnet

## Add BSC testnet to metamask
ChainId ```97```
RPC ```https://data-seed-prebsc-1-s1.binance.org:8545/```

Go to ```https://testnet.binance.org/faucet-smart``` to get 1 test BNB

## NFT Metadata
Just create a db.json in your repo. See https://my-json-server.typicode.com/
The api endopoints will be inserted in ```2_deploy.js```
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
$ npm i pify
$ npm i @truffle/hdwallet-provider
npx truffle init
```
Copy the contract preset
```
$ mkdir -p build/contracts/
$ cp node_modules/@openzeppelin/contracts/build/contracts/* build/contracts/
```
Create ```2_deploy.js``` inside ```migration``` folder and modify ```truffle-config.js``` inside the root folder (see files to copy)

!WARNING!
Create a new ```.secret``` file in root directory and enter your 12 word mnemonic seed phrase to get started.
Don't share your mnemonic!!!

## mmm better try it in a local node...

let's migrate to a local node before to deploy into the testnet
```
npx truffle develop
truffle(develop)> migrate
```
Let's interact! Check if it is all right!
```
truffle(develop)> nft = await ERC721PresetMinterPauserAutoId.deployed()
truffle(develop)> await nft.name()
truffle(develop)> await nft.symbol()
truffle(develop)> await nft.baseURI() --> does not work with open-zeppelin >3.X
```
### Mint
```
truffle(develop)> await nft.mint("addr appeared when truffle deployed...")
```
Check owner and URI
```
truffle(develop)> await nft.ownerOf(0)
truffle(develop)> await nft.tokenURI(0)
```

## Let's go to the testnet (Binance Chain Chapel Testnet)

```truffle-config.js``` and ```.secret``` are already set.
Had error using http for testnet, chenged in wss.
So let's deploy to testnet
```
npx truffle console --network testnet
migrate (I had to try more than once)
nft = await ERC721PresetMinterPauserAutoId.deployed()
accounts (there sould be the one you use with the mnemonic provided)
await nft.mint("account address owner")
```
Repeat last instruction foreach NFT.

## Import into Metamask Mobile

## Add BSC testnet to metamask mobile
ChainId ```97```
RPC ```https://data-seed-prebsc-1-s1.binance.org:8545/```

Import the wallet.

### Import NFT 

Just retrieve contract address with ```nft.address``` and put it in the form.
The ID is the one specified in the API defifinition.