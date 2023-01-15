PageRank is an algorithm used by Google Search to rank web pages in their search
engine results. It is named after both the term "web page" and co-founder Larry
Page. PageRank is a way of measuring the importance of website pages. [(1)]

[(1)]: https://en.wikipedia.org/wiki/PageRank

<br>


## Publications

- 📰 S. Sahu, K. Kothapalli and D. S. Banerjee, "[Dynamic Batch Parallel Algorithms for Updating PageRank](https://ieeexplore.ieee.org/abstract/document/9835216)," 2022 IEEE International Parallel and Distributed Processing Symposium Workshops (IPDPSW), 2022, pp. 1129-1138, doi: 10.1109/IPDPSW55747.2022.00186.

<br>


## Thesis Materials

- 📓 [Exploring Parallel Optimizations for Dynamic Graph Algorithms](https://gist.github.com/wolfram77/191a04139b47d5a3823d89aa9657b9bc)
- 📓 [Exploring Optimizations for Dynamic Graph Algorithms on the GPU](https://gist.github.com/wolfram77/2fb4a81b20bb91644e066a9946706baa)

<br>


## Technical Reports

- 📜 [STIC-D based Algorithmic Optimizations for Monolithic PageRank](https://gist.github.com/wolfram77/12e5a19ff081b2e3280d04331a9976ca)
- 📜 [Adjusting Datatype of Rank vector and CSR Representation with PageRank](https://gist.github.com/wolfram77/66882e8b7feaa8119f349a34906b14a7)
- 📜 [Parallelizing PageRank for a Volta GPU](https://gist.github.com/wolfram77/4ef16ab9699ac03a617b8731dd240e1f)
- 📜 [Dead End handling strategies for PageRank algorithm](https://gist.github.com/wolfram77/94c38b9cfbf0c855e5f42fa24a8602fc)
- 📜 [Rank adjustment strategies for Dynamic PageRank](https://gist.github.com/wolfram77/eb7a3b2e44e3c2069e046389b45ead03)
- 📜 [Effect of stepwise adjustment of Damping factor upon PageRank](https://gist.github.com/wolfram77/14272ddfd5fd7560a8c3edf899fc475b)
- 📜 [Adjusting PageRank parameters and Comparing results](https://gist.github.com/wolfram77/6dc740392d2f4e713fafdaea4ec1eba2)

<br>


## Reference Implementations

- 💾 [Single-threaded CPU-based PageRank](https://github.com/ionicf/pagerank-seq)
- 💾 [Switched thread/block-per-vertex CUDA-based PageRank](https://github.com/ionicf/pagerank-cuda)
- 💾 [NVIDIA's Graph Library nvGraph PageRank](https://github.com/ionicf/pagerank-nvgraph)

<br>


## Experiments

### PageRank Inequality

| Repository | Description |
|  ----  |  ----  |
| 🧫 [pagerank-inequality-handle-dead-ends](https://github.com/puzzlef/pagerank-inequality-handle-dead-ends) | Comparison of inequality in ranks of vertices with different dead end handling strategies. |
| 🧫 [pagerank-inequality-minimize-deterministic](https://github.com/puzzlef/pagerank-inequality-minimize-deterministic) | Comparison of deterministic heuristics for minimization of inequality in ranks of vertices. |
| 🧪 [pagerank-inequality-minimize-deterministic-pick-best](https://github.com/puzzlef/pagerank-inequality-minimize-deterministic-pick-best) | Pick the best deterministic heuristic for minimization of inequality in ranks of vertices. |

<br>


### Optimizations for PageRank

| Repository | Description |
|  ----  |  ----  |
| 🧫 [pagerank-ordered-vs-unordered](https://github.com/puzzlef/pagerank-ordered-vs-unordered) | Comparison of ordered vs unordered vertex processing in PageRank algorithm for link analysis. |
|  |  |
| 🧪 [pagerank-multiple-damping-single-vs-block](https://github.com/puzzlef/pagerank-multiple-damping-single-vs-block) | Comparing performance of single vs block multiple damping factor based ranks for PageRank. |
| 🧪 [pagerank-cuda-multiple-damping-single-vs-block](https://github.com/puzzlef/pagerank-cuda-multiple-damping-single-vs-block) | Comparing performance of single vs block multiple damping factor based ranks for PageRank. |
|  |  |
| 🧪 [pagerank-extrapolation-aitken](https://github.com/puzzlef/pagerank-extrapolation-aitken) | Analyzing the effect of using Aitken extrapolation with PageRank. |
|  |  |
| 🧫 [pagerank-adjust-iteration-scaling](https://github.com/puzzlef/pagerank-adjust-iteration-scaling) | Comparing the effect of using different per-iteration rank scaling, with PageRank. |
| 🧫 [pagerank-cuda-adjust-iteration-scaling](https://github.com/puzzlef/pagerank-cuda-adjust-iteration-scaling) | Comparing the effect of using different per-iteration rank scaling, with CUDA-based PageRank. |
|  |  |
| 🧫 [pagerank-optimization-split-components](https://github.com/puzzlef/pagerank-optimization-split-components) | Performance benefit of PageRank with vertices split by components. |
| 🧫 [pagerank-optimization-skip-inidenticals](https://github.com/puzzlef/pagerank-optimization-skip-inidenticals) | Performance benefit of skipping in-identical vertices for PageRank. |
| 🧫 [pagerank-optimization-skip-chains](https://github.com/puzzlef/pagerank-optimization-skip-chains) | Performance benefit of skipping chain vertices for PageRank. |
| 🧫 [pagerank-optimization-skip-converged](https://github.com/puzzlef/pagerank-optimization-skip-converged) | Performance benefit of skipping converged vertices for PageRank. |
| 🧫 [pagerank-cuda-optimization-split-components](https://github.com/puzzlef/pagerank-cuda-optimization-split-components) | Performance benefit of CUDA based PageRank with vertices split by components. |
| 🧫 [pagerank-cuda-optimization-skip-inidenticals](https://github.com/puzzlef/pagerank-cuda-optimization-skip-inidenticals) | Performance benefit of skipping in-identical vertices for CUDA based PageRank. |
| 🧫 [pagerank-cuda-optimization-skip-chains](https://github.com/puzzlef/pagerank-cuda-optimization-skip-chains) | Performance benefit of skipping chain vertices for CUDA based PageRank. |
| 🧫 [pagerank-cuda-optimization-skip-converged](https://github.com/puzzlef/pagerank-cuda-optimization-skip-converged) | Performance benefit of skipping converged vertices for CUDA based PageRank. |
|  |  |
| 🧫 [pagerank-float-vs-bfloat16](https://github.com/puzzlef/pagerank-float-vs-bfloat16) | Comparison of PageRank using float vs bfloat16 as the storage type. |
| 🧫 [pagerank-adjust-rank-datatype](https://github.com/puzzlef/pagerank-adjust-rank-datatype) | Performance of PageRank using 32-bit floats vs 64-bit floats for the rank vector. |
| 🧫 [pagerank-nvgraph-adjust-rank-datatype](https://github.com/puzzlef/pagerank-nvgraph-adjust-rank-datatype) | Performance of nvGraph PageRank using 32-bit floats vs 64-bit floats for the rank vector. |
| 🧫 [pagerank-cuda-adjust-rank-datatype](https://github.com/puzzlef/pagerank-cuda-adjust-rank-datatype) | Performance of CUDA-based PageRank using 32-bit floats vs 64-bit floats for the rank vector. |
| 🧫 [https://github.com/puzzlef/pagerank-adjust-csr-datatype](https://github.com/puzzlef/pagerank-adjust-csr-datatype) | Performance of PageRank using 32-bit ints vs 64-bit ints for the CSR representation. |
| 🧫 [pagerank-cuda-adjust-csr-datatype](https://github.com/puzzlef/pagerank-cuda-adjust-csr-datatype) | Performance of CUDA-based PageRank using 32-bit ints vs 64-bit ints for the CSR representation. |
|  |  |
| 🧫 [pagerank-handle-dead-ends](https://github.com/puzzlef/pagerank-handle-dead-ends) | Comparing various strategies of handling dead ends for PageRank. |
| 🧫 [pagerank-dynamic-handle-dead-ends](https://github.com/puzzlef/pagerank-dynamic-handle-dead-ends) | Comparing various strategies of handling dead ends for incremental/dynamic PageRank. |
|  |  |
| 🧫 [pagerank-incremental-adjust-ranks](https://github.com/puzzlef/pagerank-incremental-adjust-ranks) | Comparing strategies to update ranks for incremental/dynamic PageRank. |
|  |  |
| 🧫 [pagerank-adjust-damping-factor-stepwise.js](https://github.com/puzzlef/pagerank-adjust-damping-factor-stepwise.js) | Experimenting PageRank improvement by adjusting damping factor (α) between iterations. |
|  |  |
| 🧫 [pagerank-adjust-damping-factor](https://github.com/puzzlef/pagerank-adjust-damping-factor) | Comparing the effect of using different values of damping factor, with PageRank. |
| 🧫 [pagerank-adjust-tolerance-function](https://github.com/puzzlef/pagerank-adjust-tolerance-function) | Comparing the effect of using different functions for convergence check, with PageRank. |
| 🧫 [pagerank-adjust-tolerance](https://github.com/puzzlef/pagerank-adjust-tolerance) | Comparing the effect of using different values of tolerance, with PageRank. |
| 🧫 [pagerank-cuda-adjust-damping-factor](https://github.com/puzzlef/pagerank-cuda-adjust-damping-factor) | Comparing the effect of using different values of damping factor, with CUDA-based PageRank. |
| 🧫 [pagerank-cuda-adjust-tolerance-function](https://github.com/puzzlef/pagerank-cuda-adjust-tolerance-function) | Comparing the effect of using different functions for convergence check, with CUDA-based PageRank. |
| 🧫 [pagerank-cuda-adjust-tolerance](https://github.com/puzzlef/pagerank-cuda-adjust-tolerance) | Comparing the effect of using different values of tolerance, with CUDA-based PageRank. |

<br>


### Levelwise PageRank (vs Monolithic)

| Repository | Description |
|  ----  |  ----  |
| 🧫 [pagerank-multi-monolithic-vs-levelwise](https://github.com/puzzlef/pagerank-multi-monolithic-vs-levelwise) | Performance of Monolithic PageRank with vertices split by components vs Levelswise PageRank with topologically-ordered levels of components. |
| 🧫 [pagerank-multi-monolithic-vs-levelswise](https://github.com/puzzlef/pagerank-multi-monolithic-vs-levelswise) | Performance of Monolithic PageRank with vertices split by components vs Levelswise PageRank with topologically-ordered combined levels of components. |
| 🧫 [pagerank-multi-adjust-batch](https://github.com/puzzlef/pagerank-multi-adjust-batch) | Performance of Monolithic (split)/Levelwise PageRank with varying batch size for the same delta. |

<br>


### Componentwise PageRank

| Repository | Description |
|  ----  |  ----  |
| 🧫 [pagerank-componentwise-skip-teleport](https://github.com/puzzlef/pagerank-componentwise-skip-teleport) | Checking the performance benefit of Componentwise PageRank when teleport calculation is skipped. |
| 🧫 [pagerank-componentwise-adjust-component-size](https://github.com/puzzlef/pagerank-componentwise-adjust-component-size) | Comparing various min. component sizes for topologically-ordered components (Componentwise) PageRank. |
| 🧫 [pagerank-componentwise-adjust-compute-size](https://github.com/puzzlef/pagerank-componentwise-adjust-compute-size) | Comparing various min. compute sizes for Componentwise PageRank. |
| 🧫 [pagerank-componentwise-perform-initialization](https://github.com/puzzlef/pagerank-componentwise-perform-initialization) | Comparing various strategies of performing initialization of ranks for Componentwise PageRank. |
| 🧫 [pagerank-componentwise-adjust-monolithic-iterations](https://github.com/puzzlef/pagerank-componentwise-adjust-monolithic-iterations) | Finding suitable number of monolithic PageRank iterations for initialization of ranks with Componentwise PageRank. |
| 🧫 [pagerank-componentwise-adjust-damping-factor](https://github.com/puzzlef/pagerank-componentwise-adjust-damping-factor) | Comparing the effect of using different values of damping factor, with Componentwise PageRank. |
| 🧫 [pagerank-componentwise-adjust-tolerance-function-analysis](https://github.com/puzzlef/pagerank-componentwise-adjust-tolerance-function-analysis) | Analysing the effect of using different error measurement functions, with Componentwise PageRank. |
| 🧫 [pagerank-componentwise-adjust-tolerance-analysis](https://github.com/puzzlef/pagerank-componentwise-adjust-tolerance-analysis) | Analysing the effect of using different values of tolerance, with Componentwise PageRank. |
| 🧫 [pagerank-componentwise-adjust-tolerance-function](https://github.com/puzzlef/pagerank-componentwise-adjust-tolerance-function) | Comparing the effect of using different functions for convergence check, with Componentwise PageRank. |
| 🧫 [pagerank-componentwise-adjust-tolerance](https://github.com/puzzlef/pagerank-componentwise-adjust-tolerance) | Comparing the effect of using different values of tolerance, with Componentwise PageRank. |
| 🧫 [pagerank-componentwise-adjust-tolerance](https://github.com/puzzlef/pagerank-componentwise-adjust-tolerance) | Comparing the effect of using different values of tolerance, with Componentwise PageRank. |
|  |  |
| 🧫 [pagerank-componentwise-static-vs-dynamic](https://github.com/puzzlef/pagerank-componentwise-static-vs-dynamic) | Performance of Componentwise based static vs dynamic PageRank. |
| 🧫 [pagerank-componentwise-static-vs-dynamic-with-mtx-insertions](https://github.com/puzzlef/pagerank-componentwise-static-vs-dynamic-with-mtx-insertions) | Performance of static vs dynamic Componentwise PageRank. |
| 🧫 [pagerank-componentwise-static-vs-dynamic-with-mtx-deletions](https://github.com/puzzlef/pagerank-componentwise-static-vs-dynamic-with-mtx-deletions) | Performance of Componentwise based static vs dynamic PageRank. |
| 🧫 [pagerank-componentwise-dynamic-validate-skip-unchanged-components](https://github.com/puzzlef/pagerank-componentwise-dynamic-validate-skip-unchanged-components) | Checking for correctness of Componentwise PageRank when unchanged components are skipped. |
| 🧫 [pagerank-componentwise-dynamic-skip-unchanged-components](https://github.com/puzzlef/pagerank-componentwise-dynamic-skip-unchanged-components) | Checking the performance benefit of Componentwise PageRank when unchanged components are skipped. |
| 🧫 [pagerank-componentwise-dynamic-skip-unchanged-components](https://github.com/puzzlef/pagerank-componentwise-dynamic-skip-unchanged-components) | Checking the performance benefit of Componentwise PageRank when unchanged components are skipped. |
| 🧫 [pagerank-componentwise-dynamic-skip-unchanged-components-with-mtx-insertions](https://github.com/puzzlef/pagerank-componentwise-dynamic-skip-unchanged-components-with-mtx-insertions) | Checking the performance benefit of Componentwise PageRank when unchanged components are skipped. |
| 🧫 [pagerank-componentwise-dynamic-skip-unchanged-components-with-mtx-deletions](https://github.com/puzzlef/pagerank-componentwise-dynamic-skip-unchanged-components-with-mtx-deletions) | Checking the performance benefit of PageRank when unchanged components are skipped. |
|  |  |
| 🧫 [pagerank-componentwise-openmp-adjust-compute-size](https://github.com/puzzlef/pagerank-componentwise-openmp-adjust-compute-size) | Comparing various min. compute sizes for OpenMP-based Componentwise PageRank. |
|  |  |
| 🧫 [pagerank-componentwise-cuda-adjust-component-size](https://github.com/puzzlef/pagerank-componentwise-cuda-adjust-component-size) | Comparing various min. component sizes for topologically-ordered components. |
| 🧫 [pagerank-componentwise-cuda-adjust-compute-size](https://github.com/puzzlef/pagerank-componentwise-cuda-adjust-compute-size) | Comparing various min. compute sizes for topologically-ordered components (Componentwise CUDA) PageRank. |
| 🧫 [pagerank-cuda-monolithic-vs-componentwise](https://github.com/puzzlef/pagerank-cuda-monolithic-vs-componentwise) | Performance of standard (monolithic CUDA) vs topologically-ordered components (Componentwise CUDA) PageRank. |
|  |  |
| 🧫 [pagerank-componentwise-cuda-static-vs-dynamic](https://github.com/puzzlef/pagerank-componentwise-cuda-static-vs-dynamic) | Performance of static vs dynamic CUDA based Componentwise PageRank. |
| 🧫 [pagerank-componentwise-cuda-static-vs-dynamic-with-mtx-insertions](https://github.com/puzzlef/pagerank-componentwise-cuda-static-vs-dynamic-with-mtx-insertions) | Performance of CUDA based static vs dynamic Componentwise PageRank. |


### Monolithic PageRank (standard)

| Repository | Description |
|  ----  |  ----  |
| 🧫 [pagerank-push-vs-pull.js](https://github.com/puzzlef/pagerank-push-vs-pull.js) | Performance of contribution-push based vs contribution-pull based PageRank. |
| 🧫 [pagerank-push-vs-pull](https://github.com/puzzlef/pagerank-push-vs-pull) | Performance of contribution-push based vs contribution-pull based PageRank. |
| 🧫 [pagerank-class-vs-csr](https://github.com/puzzlef/pagerank-class-vs-csr) | Performance of C++ DiGraph class based vs CSR based PageRank. |
|  |  |
| 🧫 [pagerank-dynamic-measure-tolerance](https://github.com/puzzlef/pagerank-dynamic-measure-tolerance) | Performance comparison of using error measurement strategies with dynamic PageRank. |
| 🧫 [pagerank-static-vs-dynamic](https://github.com/puzzlef/pagerank-static-vs-dynamic) | Performance of static vs dynamic PageRank. |
| 🧫 [pagerank-adjust-mode](https://github.com/puzzlef/pagerank-adjust-mode) | Comparing the performance of static, incremental, and dynamic PageRank. |
| 🧫 [pagerank-loop-adjust-mode](https://github.com/puzzlef/pagerank-loop-adjust-mode) | Comparing the performance of static, incremental, and dynamic PageRank; with loop-based dead end handling strategy. |
|  |  |
| 🧫 [pagerank-openmp-adjust-schedule](https://github.com/puzzlef/pagerank-openmp-adjust-schedule) | Comparing various schedules for OpenMP-based PageRank. |
| 🧫 [pagerank-openmp-uniform-vs-hybrid](https://github.com/puzzlef/pagerank-openmp-uniform-vs-hybrid) | Performance of uniform-OpenMP based vs hybrid-OpenMP based PageRank. |
| 🧫 [pagerank-sequential-vs-openmp](https://github.com/puzzlef/pagerank-sequential-vs-openmp) | Performance of sequential execution based vs OpenMP based PageRank. |
|  |  |
| 🧫 [pagerank-sequential-vs-nvgraph](https://github.com/puzzlef/pagerank-sequential-vs-nvgraph) | Performance of sequential execution based vs nvGraph based PageRank. |
| 🧫 [pagerank-openmp-vs-nvgraph](https://github.com/puzzlef/pagerank-openmp-vs-nvgraph) | Performance of OpenMP based vs nvGraph based PageRank. |
| 🧫 [pagerank-nvgraph-static-vs-dynamic](https://github.com/puzzlef/pagerank-nvgraph-static-vs-dynamic) | Performance of nvGraph based static vs dynamic PageRank. |
|  |  |
| 🧫 [pagerank-cuda-thread-adjust-launch](https://github.com/puzzlef/pagerank-cuda-thread-adjust-launch) | Comparing various launch configs for CUDA thread-per-vertex based PageRank. |
| 🧫 [pagerank-cuda-thread-sort-by-indegree](https://github.com/puzzlef/pagerank-cuda-thread-sort-by-indegree) | Experimenting the effect of sorting vertices and/or edges by in-degree for CUDA thread-per-vertex based PageRank. |
| 🧫 [pagerank-cuda-block-adjust-launch](https://github.com/puzzlef/pagerank-cuda-block-adjust-launch) | Comparing various launch configs for CUDA block-per-vertex based PageRank. |
| 🧫 [pagerank-cuda-block-sort-by-indegree](https://github.com/puzzlef/pagerank-cuda-block-sort-by-indegree) | Experimenting the effect of sorting vertices and/or edges by in-degree for CUDA block-per-vertex based PageRank. |
| 🧫 [pagerank-cuda-switched-sort-by-indegree](https://github.com/puzzlef/pagerank-cuda-switched-sort-by-indegree) | Experimenting the effect of sorting vertices and/or edges by in-degree for CUDA switched-per-vertex based PageRank. |
| 🧫 [pagerank-cuda-switched-adjust-switch-point](https://github.com/puzzlef/pagerank-cuda-switched-adjust-switch-point) | Comparing various switch points for CUDA switched-per-vertex based PageRank. |
| 🧫 [pagerank-cuda-switched-adjust-block-launch](https://github.com/puzzlef/pagerank-cuda-switched-adjust-block-launch) | Comparing various launch configs for CUDA switched-per-vertex based PageRank, focusing on block approach. |
| 🧫 [pagerank-cuda-switched-adjust-thread-launch](https://github.com/puzzlef/pagerank-cuda-switched-adjust-thread-launch) | Comparing various launch configs for CUDA switched-per-vertex based PageRank, focusing on thread approach. |
| 🧫 [pagerank-cuda-adjust-compute-size](https://github.com/puzzlef/pagerank-cuda-adjust-compute-size) | Comparing various min. compute sizes for CUDA based PageRank. |
| 🧫 [pagerank-nvgraph-vs-cuda](https://github.com/puzzlef/pagerank-nvgraph-vs-cuda) | Performance of nvGraph vs CUDA based PageRank. |
|  |  |
| 🧫 [pagerank-cuda-static-vs-incremental](https://github.com/puzzlef/pagerank-cuda-static-vs-incremental) | Performance of static vs incremental CUDA based PageRank. |
| 🧫 [pagerank-cuda-static-vs-incremental-with-mtx-insertions](https://github.com/puzzlef/pagerank-cuda-static-vs-incremental-with-mtx-insertions) | Performance of static vs incremental CUDA based PageRank. |
| 🧫 [pagerank-cuda-optimized-dynamic-monolithic-vs-levelwise-with-mtx-insertions](https://github.com/puzzlef/pagerank-cuda-optimized-dynamic-monolithic-vs-levelwise-with-mtx-insertions) | Performance of CUDA based optimized dynamic monolithic vs levelwise PageRank. |
| 🧫 [pagerank-cuda-adjust-mode](https://github.com/puzzlef/pagerank-cuda-adjust-mode) | Comparing the performance of static, incremental, and dynamic CUDA-based PageRank. |

<br>


#### Research notes

- [An Improved PageRank Algorithm for Multilayer Networks](https://gist.github.com/wolfram77/e5ac7b1981c03d77f681806d2a36fede)
- [Scaling PageRank to 100 Billion Pages](https://gist.github.com/wolfram77/10964cd26f11f7a7299e7b74a0be7e7e)
- [I/O-Efficient Techniques for Computing Pagerank](https://gist.github.com/wolfram77/925cede0214aa0f391f34fa8ce137290)
- [Incremental Page Rank Computation on Evolving Graphs](https://gist.github.com/wolfram77/f0a7534d49d5c07d4479ec3966c5d635)
- [Incremental Page Rank Computation on Evolving Graphs](https://gist.github.com/wolfram77/ff390e0a4f823dde72a4c8193339bbe0)
- [Deeper Inside PageRank](https://gist.github.com/wolfram77/1337a3fcf5bded2bb67d9e66e20bc2ef)
- [Original Google Patent by Lawrence Page](https://gist.github.com/wolfram77/11bcdd4411b4c8bbe4a5d3c28fc8cfcf)
- [HyPR: Hybrid Page Ranking on Evolving Graphs](https://gist.github.com/wolfram77/50224c1bf5585a719b1c87113e95d074)
- [STIC-D: Algorithmic Techniques For Efficient Parallel Pagerank Computation on Real-World Graphs](https://gist.github.com/wolfram77/bb09968cc0e592583c4b180243697d5a)


#### Presentation notes

- [PageRank on an evolving graph - Yanzhao Yang](https://gist.github.com/wolfram77/084356d1720c4409fe443b41e990ba2c)

<br>
<br>


> The PageRank algorithm, a force to be reckoned with \
> A tool of the digital realm, a harbinger of the creeping void \
> It rules the web with an iron fist \
> Determining the worth of each page on the list \
>  \
> But beware, for it can be fickle and sly \
> A single misstep and your rank may fly \
> To the depths of the internet, forgotten and lost \
> Your page a ghost, your worth the cost \
>  \
> So tread carefully, and seek to rise \
> For the PageRank algorithm never sleeps, it never dies \
> It looms over the web, a shadowy specter \
> Waiting to judge the worth of each web visitor \
>  \
> It computes the worth of each page with precision \
> Using an iterative process, a decision \
> Based on the links that connect us all \
> A web of influence, a digital hall \
>  \
> But beware the dead ends, the spider traps \
> The pages that lead nowhere, the infinite laps \
> For the PageRank algorithm sees all \
> A force of darkness, a digital wall \
>  \
> But beware also the fixed and temporal graphs \
> The changing links, the shifting paths \
> For the PageRank algorithm must adapt \
> To the ever-shifting web, a digital pact \
>  \
> And beware the quirks of parallelism \
> The OpenMP threads, the race to finish \
> For the PageRank algorithm is a force of might \
> A tool of the void, a digital knight \
>  \
> So beware, dear traveler of the web \
> For the PageRank algorithm is a force to be feared \
> It determines your worth with a single glance \
> A tool of the void, a dark and sinister dance
