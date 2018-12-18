# Click-n-shoot-Game

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day      | Deliverable                                          | Status     |
| -------- | ---------------------------------------------------- | ---------- |
| Dec 17th | Project Description                                  | Complete   |
| Dec 17th | Wireframes / Priority Matrix / Functional Components | Complete   |
| Dec 17th | Core Application Structure (HTML, CSS, etc.)         | Incomplete |
| Dec 18th | Pseudocode / actual code                             | Incomplete |
| Dec 18th | Clickable enemies                                    | Incomplete |
| Dec 19th | Make enemies shoot you                               | Incomplete |
| Dec 19th | Enemies appear randomly                              | Incomplete |
| Dec 19th | Keep score                                           | Incomplete |
| Dec 20th | PostMvp                                              | Incomplete |
| Dec 20th | Quicktime Video                                      | Incomplete |
| Dec 21th | Present                                              | Incomplete |

## Project Description

This is a click-n-shoot game where you have a crosshair and you can kill enemies on the screen. They can kill you if you lose too much time.

## Wireframes
https://drive.google.com/open?id=1ddeeA9dvEupBN0VkjbT5xoJqxcfpYusO

## Priority Matrix

https://drive.google.com/open?id=197GHVp_gKiAplvAXyFjNHF7LVb1enJ-2

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

- Click the enemy to shoot them
- Make the enemies shoot you
- Enemies appear randomly
- Keep Score

#### PostMVP

- Landing page
- Different levels with faster enemies
- Boss fight
- Different movements
- Hiding enemies
- Reload
- Enemy Health
- Player Health

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions. Try and capture what logic would need to be defined if the game was broken down into the following categories.

### Game Initialization

- Enemies would appear randomly.
- You have a predifined cursor( like a gun crosshair)

### Playing The Game

- You have to shoot the enemies on the screen.
- If you do not do it on time, you are going to be killed.

### Winning The Game

- After a set amount of points, you will win the game.

### Landing Page

- Would be part of the PostMVP

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component                    | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------- | :------: | :------------: | :-----------: | :---------: |
| HTML & CSS basics	       |    H     |      3hrs      |    0hrs     |   0hrs    |
| create divs as enemies       |    H     |      4hrs      |    0hrs     |   0hrs    |
| make animations for enemies |    M     |      3hrs      |    0hrs     |   0hrs    |
| make the enemies appear randomly        |    H     |      4hrs      |    0hrs     |   0hrs    |
| Make enemy clickeable        |    H     |      3hrs      |    0hrs     |   0hrs    |
| Create a get-hit animation for enemy       |    H     |      4hrs      |    0hrs     |   0hrs    |
| make animation for shooting enemies               |    M     |      4hrs      |    0hrs     |   0hrs    |
| Create a get-hit animation for the user       |    H     |      4hrs      |    0hrs     |   0hrs    |
| Total                        |    H     |     29hrs      |    0hrs     |   0hrs    |

## Helper Functions

Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function      |             Description             |
| ------------- | :---------------------------------: |
| setInterval   | Make to run a function indefinitely |
| setTimeout    |     Run a function after x time     |
| clearInterval |         Stop a setInterval          |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier  
**RESOLUTION**: Missing comma after first object in sources {} object
