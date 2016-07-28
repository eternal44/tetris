# Cruising with tetris

## Installation
After you've downloaded the file open the index.html file.

## Time Spent
I spent 2 hours coding the project and about 15 minutes documenting it.

## My Approach
I broke the project down into multiple parts.  I started working on the "Multiple Shapes" portion but ran out of time there.

**Single Shape**
- render a board
- render a shape
- animate the shape to make it appear as if it were falling
- add keystroke event listeners to move shapes left & right

**Multiple Shapes**
- stop a shape from falling past previous shapes on the board
- randomoly generate shapes from a group of 3

**Clear lines**
- write a scoring system
- animate cleared shapes

## Points of Difficulty
Figuring out how to render shapes in the browser took a little bit of time but I settled with canvas.  I thought of rerendering the board with the shapes at the bottom for every turn but didn't get a chance to work on it due to time constraints.  

I also commented this in my code but I would have used a pseudoclassical pattern to randomly instantiate new shapes.  However, if I had to do this project again I'd focus on persisting objects at the bottom of the board.

