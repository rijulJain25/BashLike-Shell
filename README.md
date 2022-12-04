# BashLike-Shell
This shell is a little shell written in javascript that runs on the node.js platform

# How to use:
On a shell: Execute

```
$nodejs nsh.js
```


If all works it should boot up and run in root directory. If you are using windows you might have to execute node rather than nodejs.


# What I put here:

The two files, ```shell.js``` and ```Generalise.js.```

# Generalise.js.
This handles all the commands like: 
```ls``` ```ls <directory_name>``` ```pwd``` ```<path_to_binary> <args>``` ```fd<args>```

# shell.js
This is the main file, here: ```cd``` ```cd<directory_name>``` ```exit SIGINT```, ```CLRT_+Z``` have also being handled



This is a fully functional shell. It can execute anything bash can execute because it simply sends the commands on to the opperating systems shell.
