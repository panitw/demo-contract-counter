const main = async () => {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    console.log("Contract address:", counter.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });