const config: Config = {
  bitcoinRpc: {
    server: "http://127.0.0.1:18445",
    user: "polaruser",
    password: "polarpass",
  },
};

export interface Config {
  // Configuration for bitcoind's JSON-RPC server
  bitcoinRpc: {
    // Server host IP or domain.
    server: string;
    // Username credentials.
    user: string;
    // Password credentials.
    password: string;
  };
};

export default config;
