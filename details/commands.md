### Commands for HPC at SRMAP

```bash
# History of commands executed in the terminal
$ history 1000

# List running processes in a user-friendly way
$ htop

# Display information about the CPU architecture
$ lscpu

# List all nodes in the cluster with detailed information
$ pbsnodes -aSj

# Log in to a specific node (node01) for interactive work
$ ssh node01

# Display information about a specific node (node05)
$ pbsnodes node05

# Check the queue information for node05
$ pbsnodes node05 | grep queue

# Submit an interactive job requesting 48 CPUs and a walltime of 1 minute
$ qsub -I -l select=1:ncpus=48 -l walltime=00:01:00

# Submit an interactive job requesting 48 CPUs on node06 and exclusive access
$ qsub -I -l select=1:ncpus=48:host=node07 -l place=excl

# Submit a job using a script (reserve_node.sh)
$ qsub reserve_node.sh

# Check the queue status for the user "subhsahu"
$ qstat -u subhsahu

# Check the properties of the "short" queue to understand its configuration and limits
$ qstat -Qf short

# Trace the details of a specific job (job_id) to understand its execution and any issues
$ tracejob <job_id>

# Reserve a node (node07) for 1 minute using pbs_rsub
$ pbs_rsub -l select=1:ncpus=48:host=node07 -R 1454 -D 00:01:00

# Check the status of the submitted job
$ pbs_rstat -F <job_id>

# Check any messages or notifications in the mail system
$ mail

# Check available modules and load a specific version of GCC (10.2.0)
$ module avail gcc
$ module load gcc-10.2.0
```


Prepared by: [Subhajit Sahu](https://wolfram77.github.io)
