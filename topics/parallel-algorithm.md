In computer science, a parallel algorithm, as opposed to a traditional serial
algorithm, is an algorithm which can do multiple operations in a given time. It
has been a tradition of computer science to describe serial algorithms in
abstract machine models, often the one known as random-access machine. [(1)]

[(1)]: https://en.wikipedia.org/wiki/Parallel_algorithm

<br>


## Experiments

### Primitive operations

| Repository | Description |
|  ----  |  ----  |
| 🧫 [vector-atomic-access](https://github.com/puzzlef/vector-atomic-access) | Compare ways to access elements of a vector atomically. |
|  |  |
| 🧫 [search-linear-vs-binary](https://github.com/puzzlef/search-linear-vs-binary) | Comparing when is linear search faster than binary search. |
|  |  |
| 🧫 [sum-float-vs-bfloat16](https://github.com/puzzlef/sum-float-vs-bfloat16) | Performance of vector element sum using float vs bfloat16 as the storage type. |
|  |  |
| 🧫 [sum-openmp-adjust-schedule](https://github.com/puzzlef/sum-openmp-adjust-schedule) | Comparing various schedules for OpenMP-based vector element sum. |
| 🧫 [sum-sequential-vs-openmp](https://github.com/puzzlef/sum-sequential-vs-openmp) | Performance of sequential vs OpenMP-based vector element sum. |
|  |  |
| 🧫 [sum-cuda-memcpy-adjust-launch](https://github.com/puzzlef/sum-cuda-memcpy-adjust-launch) | Comparing various launch configs for CUDA based vector element sum (memcpy). |
| 🧫 [sum-cuda-memcpy-adjust-duty](https://github.com/puzzlef/sum-cuda-memcpy-adjust-duty) | Comparing various per-thread duty numbers for CUDA based vector element sum (memcpy). |
| 🧫 [sum-cuda-inplace-adjust-launch](https://github.com/puzzlef/sum-cuda-inplace-adjust-launch) | Comparing various launch configs for CUDA based vector element sum (in-place). |
| 🧫 [sum-cuda-memcpy-vs-inplace](https://github.com/puzzlef/sum-cuda-memcpy-vs-inplace) | Performance of memcpy vs in-place based CUDA based vector element sum. |
|  |  |
| 🧫 [multiply-openmp-adjust-schedule](https://github.com/puzzlef/multiply-openmp-adjust-schedule) | Comparing various schedules for OpenMP-based element-by-element vector multiplication. |
| 🧫 [multiply-sequential-vs-openmp](https://github.com/puzzlef/multiply-sequential-vs-openmp) | Performance of sequential vs OpenMP-based element-by-element vector multiplication. |
|  |  |
| 🧫 [multiply-cuda-adjust-launch](https://github.com/puzzlef/multiply-cuda-adjust-launch) | Comparing various launch configs for CUDA based vector multiply. |
| 🧫 [multiply-cuda-adjust-duty](https://github.com/puzzlef/multiply-cuda-adjust-duty) | Comparing various per-thread duty numbers for CUDA based vector multiply. |

<br>


#### Research notes (Primitives)

- [Accelerating sparse matrix-vector multiplication in iterative methods using GPU](https://gist.github.com/wolfram77/7e1d39edf5bbec61876d43269af72ed8)
- [A Study of BFLOAT16 for Deep Learning Training](https://gist.github.com/wolfram77/7b75d693bbd18b2607342f8dd6bb6b0d)
- [Hybrid Multicore Computing](https://gist.github.com/wolfram77/05dab9b615b6fb2db22a3993251d01a6)


#### Article notes

- [NVIDIA Tesla V100 GPU Architecture Whitepaper](https://gist.github.com/wolfram77/a42aeb021a2fec7b7e85ceb71b398772)
- [Checking NVIDIA Tesla V100 machine details](https://gist.github.com/wolfram77/c7fb88feffe6df670eabc4861eda8154)
- [Introduction to Level Zero API for Heterogeneous Programming](https://gist.github.com/wolfram77/ac0388a5409fa3871b609e5abf6d2967)
- [Optimizing Parallel Reduction in CUDA](https://gist.github.com/wolfram77/84399281f104446226701723eb310241)
- [Variadic CRTP](https://gist.github.com/wolfram77/1e84da30db559b34622ef85aeb97980a)


#### Book notes

- [CUDA by Example](https://gist.github.com/wolfram77/72c51e494eaaea1c21a9c4021ad0f320)
