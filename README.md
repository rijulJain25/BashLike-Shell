# BashLike-Shell
This shell is a little shell written in javascript that runs on the node.js platform

# How to use:
On a shell: Execute

```
$node shell.js
```


If all works it should boot up and run in root directory.


# What I put here:

The two files, ```shell.js``` and ```Generalise.js.```

# Generalise.js.
This handles all the commands like: 
```ls``` ```ls <directory_name>``` ```pwd``` ```<path_to_binary> <args>``` ```fd<args>```

```pwd``` - Prints current working directory.

```ls <directory_name>``` - Should work same as bash shell. Support for flags is not required.

```<path_to_binary> <args>```- When path to a binary is provided, that binary should be spawned as a child process. The binary must receive all the arguments passed as space separated like arg1 arg2 …

```fg <pid>``` - Brings the background process with process id <pid> to foreground.
exit - Closes the shell.


# shell.js
This is the main file, here: ```cd``` ```cd<directory_name>``` ```exit SIGINT```, ```CLRT_+Z``` have also being handled
  
```cd <directory_name>``` - work same as bash shell.
  
```exit``` - Closes the shell.
  
```Ctrl + C``` - Sends a SIGINT to the spawned process.
  
```Ctril + Z``` - Sends spawned process that is currently in foreground to the background. Prints it’s pid after setting the current process as background process.



This is a fully functional shell. It can execute anything bash can execute because it simply sends the commands on to the opperating systems shell.
