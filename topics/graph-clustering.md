Graph clustering is the task of grouping the vertices of the graph into clusters
taking into consideration the edge structure of the graph in such a way that
there should be many edges within each cluster and relatively few between the
clusters. [(1)]

[(1)]: https://www.sciencedirect.com/science/article/abs/pii/S1574013707000020

<br>


## Thesis Materials

- 📓 [Exploring Optimizations for Dynamic Graph Algorithms on the GPU](https://gist.github.com/wolfram77/2fb4a81b20bb91644e066a9946706baa)

<br>


## Experiments

### Community detection using Louvain

| Repository | Description |
|  ----  |  ----  |
| 🧪 [louvain-ordered-vs-unordered](https://github.com/puzzlef/louvain-ordered-vs-unordered) | Comparison of ordered vs unordered vertex processing in Louvain algorithm for community detection. |
| 🧫 [louvain-adjust-accumulator-capacity](https://github.com/puzzlef/louvain-adjust-accumulator-capacity) | Effect of adjusting accumulator hashtable capacity of the Louvain algorithm for community detection. |
| 🧫 [louvain-adjust-accumulator-capacity-with-collisions](https://github.com/puzzlef/louvain-adjust-accumulator-capacity-with-collisions) | Effect of adjusting capacity of collision handled accumulator hashtable of the Louvain algorithm for community detection. |
| 🧫 [louvain-adjust-accumulator-hash-function](https://github.com/puzzlef/louvain-adjust-accumulator-hash-function) | Effect of adjusting accumulator hash function of the Louvain algorithm for community detection. |
| 🧫 [louvain-adjust-tolerance-iteratively](https://github.com/puzzlef/louvain-adjust-tolerance-iteratively) | Effect of iteratively adjusting tolerance of the Louvain algorithm for community detection. |
| 🧫 [louvain-adjust-iteration-processing](https://github.com/puzzlef/louvain-adjust-iteration-processing) | Effect of adjusting vertex processing order and partial iteration processing of the Louvain algorithm for community detection. |
|  |  |
| 🧫 [louvain-dynamic-naive-approaches](https://github.com/puzzlef/louvain-dynamic-naive-approaches) | Comparing naive dynamic approaches of the Louvain algorithm for community detection. |
|  |  |
| 🧫 [louvain-openmp-adjust-schedule](https://github.com/puzzlef/louvain-openmp-adjust-schedule) | Effect of adjusting schedule in OpenMP-based Louvain algorithm for community detection. |
| 🧪 [louvain-unordered-openmp-adjust-schedule](https://github.com/puzzlef/louvain-unordered-openmp-adjust-schedule) | Effect of adjusting schedule in OpenMP-based unordered Louvain algorithm for community detection. |
|  |  |
| 🧪 [louvain-cuda-ordered-vs-unordered](https://github.com/puzzlef/louvain-cuda-ordered-vs-unordered) | Comparison of ordered vs unordered vertex processing in CUDA-based Louvain algorithm for community detection on the GPU. |

<br>


### Community detection using LabelRank

| Repository | Description |
|  ----  |  ----  |
| 🧫 [labelrank-adjust-parameters](https://github.com/puzzlef/labelrank-adjust-parameters) | Comparing the effect of adjustment of parameter of the LabelRank algorithm for community detection. |
| 🧫 [abelrank-adjust-labelset-capacity](https://github.com/puzzlef/labelrank-adjust-labelset-capacity) | Comparing the effect of adjustment of labelset capacity of the LabelRank algorithm for community detection. |
| 🧫 [labelrank-adjust-accumulator-capacity](https://github.com/puzzlef/labelrank-adjust-accumulator-capacity) | Effect of adjusting accumulator hashtable capacity of the LabelRank algorithm for community detection. |
| 🧫 [labelrank-per-iteration-modularity](https://github.com/puzzlef/labelrank-per-iteration-modularity) | Variation of modularity with progression of iterations of the LabelRank algorithm for community detection. |
|  |  |
| 🧫 [labelrank-openmp-adjust-schedule](https://github.com/puzzlef/labelrank-openmp-adjust-schedule) | Effect of adjusting schedule in OpenMP-based LabelRank algorithm for community detection. |

<br>


#### Handwritten notes

- [Delta modularity derivation (Louvain algorithm)](https://gist.github.com/wolfram77/a3c95cd94a38a100f9b075594a823928)


#### Research notes

- [Delta-Screening: A Fast and Efficient Technique to Update Communities in Dynamic Graphs](https://gist.github.com/wolfram77/c51f3580d7a76fa5c0a78491569df5ce)
