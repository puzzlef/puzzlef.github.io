## [Dead End handling strategies for PageRank algorithm][report]

> While doing research work with [Prof. Kishore Kothapalli], [Prof. Dip Sankar Banerjee].

**Abstract** — Presence of dead ends, which are vertices without any out-edges, in a graph under PageRank computation can cause importance to leak out. This is undesirable since this can cause ranks of all vertices to converge to zero, which is a valid, but useless solution. Four different dead end handling strategies for static, incremental, and dynamic PageRank are studied here. These include: teleport, loop, loop-all, and remove. Results indicate that the remove strategy performs best, on average. This however is suitable only if it is possible to keep track of the dead-end free version of the graph, as otherwise the cost of recursively removing dead ends from the graph is significant. The loop and loop-all strategies perform similarly.  Additionally, loop-all is a fair strategy and may be a better choice for networks associated with people. Teleport strategy performs the worst, but this clearly depends upon the nature of the graph. However, it is the only strategy that does not allow distributed computation without per-iteration communication. When using 32-bit floating format for rank of each vertex on large graphs, precision issues are observed. This does not happen when 64-bit floating point format is used instead, indicating it to be a good choice when accuracy of ranks is important on large graphs.

**Index terms** — Fixed / Temporal graphs, Static / Incremental / Dynamic PageRank, Dead ends, Teleport, Loop, Remove, Precision issues.

<br>


### Experiments

| fixed graphs    | static PageRank      | [teleport][f] | [loop][f] | [loop-all][f] | [remove][f] |
| --------------- | -------------------- | ------------- | --------- | ------------- | ----------- |
| temporal graphs | static PageRank      | [teleport][t] | [loop][t] | [loop-all][t] | [remove][t] |
| temporal graphs | incremental PageRank | [teleport][t] | [loop][t] | [loop-all][t] | [remove][t] |
| temporal graphs | dynamic PageRank     | [teleport][t] | [loop][t] | [loop-all][t] | [remove][t] |

1. [Comparing various strategies of handling dead ends for PageRank (pull, CSR).][f]
2. [Comparing various strategies of handling dead ends for dynamic PageRank (pull, CSR).][t]


[Prof. Kishore Kothapalli]: https://cstar.iiit.ac.in/~kkishore/
[Prof. Dip Sankar Banerjee]: https://sites.google.com/site/dipsankarban/
[report]: https://gist.github.com/wolfram77/94c38b9cfbf0c855e5f42fa24a8602fc
[f]: https://github.com/puzzlef/pagerank-handle-dead-ends
[t]: https://github.com/puzzlef/pagerank-dynamic-handle-dead-ends
