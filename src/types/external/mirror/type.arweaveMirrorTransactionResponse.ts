type ArweaveMirrorTransactionResponse = {
  transactions: AreweaveTransactions;
};

type AreweaveTransactions = {
  edges: ArweaveEdge[];
};

type ArweaveEdge = {
  node: ArweaveNode;
};

type ArweaveNode = {
  id: string;
};

export type { ArweaveMirrorTransactionResponse, ArweaveEdge, ArweaveNode };
