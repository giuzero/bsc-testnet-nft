// migrations/2_deploy.js remove these comments!!!!!!!!!! I had Truffle Migrate SyntaxError: Invalid or unexpected token ERROR trying to do truffle migrate....
// SPDX-License-Identifier: MIT
const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {
  deployer.deploy(ERC721PresetMinterPauserAutoId, "NAME","TICK", "META DATA API");
};
