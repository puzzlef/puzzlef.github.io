<!-- | 🧪 [XXX](https://github.com/puzzlef/XXX) | DDD | -->

The world is in the midst of an **unprecedented growth of interconnected data**, and *graph processing systems* are expected to play a vital role. *Conventional graph algorithms* designed for static graphs **struggle** to efficiently handle the continuous changes and updates that occur within these networks. As these networks grow in complexity, the need for algorithms capable of *efficiently analyzing dynamic graph data* is increasingly crucial. Our research aims to address the computational challenges posed by the need for real-time insights and scalable processing in dynamic and complex networks.

However, many *dynamic algorithms* are **sequential**, tailored towards web graphs, do not utilize *reducibility*, locality benefits of SCCs, overestimate affected vertices, have *high overhead*, do not have *well optimized implementations*, do not take advantage of *auxiliary information*, and do not gracefully tolerate *soft-faults* which modern architectures introduce. Our dynamic approaches for PageRank and community detection address these issues. Our work has been accepted by *IPDPS workshops* (3), the *Euro-Par conference* (1), the *ICPP conference* (1), and the *Complex Networks conference* (1). Key outputs from our work include the design of a **common framework for dynamic graph algorithms**, and **techniques to address soft faults in dynamic algorithms**.

<!-- We are currently working on algorithms for link prediction, node similarity, fast loading of dynamic graphs, and generation of large realistic/constrained dynamic graph datasets. The development of dynamic algorithms for large-scale graph processing resonates with Microsoft's mission to empower individuals and organizations through innovative technology solutions. By collaborating with Microsoft Research India, we aim to further accelerate the adoption of our optimized algorithms and contribute to the advancement of graph analytics in real-world applications. -->

<br>


### Journal Articles

- 📰 [A Fast Parallel Approach for Neighborhood-based Link Prediction by Disregarding Large Hubs](https://onlinelibrary.wiley.com/doi/10.1002/cpe.8331) (Concurrency and Computation: Practice and Experience 2024, Wiley)
- 📰 [Parallel Multicore Algorithms for Community Detection in Dynamic Graphs](https://www.jstage.jst.go.jp/article/ijnc/15/1/15_2/_article/-char/ja/) (International Journal of Networking and Computing 2024)

<br>


### International Conferences

- 📰 [Dynamic Batch Parallel Algorithms for Updating PageRank](https://ieeexplore.ieee.org/abstract/document/9835216/) (IPDPSW ParSocial 2022, IEEE)
- 📰 [Shared-Memory Parallel Algorithms for Community Detection in Dynamic Graphs](https://ieeexplore.ieee.org/abstract/document/10596428/) (Outstanding paper, IPDPSW ADPCM 2024, IEEE)
- 📰 [Lock-free Computation of PageRank in Dynamic Graphs](https://ieeexplore.ieee.org/abstract/document/10596502/) (IPDPSW ParSocial 2024, IEEE)
- 📰 [Fast Leiden Algorithm for Community Detection in Shared Memory Setting](https://dl.acm.org/doi/abs/10.1145/3673038.3673146) (ICPP 2024, ACM)
- 📰 [DF* PageRank: Incrementally Expanding Approaches for Updating PageRank on Dynamic Graphs](https://link.springer.com/chapter/10.1007/978-3-031-69583-4_22) (Euro-Par 2024, Springer LNCS)
- 📰 [High-Speed Neighborhood-based Link Prediction by Disregarding Large Hubs](https://arxiv.org/abs/2401.11415) (Euro-Par 2024 PhD Symposium, Springer LNCS)
- 📰 [GVEL: Fast Graph Loading in Edgelist and Compressed Sparse Row (CSR) formats](https://arxiv.org/abs/2311.14650) (Euro-Par AMTE 2024, Springer LNCS)
- 📰 [GVE-LPA: Fast Label Propagation Algorithm (LPA) for Community Detection in Shared Memory Setting](https://arxiv.org/abs/2312.08140) (Euro-Par HiPES 2024, Springer LNCS)
- 📰 [High-Performance Implementation of Louvain Algorithm with Representational Optimizations](https://arxiv.org/abs/2312.04876) (Complex Networks 2024, Springer SCI)

<br>


### Posters

- 📰 [Shared-Memory Parallel Dynamic Louvain Algorithm for Community Detection](https://ieeexplore.ieee.org/abstract/document/10596440) (IPDPS Poster 2024, IEEE)
- 📰 [EvolvGraph: A Tool for Property-Constrained Generation of Dynamic Graphs](#) (HiPC 2024 SRS, IEEE)

<br>


### Technical Reports

- 📰 [Performance Comparison of Graph Representations Which Support Dynamic Graph Updates](https://arxiv.org/abs/2502.13862)
- 📰 [CPU vs. GPU for Community Detection: ... Insights from GVE-Louvain and ν-Louvain](https://arxiv.org/abs/2501.19004)
- 📰 [Memory Efficient GPU-based LPA for Community Detection on Large Graphs](https://arxiv.org/abs/2411.19901)
- 📰 [ν-LPA: Fast GPU-based Label Propagation Algorithm (LPA) for Community Detection](https://arxiv.org/abs/2411.11468)
- 📰 [Memory-Efficient Community Detection on Large Graphs Using Weighted Sketches](https://arxiv.org/abs/2411.02268)
- 📰 [Heuristic-based Dynamic Leiden ... Efficient Tracking of Communities on Evolving Graphs](https://arxiv.org/abs/2410.15451)
- 📰 [A Starting Point for Dynamic Community Detection with Leiden Algorithm](https://arxiv.org/abs/2405.11658)
- 📰 [DF Louvain: Fast Incrementally Expanding Approach for ... on Dynamic Graphs](http://arxiv.org/abs/2404.19634)
- 📰 [An Incrementally Expanding Approach for Updating PageRank on Dynamic Graphs](https://arxiv.org/abs/2401.03256)
- 📰 [GSL-LPA: Fast Label Propagation Algorithm (LPA) for Community Detection with no ...](https://arxiv.org/abs/2403.01261)
- 📰 [An Approach for Addressing Internally-Disconnected Communities in Louvain Algorithm](https://arxiv.org/abs/2402.11454)
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


### Funding

- [Scholarship for Events on Complex Systems (SECS)](https://yrcss.cssociety.org/grants/secs/) for attending Complex Networks 2024.

<br>


### Quick Links

- 👨‍🏫 [Top Researchers in High Performance Computing](details/researchers.md)
- 📰 [Top Research Papers in High Performance Computing](details/papers.md)
- 🎃 [Top Conferences in High Performance Computing](details/conferences.md)
- 📚 [Top Journals in High Performance Computing](details/journals.md)
- 📰 [Top Products in High Performance Computing](details/products.md)
- 💵 [Travel Grant for Conferences: Mayank Tripathi](https://github.com/mayank408/Travel-Grants)
- 🧵 [List of Available Datasets](details/datasets.md)
- 🧪 [List of Experiments](details/experiments.md)
- 📰 [Research Notes](details/notes.md)
