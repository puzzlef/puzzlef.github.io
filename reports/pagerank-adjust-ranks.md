## [Rank adjustment strategies for Incremental / Dynamic PageRank][report]

> While doing research work with [Prof. Kishore Kothapalli], and [Prof. Dip Sankar Banerjee].

**Abstract** — To avoid calculating ranks of vertices in a dynamic graph from scratch for every snapshot, the ones computed in the previous snapshot of the graph can be used, with adjustment. Four different rank adjustment strategies for dynamic PageRank are studied here. These include zero-fill, 1/N-fill, scaled zero-fill, and scaled 1/N-fill. Results indicate that both 1/N-fill and scaled 1/N-fill strategies require the least number of iterations, on average. As long as the graph has no affected dead ends (including dead ends in the previous snapshot), unaffected vertices can be skipped with the scaled 1/N-fill adjustment strategy.

**Index terms** — Temporal graph, Incremental / Dynamic PageRank, Rank adjustment, Initial ranks, Affected vertices, Scaled 1/N-fill strategy.

<br>


### Experiments

| Update new vertices only    | [zero-fill][f]        | [1/N-fill][f]        |
| --------------------------- | --------------------- | -------------------- |
| Update old and new vertices | [scaled zero-fill][f] | [scaled 1/N-fill][f] |

1. [Comparing strategies to update ranks for incremental/dynamic PageRank.][f]


[Prof. Kishore Kothapalli]: https://cstar.iiit.ac.in/~kkishore/
[Prof. Dip Sankar Banerjee]: https://sites.google.com/site/dipsankarban/
[report]: https://gist.github.com/wolfram77/eb7a3b2e44e3c2069e046389b45ead03
[f]: https://github.com/puzzlef/pagerank-dynamic-adjust-ranks
