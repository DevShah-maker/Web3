const {task} = require("hardhat/config")

task("block-number","Prints the current block number").setAction(

    // async function blocktasks() {}
    // const blocktasks = async function() => {} 
    // the above two lines for initializing a function is same, we can use whatever we want

    // But here, we won't have a name of the below function
    async (taskArgs,hre) => {
        const blockNumber = await hre.ethers.provider.getBlocknumber()
        console.log(`Current block number : ${blockNumber}`)
    }
)
