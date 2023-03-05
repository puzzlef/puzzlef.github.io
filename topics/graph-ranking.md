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

<br>


#### Presentation notes

- [PageRank on an evolving graph - Yanzhao Yang](https://gist.github.com/wolfram77/084356d1720c4409fe443b41e990ba2c)

<br>


## Experiments

### Levelwise/Monolithic PageRank

| Repository | Description |
|  ----  |  ----  |
| 🧪 [pagerank-levelwise](https://github.com/puzzlef/pagerank-levelwise) | Design of Levelwise PageRank algorithm for link analysis. |
| 🧪 [pagerank-levelwise-dynamic](https://github.com/puzzlef/pagerank-levelwise-dynamic) | Design of Levelwise Dynamic PageRank algorithm for link analysis. |
| 🧪 [pagerank-levelwise-cuda](https://github.com/puzzlef/pagerank-levelwise-cuda) | Design of CUDA-based Levelwise PageRank algorithm for link analysis. |
| 🧪 [pagerank-levelwise-cuda-dynamic](https://github.com/puzzlef/pagerank-levelwise-cuda-dynamic) | Design of CUDA-based Levelwise Dynamic PageRank algorithm for link analysis. |
|  |  |
| 🧪 [pagerank-levelwise-multi-dynamic](https://github.com/puzzlef/pagerank-levelwise-multi-dynamic) | Comparision of OpenMP and CUDA-based, Monolithic and Levelwise Dynamic PageRank algorithms. |

<br>


### Standard PageRank

| Repository | Description |
|  ----  |  ----  |
| 🧫 [pagerank.js](https://github.com/puzzlef/pagerank.js) | Design of PageRank algorithm for link analysis in JavaScript. |
|  |  |
| 🧫 [pagerank](https://github.com/puzzlef/pagerank) | Design of PageRank algorithm for link analysis. |
| 🧫 [pagerank-dynamic](https://github.com/puzzlef/pagerank-dynamic) | Design of Dynamic PageRank algorithm for link analysis. |
| 🧫 [pagerank-openmp](https://github.com/puzzlef/pagerank-openmp) | Design of OpenMP-based PageRank algorithm for link analysis. |
| 🧫 [pagerank-openmp-dynamic](https://github.com/puzzlef/pagerank-openmp-dynamic) | Design of OpenMP-based Dynamic PageRank algorithm for link analysis. |
| 🧫 [pagerank-nvgraph](https://github.com/puzzlef/pagerank-nvgraph) | Comparision of nvGraph PageRank with CPU-based implementations. |
| 🧫 [pagerank-nvgraph-dynamic](https://github.com/puzzlef/pagerank-nvgraph-dynamic) | Comparision of Dynamic nvGraph PageRank with Static approach. |
| 🧫 [pagerank-cuda](https://github.com/puzzlef/pagerank-cuda) | Design of CUDA-based PageRank algorithm for link analysis. |
| 🧫 [pagerank-cuda-dynamic](https://github.com/puzzlef/pagerank-cuda-dynamic) | Design of CUDA-based Dynamic PageRank algorithm for link analysis. |
|  |  |
| 🧫 [pagerank-datatype](https://github.com/puzzlef/pagerank-datatype) | Comparison of PageRank algorithm using various datatypes. |
| 🧫 [pagerank-dead-ends](https://github.com/puzzlef/pagerank-dead-ends) | Comparing strategies of handling dead ends with PageRank algorithm for link analysis. |
| 🧫 [pagerank-multiple-damping](https://github.com/puzzlef/pagerank-multiple-damping) | Comparing performance of single vs block multiple damping factor based ranks for PageRank algorithm. |
| 🧫 [pagerank-optimization](https://github.com/puzzlef/pagerank-optimization) | Exploration of optimizations to PageRank algorithm for link analysis. |
| 🧫 [pagerank-cuda-optimization](https://github.com/puzzlef/pagerank-cuda-optimization) | Exploration of optimizations to CUDA-based PageRank algorithm for link analysis. |
| 🧫 [pagerank-minimize-inequality](https://github.com/puzzlef/pagerank-minimize-inequality) | Comparison of heuristics for minimization of inequality in ranks of vertices obtained with the PageRank algorithm. |

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
