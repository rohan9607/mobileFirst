# How to run project

1) Take a pull of main branch
2) Make sure node version v20.4.0 > is installed and also install bash from link : https://git-scm.com/downloads
3) open directory into VsCode
   
## Frontend
1) Go to frontend folder
2) Paste .env (Look mail for env file and rename it env.frontend.example to .env then paste into root folder (frontend))
3) open bash into the frontend folder
4) run command -> npm install -> (if error occured then run -> npm install --force)
5) run command -> npm start dev

## Backend
1) Go to backend folder
2) Paste .env (Look a mail for env file and rename it env.backend.example to .env then paste into root folder (backend))
3) open bash into the frontend folder
4) run command -> npm install (if error occured then run -> npm install --force)
5) download mysql (64 bit)  version >= 8.0.34 - MySQL Community Server - GPL link : https://dev.mysql.com/downloads/installer/
6) download wampserver (64 bit) | Link : https://sourceforge.net/projects/wampserver/
7) first install mysql server
8) then install wampserver and remember root password
9) open browser -> type 'localhost' (without quote) into url bar -> Go to PhpMyAdmin x.x.x -> type a password -> Click on New at left side dashboard - top option
10) type database name -> mobile_first_db -> create
11) click on database you just created at dashboard (left hand side)
12) click on import on top navbar | If you do not want to import then open bash cmd into backend folder -> type command -> npm run migration:create -> type command -> npm run migration:run -> It will automatically create all needed tables
13) select *.sql file from Downloads (Attached with mail) -> import
14) come back to project directory (backend) -> open .env file -> edit DB_USERNAME and DB_PASSWORD as per your wampserver phpmyadmin credentials
15) open bash into backend folder -> type command -> npm run start:dev -> Done

## Create a Admin
1) Go to localhost:4123 from browser
2) goto Register
3) register and verify account with email
4) go to phpmyadmin -> select database -> go to users table -> look for column name 'user_type' -> click on the cell of perticular row -> select 1 from dropdown -> click outside
5) Now that user has become the admin
6) you can login and add a images (Admin only)

