require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/LKMfLrO-Z3Wm7BJSXpfJqVMQm6scOJwP",
      accounts: [
        "717593d721d4338be58075cd7689746a4f7c1d575e7b0618846ec7692d45adf4",
      ],
    },
  },
};
