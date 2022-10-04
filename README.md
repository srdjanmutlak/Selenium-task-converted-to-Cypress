# Selenium-task-converted-to-Cypress
Iframe task for medior position converted to Cypress framework 

- Used cy.intercept for waits
- Used cypress-iframe plug in to enter the Iframe
- Used cypress-file-upload to upload a file through a command in commands.js


Task:

Go to https://orangehrm-demo-7x.orangehrmlive.com/

Login with admin credentials (form is prefilled with the login data)

Wait for the dashboard page to load

Go to Recruitment page

Click on Candidates on the left side panel

Print out the number of candidates

Click on the green Add button

Fill the mandatory fields and vacancy

The candidate name should be QA Automation - <CurrentDate> (Please substitute the current date with the current date) Click Save

Use Junit Assert to check if the number of candidates is increased by 1

Select the freshly created candidate

Click on the three dots in the left upper side of the table and delete the candidate
  
Use Junit assert to check if the number of candidates decreased by 1
   
Open the side menu

Click on the User icon and Logout
