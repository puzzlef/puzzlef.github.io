<!-- | 🧪 [XXX](https://github.com/puzzlef/XXX) | DDD | -->

The world is in the midst of an **unprecedented growth of interconnected data**, and *graph processing systems* are expected to play a vital role. *Conventional graph algorithms* designed for static graphs **struggle** to efficiently handle the continuous changes and updates that occur within these networks. As these networks grow in complexity, the need for algorithms capable of *efficiently analyzing dynamic graph data* is increasingly crucial. Our research aims to address the computational challenges posed by the need for real-time insights and scalable processing in dynamic and complex networks.

However, many *dynamic algorithms* are **sequential**, tailored towards web graphs, do not utilize *reducibility*, locality benefits of SCCs, overestimate affected vertices, and have *high overhead*, implementations are *not well optimized*, do not take advantage of *auxiliary information*, and do not gracefully tolerate *soft-faults* which modern architectures introduce. Our dynamic approaches for PageRank and community detection address these issues. Our work has been accepted by *IPDPS workshops* (3), the *Euro-Par conference* (1), and the *ICPP conference* (1). Key outputs from our work include the design of a **common framework for dynamic graph algorithms**, and **techniques to address soft faults in dynamic algorithms**.

<!-- We are currently working on algorithms for link prediction, node similarity, fast loading of dynamic graphs, and generation of large realistic/constrained dynamic graph datasets. The development of dynamic algorithms for large-scale graph processing resonates with Microsoft's mission to empower individuals and organizations through innovative technology solutions. By collaborating with Microsoft Research India, we aim to further accelerate the adoption of our optimized algorithms and contribute to the advancement of graph analytics in real-world applications. -->

<br>


### Publications

- 📰 [Dynamic Batch Parallel Algorithms for Updating PageRank](https://ieeexplore.ieee.org/abstract/document/9835216/) (IPDPSW ParSocial 2022)
- 📰 Shared-Memory Parallel Algorithms for Community Detection in Dynamic Graphs (Outstanding paper awarded, IPDPSW ADPCM 2024)
- 📰 Lock-free Computation of PageRank in Dynamic Graphs (IPDPSW ParSocial 2024)
- 📰 [DF* PageRank: Improved Incrementally Expanding Approaches for Updating PageRank on Dynamic Graphs](https://arxiv.org/abs/2401.15870) (Accepted at Euro-Par 2024)
- 📰 [Fast Leiden Algorithm for Community Detection in Shared Memory Setting](https://arxiv.org/abs/2312.13936) (Accepted at ICPP 2024)

<br>


### Technical Reports

- 📰 [A Starting Point for Dynamic Community Detection with Leiden Algorithm](https://arxiv.org/abs/2405.11658)
- 📰 [DF Louvain: Fast Incrementally Expanding Approach for ... on Dynamic Graphs](http://arxiv.org/abs/2404.19634)
- 📰 [A Fast Parallel ... Neighborhood-based Link Prediction by Disregarding Large Hubs](https://arxiv.org/abs/2401.11415)
- 📰 [An Incrementally Expanding Approach for Updating PageRank on Dynamic Graphs](https://arxiv.org/abs/2401.03256)
- 📰 [GSL-LPA: Fast Label Propagation Algorithm (LPA) for Community Detection with no ...](https://arxiv.org/abs/2403.01261)
- 📰 [An Approach for Addressing Internally-Disconnected Communities in Louvain Algorithm](https://arxiv.org/abs/2402.11454)
- 📰 [GVE-LPA: Fast Label Propagation Algorithm (LPA) for Community Detection in Shared ...](https://arxiv.org/abs/2312.08140)
- 📰 [GVE-Louvain: Fast Louvain Algorithm for Community Detection in Shared Memory Setting](https://arxiv.org/abs/2312.04876)
- 📰 [GVEL: Fast Graph Loading in Edgelist and Compressed Sparse Row (CSR) formats](https://arxiv.org/abs/2311.14650)
- 📰 [Heuristics for Inequality minimization in PageRank values](https://arxiv.org/abs/2310.18537)
- 📰 [Enhancing Efficiency in Parallel Louvain Algorithm for Community Detection](https://arxiv.org/abs/2301.12390)
- 📰 [Effect of stepwise adjustment of Damping factor upon PageRank](https://arxiv.org/abs/2108.04150)

<br>


#### Manuscripts

- 📰 [STIC-D based Algorithmic Optimizations for Monolithic PageRank](https://gist.github.com/wolfram77/12e5a19ff081b2e3280d04331a9976ca)
- 📰 [Adjusting Datatype of Rank vector and CSR Representation with PageRank](https://gist.github.com/wolfram77/66882e8b7feaa8119f349a34906b14a7)
- 📰 [Parallelizing PageRank for a Volta GPU](https://gist.github.com/wolfram77/4ef16ab9699ac03a617b8731dd240e1f)
- 📰 [Dead End handling strategies for PageRank algorithm](https://gist.github.com/wolfram77/94c38b9cfbf0c855e5f42fa24a8602fc)
- 📰 [Rank adjustment strategies for Dynamic PageRank](https://gist.github.com/wolfram77/eb7a3b2e44e3c2069e046389b45ead03)
- 📰 [Effect of stepwise adjustment of Damping factor upon PageRank](https://gist.github.com/wolfram77/14272ddfd5fd7560a8c3edf899fc475b)
- 📰 [Adjusting PageRank parameters and Comparing results](https://gist.github.com/wolfram77/6dc740392d2f4e713fafdaea4ec1eba2)
- 📰 [Understand Problems](https://gist.github.com/wolfram77/be1b0cec6825515057058fe1dde843c9)

<br>


### Thesis Materials

- 📓 [Parallel Dynamic Graph Algorithms for Social Networks (Thesis Proposal Slides)](https://1drv.ms/b/s!ArJVU1dIBRJPuy4CtDRcNERiz0jh?e=OYK07W)
- 📓 [Exploring Parallel Optimizations for Dynamic Graph Algorithms](https://gist.github.com/wolfram77/191a04139b47d5a3823d89aa9657b9bc)
- 📓 [Exploring Optimizations for Dynamic Graph Algorithms on the GPU](https://gist.github.com/wolfram77/2fb4a81b20bb91644e066a9946706baa)
- 📓 [Design ... of a heterogeneous sensor-based embedded system for flood management](http://ethesis.nitrkl.ac.in/5910/1/110EC0181-8.pdf) (2014)
- 📝 [List of Research papers: Prof. Kishore Kothapalli, CSTAR, IIIT Hyderabad](https://gist.github.com/wolfram77/847fa70dd2c23a994b196f20e8e96814)
- 📜 [Submitting the Thesis Evaluation Request by MS/PhD Students (IIIT Hyderabad)](https://gist.github.com/wolfram77/28b1a9251c7e4ac36c233a6739c4c164)
- 📜 [The Purpose and Process of PhD Comprehensive VIVA Examination (IIIT Hyderabad)](https://gist.github.com/wolfram77/a7eb570fab6c166ae2f8bc6fb999d253)
- 📜 [Policy on stipend support for research students (IIIT Hyderabad)](https://gist.github.com/wolfram77/d8574485b6cd9b3724d788e7c8b2a27c)
- 📜 [Top CSE conferences list (IIIT Hyderabad)](https://gist.github.com/wolfram77/5565ff06dfe35c7f2e89051a5577622f)
- 📜 [Proceedings Scholar Metrics](https://gist.github.com/wolfram77/c7b93dd8662db6a682f284f4e189b07c)
- 📜 ["You and Your Research" by Richard W Hamming](https://gist.github.com/wolfram77/20a14377a80c2488ff329afc14ce3a97)


<br>


### Software

| Tool | Description |
|  ----  |  ----  |
| 📦 [nvgraph.sh](https://github.com/nodef/nvgraph.sh) | CLI for nvGraph, which is a GPU-based graph analytics library written by NVIDIA, using CUDA. |
| 📦 [snap-data.sh](https://github.com/nodef/snap-data.sh) | CLI for SNAP dataset, which is a collection of more than 50 large networks. |
| ⛏️ [graph-properties](https://github.com/ionicf/graph-properties) | List a few graph properties. |
| ⛏️ [graph-generate](https://github.com/ionicf/graph-generate) | Perform certain operations upon a fixed graph. |
| 🧵 [graphs](https://github.com/puzzlef/graphs) | A few sample graphs in Matrix Market (.mtx) format. |

<br>


### Others

- 👨‍🏫 [Top Researchers in High Performance Computing](details/researchers.md)
- 📰 [Top Research Papers in High Performance Computing](details/papers.md)
- 🎃 [Top Conferences in High Performance Computing](details/conferences.md)
- 📚 [Top Journals in High Performance Computing](details/journals.md)
- 💵 [Travel Grant for Conferences: Mayank Tripathi](https://github.com/mayank408/Travel-Grants)
- 🧪 [List of Experiments](details/experiments.md)
- 📰 [Research Notes](details/notes.md)
- 🧵 [Kaggle Datasets](https://www.kaggle.com/wolfram77/datasets)
