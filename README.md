# TemplateEngine - Homework 10

In this homeowrk assignment, we were tasked in building a Node CLI that takes in information about employees and generate and HTML webpage that displays summaries for each person. You will be able to add new members to the summary page as you grow your team. I was able to implement testing with the use of Jest to ensure all unit tests pass. 

## Installation

Node.JS latest version (14.5.0)

Run ```bash NPM install``` to get all the necessary modules. Ensure that Jest is installed.

## Folder Structure

```
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application
```

## Usage 

1. Run Node apps.js to begin the questions. 
2. Enter Manager's name/ID/Room Number
3. Answer whether you would like to add either an Engineer or an Intern. 
4. You will be prompted to the specific questions for the selected employee type. 

![](assets/cli-hw10.gif)

5. In the output folder, you will find the results. 

![](assets.team.png)

## Tools & Resources

- Bootstrap CDN
- Node.js: need inquirer as it is a dependency


