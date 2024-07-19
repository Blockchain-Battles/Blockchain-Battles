const hre = require("hardhat");

async function main() {
  const receiver = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const [sender] = await ethers.getSigners();

  console.log(`Sending 1 Ether from ${sender.address} to ${receiver}...`);

  const tx = await sender.sendTransaction({
    to: receiver,
    value: ethers.utils.parseEther("100.0"),
  });

  await tx.wait();

  console.log(`Transaction hash: ${tx.hash}`);
  console.log("1 Ether sent successfully!");
}

main();
