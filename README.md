# How to run project

1) Take a pull of main branch
2) Make sure node version v20.4.0 > is installed
3) open directory into VsCode
   
## Frontend
1) Go to frontend folder
2) Paste .env (Look mail for env file and rename it env.frontend.example to .env then paste into root folder (frontend))
3) open bash into the frontend folder
4) run command -> npm install (if error occured then run -> npm install --force)
5) run command -> npm start dev

## Backend
1) Go to backend folder
2) Paste .env (Look a mail for env file and rename it env.backend.example to .env then paste into root folder (backend))
3) open bash into the frontend folder
4) run command -> npm install (if error occured then run -> npm install --force)
5) download mysql (64 bit)  version >= 8.0.34 - MySQL Community Server - GPL link : https://dev.mysql.com/downloads/installer/
6) download wampserver (64 bit) | Link : https://sourceforge.net/projects/wampserver/
7) first install mysql server
8) install wampserver and remember root password
9) open browser -> type 'localhost' (without quote) into url bar -> Go to PhpMyAdmin x.x.x -> type a password -> Click on New at left side dashboard - top option
10) type database name -> mobile_first_db -> create
11) click on database at dashboard you just created
12) click on import on top navbar
13) select *.sql file from Downloads (Attached with mail) -> import
14) come back to project directory (backend) -> open .env file -> edit DB_USERNAME and DB_PASSWORD as per your wampserver phpmyadmin credentials
15) open bash into backend folder -> type command -> npm run start:dev -> Done

