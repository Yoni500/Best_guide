

nodejs backend with express module and etc.
mongodb for data storage



Start your nodejs application locally - go to app directory of project

npm install 

node server.js

 Access you nodejs application UI from browser

http://localhost:3002



modules: out schema for mongodb module
public : all images,css,etc (static files) for out backend.
routs: all the path the user can go via out web project. 
viwes: our htmls files ,pug files.


for example: a user go to out webiste he run "node server.js" after that he goes to localhost:3001 , and register . 
then he goes to login . 
what happend in the backend?
    server.js start to run , becuse the user goes to register he go to the path /accound Post method-> /register.
    same for login. 
    when the Rest go to Post , allways Get is first!  just meantion.

    

