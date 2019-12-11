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

- the FIRST line holds the room dimensions (X Y), separated by a single space (all
coordinates will be presented in this format)
- the SECOND line holds the hoover position
- the LAST line then always contains the driving instructions (at least one)
- All OTHER lines contain the zero or more positions of patches of dirt (one per
line)


### Output
location: STDOUT of terminal or console.log if browser based
format example:
```
1 3
1
```
- The FIRST line of your program output should display the X and Y coordinates
marking the position of the hoover after processing all commands.
- The SECOND line of the program output should display the number of patches of
dirt the robot cleaned up.

### REMEMBER
- GRID coordinates are for top-rightmost postion.
- DIRT coordinates are for the bottom-leftmost point of a square.

### Initial TODO list
[] User stories
[] Simplest tests - behaviour, not state
[] Check how to input.txt into code

