In computer science, a parallel algorithm, as opposed to a traditional serial
algorithm, is an algorithm which can do multiple operations in a given time. It
has been a tradition of computer science to describe serial algorithms in
abstract machine models, often the one known as random-access machine. [(1)]

[(1)]: https://en.wikipedia.org/wiki/Parallel_algorithm

<br>


#### Research notes (Primitives)

- [Accelerating sparse matrix-vector multiplication in iterative methods using GPU](https://gist.github.com/wolfram77/7e1d39edf5bbec61876d43269af72ed8)
- [A Study of BFLOAT16 for Deep Learning Training](https://gist.github.com/wolfram77/7b75d693bbd18b2607342f8dd6bb6b0d)
- [Hybrid Multicore Computing](https://gist.github.com/wolfram77/05dab9b615b6fb2db22a3993251d01a6)

<br>


#### Article notes

- [NVIDIA Tesla V100 GPU Architecture Whitepaper](https://gist.github.com/wolfram77/a42aeb021a2fec7b7e85ceb71b398772)
- [Checking NVIDIA Tesla V100 machine details](https://gist.github.com/wolfram77/c7fb88feffe6df670eabc4861eda8154)
- [Introduction to Level Zero API for Heterogeneous Programming](https://gist.github.com/wolfram77/ac0388a5409fa3871b609e5abf6d2967)
- [Optimizing Parallel Reduction in CUDA](https://gist.github.com/wolfram77/84399281f104446226701723eb310241)
- [Variadic CRTP](https://gist.github.com/wolfram77/1e84da30db559b34622ef85aeb97980a)

<br>


#### Book notes

- [CUDA by Example](https://gist.github.com/wolfram77/72c51e494eaaea1c21a9c4021ad0f320)

<br>


## Experiments

### Primitive operations

| Repository | Description |
|  ----  |  ----  |
| 🧫 [vector-atomic-access](https://github.com/puzzlef/vector-atomic-access) | Compare ways to access elements of a vector atomically. |
|  |  |
| 🧫 [vector-search](https://github.com/puzzlef/vector-search) | Comparing approaches for searching an element in a vector. |
| 🧫 [vector-sum](https://github.com/puzzlef/vector-sum) | Comparison of vector element sum using various data types. |
| 🧫 [vector-sum-openmp](https://github.com/puzzlef/vector-sum-openmp) | Comparing performance of sequential vs OpenMP-based vector element sum. |
| 🧫 [vector-sum-cuda](https://github.com/puzzlef/vector-sum-cuda) | Comparing performance of sequential vs CUDA-based vector element sum. |
| 🧫 [vector-max-cuda](https://github.com/puzzlef/vector-max-cuda) | Performance of sequential vs CUDA-based vector element max. |
| 🧫 [vector-multiplication-openmp](https://github.com/puzzlef/vector-multiplication-openmp) | Comparing performance of sequential vs OpenMP-based element-by-element vector multiplication. |
| 🧫 [vector-multiplication-cuda](https://github.com/puzzlef/vector-multiplication-cuda) | Comparing approaches for CUDA-based vector multiplication. |
