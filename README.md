# RideOut
1. ## Description
My idea is to create a 2D static shooting web-game. With static I mean that there will be a
static environment/image which the character will be able to navigate in (i.e., there will not be
an environment to explore, only one specific environment per level).
So, first the user will control a character with the arrows left, right, up, down and will be
shooting with the space. There will be multiple enemies (the first thought is zombies, but that
depends on if I find appropriate graphics for it), which approach the character from multiple
positions. The players work will be to eliminate these enemies and receive score. When
specific score is reached there will be a level up, and with a level up the user will be rewarded
with new stronger weapons. Each level will be harder than the previous one, and more, faster,
and stronger enemies will approach. I’m thinking of also making a boss zombie appear which
will take some time to defeat every 3rd level or so.
Once the player lose, their high score will be saved in a list with all the players high scores.
There might be an option to save and load the game, if this is possible to be done with
databases, I will look further into it.
I came to think about this idea since I used to play a lot of web-games in the past, and one of
my favorites was one called boxHead. So, I thought about creating a game with boxHead as a
reference in my mind. Unfortunately, I haven’t found a working link with this game, since
every link requires adobe flash that is no longer supported.

2. ## Front-end
For the front-end I will use a JavaScript framework called Phaser which has some similarity
to react but is a bit easier. Since react is something I plan to learn in the future I think this will
be a good start. Phaser uses HTML element canvas and has a lot of built-in methods for
rendering objects inside canvas. Phaser also has a lot of documentation with different
examples on their website and a big community, which is good since if problems arise, this
will be useful to debug issues.

3. ## Back-end/Database
For the back end, node.js and probably mongoose will be used to communicate with the
MongoDB database. Since everyone seem to use expressJs to use REST API, that’s probably
what’s going to be used.
So, there will be one collection with the user information such unique user_id, username and
password. Then there is a collection named high_score which will receive the user_id and the
high_score. Then I will “join” (which it’s called in MySQL) these two collections with the
lookup method which I researched into, to create one collection with combined values to be
able to query out the username and high-score in the high-score table which will be accessible
through the game. Then there will be a database with weapon_upgrades which holds prerecorded values on which guns are available and when (which high-score users have to reach
to receive the gun) the user can receive it. I am thinking of using an image to display the
current weapon which also will be stored in URL form in the database (read in stack overflow
that this is possible, so I will try it out).

4. ## API
The user will be able to register as user through a form, this form will return input information
to the back end through post, since we do not want to share vulnerable information in the
URL.
Some routes will be:
/register : adds/register new user to the database
Users/high_score/all : returns all the users high_score
Users/high_score?username=”Antonios” : returns all the high_score of Antonios

5. ## Schedule
<table><td>W5 5/1</td> <td> <ul><li>Find and discuss idea</li>
<li>complete proposal</li></ul></td></table>

<table><td>W7 19/2</td><td><ul><li>Finish the front-end of the game, find appropriate graphics,
image, sounds etc.</li>
<li>Start with making the game playable like making the
characters/enemies move</li></ul></td></table>

<table><td>W9 5/3</td> <td><ul><li>Most parts of the game are playable, characters can move,
shoot, switch weapons.</li>
<li>start with the database and high score inputs – login
system</li>
<li>Bonus, save and load progress, and chat function</li></ul></td></table>


<table><td>W11 19/3</td> <td><ul><li>Game is completed</li>
<li>Login function and high score working.</li>
<li>Minor fixes on all these things.</li></ul></td></table>
