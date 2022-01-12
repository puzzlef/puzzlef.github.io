## Adjusting Datatype of Rank vector and CSR Representation with PageRank

> While doing research work with [Prof. Kishore Kothapalli], and [Prof. Dip Sankar Banerjee].

**Abstract** — The effect on PageRank computation time for different datatypes of the rank vector and the CSR representation of graphs is studied here. This is done on both a CPU, as well as a GPU. Results indicate that using a wider datatype for the CSR representation has a smaller impact to performance compared to using a wider datatype for the rank vector. This is despite the fact that the CSR representation has a much larger memory footprint, and thus higher memory access requirement, than the rank vector. This could be explained from the fact that the PageRank algorithm accesses the CSR representation in a linear-like fashion, which improves the cache hit ratio for a CPU, and improves memory coalescing for a GPU. On the other hand, it accesses the rank vector in random order. When a wider datatype is used, a higher memory bandwidth is required, and if memory accesses are random, cache memory can get occupied faster and require faster evictions, slowing down performance. In all cases however, the impact on performance for a wider datatype is higher for GPU, compared to CPU. This is likely because of architectural differences between the two devices, with the GPU having a wider memory bus than the CPU.

**Index terms** — PageRank algorithm, Datatype adjustment, Rank vector, CSR representation, Memory access pattern.

<br>


### Experiments

| Rank vector     | CSR representation |
| --------------- | ------------------ |
| [Sequential][a] | [Sequential][d]    |
| [CUDA][b]       | [CUDA][e]          |
| [nvGraph][c]    |                    |

1. [Performance of PageRank using 32-bit floats vs 64-bit floats for the rank vector.][a]
2. [Performance of CUDA-based PageRank using 32-bit floats vs 64-bit floats for the rank vector.][b]
3. [Performance of nvGraph PageRank using 32-bit floats vs 64-bit floats for the rank vector.][c]
4. [Performance of PageRank using 32-bit ints vs 64-bit ints for the CSR representation.][d]
5. [Performance of CUDA-based PageRank using 32-bit ints vs 64-bit ints for the CSR representation.][e]


[Prof. Kishore Kothapalli]: https://www.iiit.ac.in/people/faculty/kkishore/
[Prof. Dip Sankar Banerjee]: https://sites.google.com/site/dipsankarban/
[a]: https://github.com/puzzlef/pagerank-adjust-rank-datatype
[b]: https://github.com/puzzlef/pagerank-cuda-adjust-rank-datatype
[c]: https://github.com/puzzlef/pagerank-nvgraph-adjust-rank-datatype
[d]: https://github.com/puzzlef/pagerank-adjust-csr-datatype
[e]: https://github.com/puzzlef/pagerank-cuda-adjust-csr-datatype
