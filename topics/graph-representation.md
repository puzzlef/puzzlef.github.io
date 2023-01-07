In graph theory, a graph representation is a technique to store graph into the
memory of computer. To represent a graph, we just need the set of vertices, and
for each vertex the neighbors of the vertex (vertices which is directly
connected to it by an edge). If it is a weighted graph, then the weight will be
associated with each edge. [(1)]

[(1)]: https://www.javatpoint.com/graph-theory-graph-representations

<br>


## Reference Implementations

- 💾 [OpenMP-based parallel graph implementation](https://github.com/ionicf/graph-openmp)

<br>


## Experiments

### Graph Data structure

| Repository | Description |
|  ----  |  ----  |
| 🧫 [graph-edges-vector-vs-unordered_map](https://github.com/puzzlef/graph-edges-vector-vs-unordered_map) | Performance of using vector vs unordered_map for storing edges of each vertex in a graph. |
|  |  |
| 🧫 [csr-regular-vs-hybrid](https://github.com/puzzlef/csr-regular-vs-hybrid) | Comparing space usage of regular vs hybrid CSR. |
|  |  |
| 🧫 [bitset-sorted-vs-unsorted](https://github.com/puzzlef/bitset-sorted-vs-unsorted) | Testing the effectiveness of sorted vs unsorted list of integers for BitSet. |
| 🧫 [bitset-small-vector-adjust-buffer](https://github.com/puzzlef/bitset-small-vector-adjust-buffer) | Comparing various buffer sizes for BitSet with small vector optimization. |
| 🧫 [bitset-partially-sorted-adjust-unsorted](https://github.com/puzzlef/bitset-partially-sorted-adjust-unsorted) | Comparing various unsorted sizes for partially sorted BitSet. |
| 🧫 [bitset-sorted-full-vs-partial](https://github.com/puzzlef/bitset-sorted-full-vs-partial) | Performance of fully sorted vs partially sorted BitSet. |
| 🧫 [bitset-subrange16-adjust-switch-point](https://github.com/puzzlef/bitset-subrange16-adjust-switch-point) | Comparing various switch points for 16-bit subrange based BitSet. |
| 🧫 [bitset-subrange16-sorted-vs-unsorted](https://github.com/puzzlef/bitset-subrange16-sorted-vs-unsorted) | Comparing sorted vs unsorted for 16-bit subrange based BitSet. |

<br>


#### Research notes

- [A Parallel Packed Memory Array to Store Dynamic Graphs](https://gist.github.com/wolfram77/5e2e7349d062b9dfa1bbf0445c7c2e01)
- [GraSU: A Fast Graph Update Library for FPGA-based Dynamic Graph Processing](https://gist.github.com/wolfram77/293b3a661759870482c7ceb21f1cb597)
