# The Presentation Format

* Introduce yourselves (10 second intros!)
* Briefly explain the problem you are solving
* Live demo your app, 3 or 4 mins to explain your solution, how your app works and how it solves the problem
* Briefly talk through how you approached the project (git and github strategy, planning, team roles, etc)
* Finish, and questions


## Practise Intros

## Problem Being Solved

* No tools to track mood and topics covered over the course of the bootcamp. 

* We wanted to create a tool that would allow the bootcamper to record their feelings each session/day and note down the topics covered so be able to reflect on areas to focus on. 

## Live Demo

* Bootcamper records feelings and topics covered each session/day and can search by Week for the results

* App also calculates average mood over the selected time period, and if the average mood is "not good", or "bad", it provides some suggestions for further steps.

## Approach

* Monday Planning 
    - discussed personality types and preference of coding front vs back end
    - decided against project manager
    - decided on sprint lengths and when to have stand ups and retros
    - user persona
    - ideated; did not use Disney
    - research with fellow bootcampers (zoom chat)
    - low fidelity diagrams
    - structure diagram x 2  
     
  
* Tuesday
    - setup Jira in our morning stand up, agreed on the sprint for the day
    - agreed to use single repo
    - created folder structure together and basic setup for react and node
    - split into pairs, 2 doing high fidelity diagram, 2 doing DB setup
    - testing of DB scripts using Postman

* Wednesday 
    - small changes to plan; started using react hook form instead of components and props
    - got the submission form working
    - added fetch requests
    - connected front and back end
    - deployed to Netlify and Heroku
    - CORs (actually was .env issue)
    - output table created and tested

* Thurs
    - Added username (in the future will be dynamic)
    - Various CSS and appearance changes
    - Further functionality to the search
    - Comments into the code
    - Added average mood functionality
    - started trying to do testing and page responsiveness but didn't finish these

## Biggest Challenges

* Git Branching
* First deployment
* CORs (.env)
* Use of UseEffect vs functions running onClick

## Things we would do differently

* Disney ideation
* More user research and checking in during developement with the users
* Split into seperate repos
* Test earlier
* Develop for mobile first - easier to scale up than down

## Stretch Goals

* Mobile responsive
* Delete button for selected lines of table
* Multi-user (OAuth?)
* Way of marking progress on revision topics; router for another page display?
* Multiple tables for more complex data
* Change dropdown menu for mood to be a dynamic smiley face
* Dashboard for coaches to view anonymous overall mood by Week/Day to judge how the cohort are doing mentally