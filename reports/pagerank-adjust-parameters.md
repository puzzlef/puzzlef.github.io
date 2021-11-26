### [Adjusting PageRank parameters and Comparing results][report]

> While doing research work with [Prof. Kishore Kothapalli], and [Prof. Dip Sankar Banerjee].

**Abstract** — The effect of adjusting damping factor α and tolerance τ on iterations needed for PageRank computation is studied here. Relative performance of PageRank computation with L1, L2, and L∞ norms used as convergence check, are also compared with six possible mean ratios. It is observed that increasing the damping factor α linearly increases the iterations needed almost exponentially. On the other hand, decreasing the tolerance τ exponentially decreases the iterations needed almost exponentially. On average, PageRank with L∞ norm as convergence check is the fastest, quickly followed by L2 norm, and then L1 norm. For large graphs, above certain tolerance τ values, convergence can occur in a single iteration. On the contrary, below certain tolerance τ values, sensitivity issues can begin to appear, causing computation to halt at maximum iteration limit without convergence. The six mean ratios for relative performance comparison are based on arithmetic, geometric, and harmonic mean, as well as the order of ratio calculation. Among them GM-RATIO, geometric mean followed by ratio calculation, is found to be most stable, followed by AM-RATIO.

**Index terms** — PageRank algorithm, Parameter adjustment, Convergence function, Sensitivity issues, Relative performance comparison.

<br>


### Experiments

| Damping Factor | [adjust][α]  |              |              |
| -------------- | ------------ | ------------ | ------------ |
| Tolerance      | [L1 norm][τ] | [L2 norm][τ] | [L∞ norm][τ] |

1. [Comparing the effect of using different values of damping factor, with PageRank (pull, CSR).][α]
2. [Comparing the effect of using different functions for convergence check, with PageRank (...).][τ-fn]
3. [Comparing the effect of using different values of tolerance, with PageRank (pull, CSR).][τ]


[Prof. Kishore Kothapalli]: https://cstar.iiit.ac.in/~kkishore/
[Prof. Dip Sankar Banerjee]: https://sites.google.com/site/dipsankarban/
[report]: https://gist.github.com/wolfram77/6dc740392d2f4e713fafdaea4ec1eba2
[α]: https://github.com/puzzlef/pagerank-adjust-damping-factor
[τ]: https://github.com/puzzlef/pagerank-adjust-tolerance
[τ-fn]: https://github.com/puzzlef/pagerank-adjust-tolerance-function
