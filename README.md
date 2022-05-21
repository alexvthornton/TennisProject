# Tennis Project
project to practice javascript basics 

## Before you start

### Create a GitHub account
https://github.com
### Install git
https://www.simplilearn.com/tutorials/git-tutorial/git-installation-on-windows

### Clone this project
To clone this project onto your computer in the command prompt first navigate to the directory (folder) that you want to place this project in, then run this command
```bash
git clone https://github.com/alexvthornton/TennisProject.git
```
then you will be propted to enter your GitHub credentials. 

Now you should create your own branch of the code. i.e. your own workspace where the work you do doesn't effect the work other people do

```bash
git checkout -b braeden
```

Now you can open the TennisProject in Visual Studio Code.

## The Project
### Overview
The project uses a tennis.json file to provide you will ample test data. You Have to write a series of functions that manipulates that data to return the desired output. The code you have to write is in the Functions directory. Each file in the Functions directory describes what function should be implemented

### How to Run the Functions
To run the function in the command Prompt first run
```bash
npm install
```
to install the dependencies
next run the following command to run your javascript file
```bash
npm run start Function/<Function file>
```
i.e.
```bash
npm run start Function/FunctionOne.js
```

## Submitting Your Code
to submit your code first run
```bash
git add .
```
then 
```bash
git commit -m "my code submission"
```
and finally
```bash
git push --set-upstream origin braeden
```


