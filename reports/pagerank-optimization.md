## STIC-D based Algorithmic Optimizations for Monolithic PageRank

> While doing research work with [Prof. Kishore Kothapalli], and [Prof. Dip Sankar Banerjee].

**Abstract** — The performance benefits of five different algorithmic optimizations for PageRank were studied here. The first two include splitting vertices by components, and sorting components by topological order in block-graph. The remaining three optimizations include skipping computation on in-identical, chain, and converged vertices. This was done on both a CPU, as well as a GPU. Results indicated that splitting vertices by components provided a small performance improvement on average on both the devices. However, sorting components provided little additional benefit. The other three optimizations were beneficial only on certain graphs, but were detrimental on others due to their associated cost. Therefore, skip in-identical and chain optimizations should be applied only on graphs with a large number of in-identical and chain vertices respectively. In contrast, as the applicability of skip converged optimization cannot be predicted beforehand, it can be ignored. Moreover, in all cases the impact on performance was lower for GPU, compared to CPU. This is possibly because of the warp divergence introduced by the three skip optimizations due to irregular skipping of rank computation of vertices.

**Index terms** — PageRank algorithm, STIC-D based algorithmic optimizations, Split components, Sort components, Skip in-identicals, Skip chains, Skip converged.

<br>


### Experiments

| CPU                     | GPU                     |
| ----------------------- | ----------------------- |
| [Split components][a]   | [Split componnets][e]   |
| [Skip in-identicals][b] | [Skip in-identicals][f] |
| [Skip chains][c]        | [Skip chains][g]        |
| [Skip converged][d]     | [Skip converged][h]     |

1. [Performance benefit of PageRank with vertices split by components.][a]
2. [Performance benefit of skipping in-identical vertices for PageRank.][b]
3. [Performance benefit of skipping chain vertices for PageRank.][c]
4. [Performance benefit of skipping converged vertices for PageRank.][d]
5. [Performance benefit of CUDA based PageRank with vertices split by components][e]
6. [Performance benefit of skipping in-identical vertices for CUDA based PageRank][f]
7. [Performance benefit of skipping chain vertices for CUDA based PageRank][g]
8. [Performance benefit of skipping converged vertices for CUDA based PageRank][h]

[Prof. Kishore Kothapalli]: https://www.iiit.ac.in/people/faculty/kkishore/
[Prof. Dip Sankar Banerjee]: https://sites.google.com/site/dipsankarban/
[a]: https://github.com/puzzlef/pagerank-optimization-split-components
[b]: https://github.com/puzzlef/pagerank-optimization-skip-inidenticals
[c]: https://github.com/puzzlef/pagerank-optimization-skip-chains
[d]: https://github.com/puzzlef/pagerank-optimization-skip-converged
[e]: https://github.com/puzzlef/pagerank-cuda-optimization-split-components
[f]: https://github.com/puzzlef/pagerank-cuda-optimization-skip-inidenticals
[g]: https://github.com/puzzlef/pagerank-cuda-optimization-skip-chains
[h]: https://github.com/puzzlef/pagerank-cuda-optimization-skip-converged
