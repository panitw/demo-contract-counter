require("@nomiclabs/hardhat-waffle");

const TKX_CHAIN_RPC = process.env.TKX_CHAIN_RPC || '';
const TKX_CHAIN_API_KEY = process.env.TKX_CHAIN_API_KEY || '';
const TKX_CHAIN_PRIVATE_KEY = process.env.TKX_CHAIN_PRIVATE_KEY || '';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    tkx_bangsue: {
      url: `${TKX_CHAIN_RPC}`,
      chainId: 17777,
      httpHeaders: {
        apikey: `${TKX_CHAIN_API_KEY}`
      },
      accounts: [`${TKX_CHAIN_PRIVATE_KEY}`]
    }
  }
};
