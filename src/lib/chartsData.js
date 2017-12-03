export const chartSections = [
  {
    id: 'currency-statistics',
    name: 'Currency Statistics'
  },
  {
    id: 'block-details',
    name: 'Block Details'
  },
  {
    id: 'mining-information',
    name: 'Mining Information'
  },
  {
    id: 'network-activity',
    name: 'Network Activity'
  },
  {
    id: 'wallet-activity',
    name: 'Wallet Activity'
  }
]
export const currentStats = {
  'currency-statistics': [
    {
      id: 'total-bitcoins',
      name: 'Bitcoins in circulation',
      description: 'The total number of bitcoins that have already been mined.',
    },
    {
      id: 'market-price',
      name: 'Market Price (USD)',
      description: 'Average USD market price across major bitcoin exchanges.',
    },
    {
      id: 'market-cap',
      name: 'Market Capitalization',
      description: 'The total USD value of bitcoin supply in circulation.',
    },
    {
      id: 'trade-volume',
      name: 'USD Exchange Trade Volume',
      description: 'The total USD value of trading volume on major bitcoin exchanges.',
    }
  ],
  'block-details': [
    {
      id: 'blocks-size',
      name: 'Blockchain Size',
      description: 'The total size of all block headers and transactions.',
    },
    {
      id: 'avg-block-size',
      name: 'Average Block Size',
      description: 'The average block size in MB.'
    },
    {
      id: 'n-orphaned-blocks',
      name: 'Orphaned Blocks',
      description: 'The total number of blocks mined but ultimately not attached to the main Bitcoin blockchain.'
    },
    {
      id: 'n-transactions-per-block',
      name: 'Transactions per Block',
      description: 'The average number of transactions per block.'
    },
    {
      id: 'median-confirmation-time',
      name: 'Median Transaction Confirmation Time (with fee)',
      description: 'The median time for a transaction to be accepted into a mined block.'
    },
    {
      id: 'bip-9-segwit',
      name: 'SegWit Adoption',
      description: '% of the last 2016 blocks that signal support for the activation of the SegWit soft-fork.'
    },
    {
      id: 'bitcoin-unlimited-share',
      name: 'Percentage of blocks signalling Bitcoin Unlimited support',
      description: 'Percentage of the last 200 blocks that signal support for Bitcoin Unlimited'
    },
    {
      id: 'nya-support',
      name: 'New York Agreement support',
      description: 'Percentage of blocks signalling for the New York Agreement over the last 200 blocks'
    }
  ],
  'mining-information': [
    {
      id: 'hash-rate',
      name: 'Hash Rate',
      description: 'The estimated number of tera hashes per second the Bitcoin network is performing.'
    },
    {
      id: 'pools',
      name: 'Hashrate Distribution',
      description: 'An estimation of hashrate distribution amongst the largest mining pools'
    },
    {
      id: 'difficulty',
      name: 'Difficulty',
      description: 'A relative measure of how difficult it is to find a new block.'
    },
    {
      id: 'miners-revenue',
      name: 'Mining Revenue',
      description: 'Total value of coinbase block rewards and transaction fees paid to miners.'
    },
    {
      id: 'transaction-fees',
      name: 'Total Transaction Fees (BTC)',
      description: 'The total value of all transaction fees paid to miners.'
    },
    {
      id: 'transaction-fees-usd',
      name: 'Total Transaction Fees (USD)',
      description: 'The total value of all transaction fees paid to miners (not including the coinbase value of block rewards).'
    },
    {
      id: 'cost-per-transaction-percent',
      name: 'Cost % of Transaction Volume',
      description: 'A chart showing miners revenue as percentage of the transaction volume.'
    },
    {
      id: 'cost-per-transaction',
      name: 'Cost per Transaction',
      description: 'A chart showing miners revenue divided by the number of transactions.'
    }
  ],
  'network-activity': [
    {
      id: 'n-unique-addresses',
      name: 'Unique Addresses',
      description: 'The total number of unique addresses used on the Bitcoin blockchain.'
    },
    {
      id: 'n-transactions',
      name: 'Total Number of Transactions Per Day',
      description: 'The number of daily confirmed Bitcoin transactions.'
    },
    {
      id: 'n-transactions-total',
      name: 'Total Number of Transactions',
      description: 'Total number of transactions.'
    },
    {
      id: 'transactions-per-second',
      name: 'Transactions Rate',
      description: 'The number of Bitcoin transactions added to the mempool per second.'
    },
    {
      id: 'mempool-count',
      name: 'Mempool Transaction Count',
      description: 'The number of transactions waiting to be confirmed.'
    },
    {
      id: 'mempool-growth',
      name: 'Mempool Size Growth',
      description: 'The rate at which the mempool is growing per second.'
    },
    {
      id: 'mempool-size',
      name: 'Mempool Size',
      description: 'The aggregate size of transactions waiting to be confirmed.'
    },
    {
      id: 'mempool-state-by-fee-level',
      name: 'Mempool State By Fee Level',
      description: 'Breakdown of the mempool by fee level'
    },
    {
      id: 'utxo-count',
      name: 'Number of Unspent Transactions Outputs',
      description: 'The number of unspent Bitcoin transactions outputs (UTXO set size).'
    },
    {
      id: 'n-transactions-excluding-popular',
      name: 'Transaction Volume excluding Popular Addresses',
      description: 'The total number of Bitcoin transactions, excluding the 100 most popular addresses.'
    },
    {
      id: 'n-transactions-excluding-chains-longer-than-100',
      name: 'Transaction Volume excluding Long Chains',
      description: 'The total number of Bitcoin transactions per day excluding long transaction chains.'
    },
    {
      id: 'output-volume',
      name: 'Total Output Value',
      description: 'The total value of all transaction outputs per day.'
    },
    {
      id: 'estimated-transaction-volume',
      name: 'Estimated Transaction Value',
      description: 'The total estimated value of transactions on the Bitcoin blockchain.'
    },
    {
      id: 'estimated-transaction-volume-usd',
      name: 'Estimated USD Transaction Value',
      description: 'The estimated transaction value in USD value.'
    }
  ],
  'wallet-activity': [
    {
      id: 'my-wallet-n-users',
      name: 'Blockchain Wallet Users',
      description: 'The total number of Blockchain wallets created.'
    }
  ]
}
