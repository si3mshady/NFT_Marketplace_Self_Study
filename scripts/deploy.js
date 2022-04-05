// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {


  // We get the contract to deploy
  const MHM = await hre.ethers.getContractFactory("MentalHealthMarket");
  const mhm = await MHM.deploy();

  await mhm.deployed();
  console.log("Market deployed to:", mhm.address);

  const EDA = await hre.ethers.getContractFactory("ElDigitalAsset");
  const eda = await EDA.deploy(mhm.address);

  await eda.deployed();
  console.log("NFT deployed to:", eda.address);


  const Debug = await hre.ethers.getContractFactory("Debug");
  const debug = await Debug.deploy()

  await debug.deployed()
  console.log("Debugger deployed to:", debug.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
