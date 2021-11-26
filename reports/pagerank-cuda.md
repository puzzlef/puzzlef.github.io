## [Parallelizing PageRank for a Volta GPU][report]

> While doing research work with [Prof. Kishore Kothapalli], and [Prof. Dip Sankar Banerjee].

**Abstract** — GPUs are usually optimized for chunked memory access patterns and high compute. While the PageRank algorithm has a unchunked-gather memory access pattern and low compute, implementing it on a CUDA-enabled GPU, such as the Volta GV100, can bring a significant performance improvement. The first step of the parallelization process used here involved independently parallelizing map and reduce-like operations within the algorithm, to obtain a suitable implementation and launch config. The second step involved parallelizing the rank computation process using a switched thread/block-per-vertex approach after the vertices have been partitioned by in-degree at a suitable switch point, and with apt launch configs for each partition. Compared to nvGraph PageRank on fixed and temporal graphs, results indicate a small performance improvement. It is however noted that the CUDA implementation developed here uses L1-norm for error measurement, while nvGraph PageRank uses L2-norm for error measurement, along with a per iteration L2-norm rank scaling followed by an L1-norm rank scaling after the final iteration. It was also observed that sequential CPU-based vector element sum with 32-bit floating point values suffered from precision issues, while the CUDA-based did not.

**Index terms** — PageRank algorithm, Volta GV100 GPU, CUDA implementation, Map/Reduce-like operations, Switched thread/block-per-vertex approach.

<br>


### Experiments

| Map operations        | [launch][a]              |                      |                   |                    |
| --------------------- | ------------------------ | -------------------- | ----------------- | ------------------ |
| Reduce operations     | [memcpy launch][b]       | [in-place launch][c] | [vs][d]           |                    |
| Switched thread/block | [sort vertices/edges][e] | [switch-point][f]    | [block launch][g] | [thread launch][h] |

| Fixed graphs    | static PageRank      | [nvGraph][i] vs [CUDA][i] vs [sequential][i] |
| --------------- | -------------------- | -------------------------------------------- |
| Temporal graphs | static PageRank      | [nvGraph][j] vs [CUDA][j]                    |
| Temporal graphs | incremental PageRank | [nvGraph][j] vs [CUDA][j]                    |

1. [Comparing various launch configs for CUDA based vector multiply.][a]
2. [Comparing various launch configs for CUDA based vector element sum (memcpy).][b]
3. [Comparing various launch configs for CUDA based vector element sum (in-place).][c]
4. [Performance of memcpy vs in-place based CUDA based vector element sum.][d]
5. [Experimenting the effect of sorting vertices and/or edges by in-degree for CUDA switched-per-vertex based PageRank ...][e]
6. [Comparing various switch points for CUDA switched-per-vertex based PageRank (pull, CSR, switched-partition).][f]
7. [Comparing various launch configs for CUDA switched-per-vertex based PageRank, focusing on block approach ...][g]
8. [Comparing various launch configs for CUDA switched-per-vertex based PageRank, focusing on thread approach ...][h]
9. [Performance of nvGraph based vs CUDA based PageRank (pull, CSR).][i]
10. [Performance of static vs incremental CUDA based PageRank (pull, CSR, scaled-fill).][j]

<br>


### Related Experiments

| Map operations    | [duty][m]        |                          |
| ----------------- | ---------------- | ------------------------ |
| Reduce operations | [memcpy duty][n] |                          |
| Block per vertex  | [launch][o]      | [sort vertices/edges][p] |
| Thread per vertex | [launch][q]      | [sort vertices/edges][r] |

1. [Comparing various per-thread duty numbers for CUDA based vector multiply.][m]
2. [Comparing various per-thread duty numbers for CUDA based vector element sum (memcpy).][n]
3. [Comparing various launch configs for CUDA block-per-vertex based PageRank (pull, CSR).][o]
4. [Experimenting the effect of sorting vertices and/or edges by in-degree for CUDA block-per-vertex based PageRank ...][p]
5. [Comparing various launch configs for CUDA thread-per-vertex based PageRank (pull, CSR).][q]
6. [Experimenting the effect of sorting vertices and/or edges by in-degree for CUDA thread-per-vertex based PageRank ...][r]


[Prof. Kishore Kothapalli]: https://cstar.iiit.ac.in/~kkishore/
[Prof. Dip Sankar Banerjee]: https://sites.google.com/site/dipsankarban/
[report]: https://gist.github.com/wolfram77/4ef16ab9699ac03a617b8731dd240e1f
[a]: https://github.com/puzzlef/multiply-cuda-adjust-launch
[b]: https://github.com/puzzlef/sum-cuda-memcpy-adjust-launch
[c]: https://github.com/puzzlef/sum-cuda-inplace-adjust-launch
[d]: https://github.com/puzzlef/sum-cuda-memcpy-vs-inplace
[e]: https://github.com/puzzlef/pagerank-cuda-switched-sort-by-indegree
[f]: https://github.com/puzzlef/pagerank-cuda-switched-adjust-switch-point
[g]: https://github.com/puzzlef/pagerank-cuda-switched-adjust-block-launch
[h]: https://github.com/puzzlef/pagerank-cuda-switched-adjust-thread-launch
[i]: https://github.com/puzzlef/pagerank-nvgraph-vs-cuda
[j]: https://github.com/puzzlef/pagerank-cuda-static-vs-incremental
[m]: https://github.com/puzzlef/multiply-cuda-adjust-duty
[n]: https://github.com/puzzlef/sum-cuda-memcpy-adjust-duty
[o]: https://github.com/puzzlef/pagerank-cuda-block-adjust-launch
[p]: https://github.com/puzzlef/pagerank-cuda-block-sort-by-indegree
[q]: https://github.com/puzzlef/pagerank-cuda-thread-adjust-launch
[r]: https://github.com/puzzlef/pagerank-cuda-thread-sort-by-indegree
