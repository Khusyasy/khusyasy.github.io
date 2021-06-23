---
    title: Koding Kuiz
    live: http://quiz.khusyasy.xyz/
    repo: https://github.com/Khusyasy/koding-kuiz
    img: /images/koding_kuiz.png
    desc: A quiz game about programming, coding, and related stuff. You can test your knowledge about the subject while having fun!.
    order: 1
---
[<img src="{ img }"/>]({ img })

### Project description

{ desc }

### Features

- Quiz game with multiple categories and difficulties.
- Scoring system.
- Leaderboard system.
- GitHub OAuth integration.

---
## Objectives
I always wanted to create a quiz game about the stuff that i loved, that is tech and programming, and then the player can see how they rank among the other players.

So to sum it up, the goal of this project is:
1. Create a quiz game.
2. Create an account system.
3. Create a leaderboard system.

### 1. Create a quiz game.

Firstly, I make a quick quiz game prototype using a framework that I'm currently learning (Vue JS), and this prototype is gonna be the very basic requirement for my quiz game, so I can visualize what would be needed for the quiz game.

[<img src="/images/koding-quiz-2.png"/>](/images/koding-quiz-2.png)

I actually wanted to create my own API for the questions, but after a while I decided to use a public API, and I found QuizApi, and I have to modify the prototype for a bit so the structure of the quiz is compatible.

I also decided to keep using Vue JS for this project.

### 2. Create an account system.

I'm using GitHub OAuth to save time and my sanity, because by using that, I don't have to deal much about account management and security, GitHub already do that better than me.

I actually never used GitHub OAuth or any Auth API before, so this is some kind of an amazing new learning experience.

### 3. Create a leaderboard system.

I created a Express JS server and configure MongoDB, and all the usual server configuration stuff, this step is pretty straight forward, that is creating an backend for database CRUD and creating API endpoint like what I usually do.

### Techonologies used

- MongoDB
- Express JS
- Vue JS
- Vuex
- Node JS
- JWT
- GitHub OAuth