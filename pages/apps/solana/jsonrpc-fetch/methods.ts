export const methods = [
  {
    method: "getAccountInfo",
    docs: "Returns all information associated with the account of provided Pubkey",
    params: [
      "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
      {
        encoding: "base58"
      }
    ],
    type: "obejct"
  },
  {
    method: "getBalance",
    docs: "Returns the balance of the account of provided Pubkey",
    params: ["83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri"],
    type: "number"
  },
  {
    method: "getBlock",
    docs: "Returns identity and transaction information about a confirmed block in the ledger",
    params: [430, { encoding: "json", transactionDetails: "full", rewards: false }],
    type: "object"
  },
  {
    method: "getBlockHeight",
    docs: "Returns the current block height of the node",
    params: [],
    type: "number"
  },
  {
    method: "getBlockCommitment",
    docs: "Returns commitment for particular block",
    params: [5],
    type: "object"
  },
  {
    method: "getBlocks",
    docs: "Returns a list of confirmed blocks between two slots",
    params: [5, 10],
    type: "array"
  },
  {
    method: "getBlocksWithLimit",
    docs: "Returns a list of confirmed blocks starting at the given slot",
    params: [5, 3],
    type: "array"
  },
  {
    method: "getBlockTime",
    docs: "Returns the estimated production time of a block. Each validator reports their UTC time to the ledger on a regular interval by intermittently adding a timestamp to a Vote for a particular block. A requested block's time is calculated from the stake-weighted mean of the Vote timestamps in a set of recent blocks recorded on the ledger.",
    params: [10],
    type: "timestamp"
  },
  {
    method: "getClusterNodes",
    docs: "Returns information about all the nodes participating in the cluster",
    params: [],
    type: "timestamp"
  },
  {
    method: "getEpochInfo",
    docs: "Returns information about the current epoch",
    params: [],
    type: "object"
  },
  {
    method: "getEpochSchedule",
    docs: "Returns epoch schedule information from this cluster's genesis config",
    params: [],
    type: "object"
  },
  {
    method: "getFeeForMessage",
    docs: "NEW: This method is only available in solana-core v1.9 or newer. Please use getFees for solana-core v1.8 Get the fee the network will charge for a particular Message",
    params: [
      "AQABAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAA",
      {
        commitment: "processed"
      }
    ],
    type: "object"
  },
  {
    method: "getFirstAvailableBlock",
    docs: "Returns the slot of the lowest confirmed block that has not been purged from the ledger",
    params: [],
    type: "number"
  },
  {
    method: "getGenesisHash",
    docs: "Returns the genesis hash",
    params: [],
    type: "string"
  },
  {
    method: "getHealth",
    docs: `Returns the current health of the node. If one or more --known-validator arguments are provided to solana-validator, "ok" is returned when the node has within HEALTH_CHECK_SLOT_DISTANCE slots of the highest known validator, otherwise an error is returned. "ok" is always returned if no known validators are provided.`,
    params: [],
    type: "string"
  },
  {
    method: "getHighestSnapshotSlot",
    docs: "",
    params: [],
    type: "object"
  },
  {
    method: "getIdentity",
    docs: "Returns the identity pubkey for the current node",
    params: [],
    type: "object"
  },
  {
    method: "getInflationGovernor",
    docs: "Returns the current inflation governor",
    params: [],
    type: "object"
  },
  {
    method: "getInflationRate",
    docs: "Returns the specific inflation values for the current epoch",
    params: [],
    type: "object"
  },
  {
    method: "getInflationReward",
    docs: "Returns the inflation / staking reward for a list of addresses for an epoch",
    params: [
      [
        "6dmNQ5jwLeLk5REvio1JcMshcbvkYMwy26sJ8pbkvStu",
        "BGsqMegLpV6n6Ve146sSX2dTjUMj3M92HnU8BbNRMhF2"
      ],
      { epoch: 2 }
    ],
    type: "object"
  },
  {
    method: "getLargestAccounts",
    docs: "Returns the 20 largest accounts, by lamport balance (results may be cached up to two hours)",
    params: [],
    type: "object"
  },
  {
    method: "getLatestBlockhash",
    docs: "NEW: This method is only available in solana-core v1.9 or newer. Please use getRecentBlockhash for solana-core v1.8 Returns the latest blockhash",
    params: [
      {
        commitment: "processed"
      }
    ],
    type: "object"
  },
  {
    method: "getLeaderSchedule",
    docs: "Returns the leader schedule for an epoch",
    params: [
      null,
      {
        identity: "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F"
      }
    ],
    type: "object"
  },
  {
    method: "getMaxRetransmitSlot",
    docs: "Get the max slot seen from retransmit stage.",
    params: [],
    type: "number"
  },
  {
    method: "getMaxShredInsertSlot",
    docs: "Get the max slot seen from retransmit stage.",
    params: [],
    type: "number"
  },
  {
    method: "getMinimumBalanceForRentExemption",
    docs: "Returns minimum balance required to make account rent exempt.",
    params: [50],
    type: "number"
  },
  {
    method: "getMultipleAccounts",
    docs: "Returns the account information for a list of Pubkeys.",
    params: [
      [
        "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
        "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA"
      ],
      {
        dataSlice: {
          offset: 0,
          length: 0
        }
      }
    ],
    type: "object"
  },
  {
    method: "getProgramAccounts",
    docs: "Returns all accounts owned by the provided program Pubkey",
    params: ["4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T"],
    type: "object"
  },
  {
    method: "getRecentPerformanceSamples",
    docs: "Returns a list of recent performance samples, in reverse slot order. Performance samples are taken every 60 seconds and include the number of transactions and slots that occur in a given time window.",
    params: [4],
    type: "array"
  },
  {
    method: "getSignaturesForAddress",
    docs: "Returns signatures for confirmed transactions that include the given address in their accountKeys list. Returns signatures backwards in time from the provided signature or most recent confirmed block",
    params: [
      "Vote111111111111111111111111111111111111111",
      {
        limit: 1
      }
    ],
    type: "array"
  },
  {
    method: "getSignatureStatuses",
    docs: "Returns the statuses of a list of signatures. Unless the searchTransactionHistory configuration parameter is included, this method only searches the recent status cache of signatures, which retains statuses for all active slots plus MAX_RECENT_BLOCKHASHES rooted slots.",
    params: [
      [
        "5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW",
        "5j7s6NiJS3JAkvgkoc18WVAsiSaci2pxB2A6ueCJP4tprA2TFg9wSyTLeYouxPBJEMzJinENTkpA52YStRW5Dia7"
      ]
    ],
    type: "object"
  },
  {
    method: "getSlot",
    docs: "Returns the slot that has reached the given or default commitment level",
    params: [4],
    type: "number"
  },
  {
    method: "getSlotLeader",
    docs: "Returns the current slot leader",
    params: [],
    type: "string"
  },
  {
    method: "getSlotLeaders",
    docs: "Returns the slot leaders for a given slot range",
    params: [100, 10],
    type: "array"
  },
  {
    method: "getStakeActivation",
    docs: "Returns epoch activation information for a stake account",
    params: [
      "CYRJWqiSjLitBAcRxPvWpgX3s5TvmN2SuRY3eEYypFvT",
      {
        epoch: 4
      }
    ],
    type: "object"
  },
  {
    method: "getStakeMinimumDelegation",
    docs: "Returns the stake minimum delegation, in lamports.",
    params: [],
    type: "array"
  },
  {
    method: "getSupply",
    docs: "Returns information about the current supply.",
    params: [],
    type: "object"
  },
  {
    method: "getTokenAccountBalance",
    docs: "Returns the token balance of an SPL Token account.",
    params: ["7fUAJdStEuGbc3sM84cKRL6yYaaSstyLSU4ve5oovLS7"],
    type: "object"
  },
  {
    method: "getTokenAccountsByDelegate",
    docs: "Returns all SPL Token accounts by approved Delegate.",
    params: [
      "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
      {
        programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
      },
      {
        encoding: "jsonParsed"
      }
    ],
    type: "object"
  },
  {
    method: "getTokenAccountsByOwner",
    docs: "Returns all SPL Token accounts by token owner.",
    params: [
      "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F",
      {
        mint: "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E"
      },
      {
        encoding: "jsonParsed"
      }
    ],
    type: "object"
  },
  {
    method: "getTokenLargestAccounts",
    docs: "Returns the 20 largest accounts of a particular SPL Token type.",
    params: ["3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E"],
    type: "object"
  },
  {
    method: "getTokenSupply",
    docs: "Returns the total supply of an SPL Token type.",
    params: ["3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E"],
    type: "object"
  },
  {
    method: "getTransaction",
    docs: "Returns the total supply of an SPL Token type.",
    params: [
      "2nBhEBYYvfaAe16UMNqRHre4YNSskvuYgx3M6E4JP1oDYvZEJHvoPzyUidNgNX5r9sTyN1J9UxtbCXy2rqYcuyuv",
      "json"
    ],
    type: "object"
  },
  {
    method: "getTransactionCount",
    docs: "Returns the current Transaction count from the ledger",
    params: [],
    type: "number"
  },
  {
    method: "getVersion",
    docs: "Returns the current solana versions running on the node",
    params: [],
    type: "object"
  },
  {
    method: "getVoteAccounts",
    docs: "Returns the account info and associated stake for all the voting accounts in the current bank.",
    params: [
      {
        votePubkey: "3ZT31jkAGhUaw8jsy4bTknwBMP8i4Eueh52By4zXcsVw"
      }
    ],
    type: "object"
  },
  {
    method: "isBlockhashValid",
    docs: "NEW: This method is only available in solana-core v1.9 or newer. Please use getFeeCalculatorForBlockhash for solana-core v1.8 Returns whether a blockhash is still valid or not",
    params: ["J7rBdM6AecPDEZp8aPq5iPSNKVkU5Q76F3oAV4eW5wsW", { commitment: "processed" }],
    type: "object"
  },
  {
    method: "minimumLedgerSlot",
    docs: "Returns the lowest slot that the node has information about in its ledger. This value may increase over time if the node is configured to purge older ledger data",
    params: [],
    type: "number"
  },
  {
    method: "requestAirdrop",
    docs: "Requests an airdrop of lamports to a Pubkey",
    params: ["83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri", 1000000000],
    type: "string"
  },
  {
    method: "sendTransaction",
    docs: `Submits a signed transaction to the cluster for processing`,
    params: [
      "4hXTCkRzt9WyecNzV1XPgCDfGAZzQKNxLXgynz5QDuWWPSAZBZSHptvWRL3BjCvzUXRdKvHL2b7yGrRQcWyaqsaBCncVG7BFggS8w9snUts67BSh3EqKpXLUm5UMHfD7ZBe9GhARjbNQMLJ1QD3Spr6oMTBU6EhdB4RD8CP2xUxr2u3d6fos36PD98XS6oX8TQjLpsMwncs5DAMiD4nNnR8NBfyghGCWvCVifVwvA8B8TJxE1aiyiv2L429BCWfyzAme5sZW8rDb14NeCQHhZbtNqfXhcp2tAnaAT"
    ],
    type: "string"
  },
  {
    method: "simulateTransaction",
    docs: "Simulate sending a transaction",
    params: [
      "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEDArczbMia1tLmq7zz4DinMNN0pJ1JtLdqIJPUw3YrGCzYAMHBsgN27lcgB6H2WQvFgyZuJYHa46puOQo9yQ8CVQbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCp20C7Wj2aiuk5TReAXo+VTVg8QTHjs0UjNMMKCvpzZ+ABAgEBARU=",
      {
        encoding: "base64"
      }
    ],
    type: "object"
  }
];
