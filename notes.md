### Input

filename: input.txt
location: same directory as executable
format example:
 ```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```

- the first line holds the room dimensions (X Y), separated by a single space (all
coordinates will be presented in this format)
- the second line holds the hoover position
- subsequent lines contain the zero or more positions of patches of dirt (one per
line)
- the next line then always contains the driving instructions (at least one)


### Output

location: STDOUT of terminal or console.log if browser based
format example:
```
1 3
1
```
- The first line of your program output should display the X and Y coordinates
marking the position of the hoover after processing all commands.
- The second line of the program output should display the number of patches of
dirt the robot cleaned up.

