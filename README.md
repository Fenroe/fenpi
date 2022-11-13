# FenPI

FenPI is a REST API that manages contact features on my websites. It is an express app written in Typescript and uses Nodemailer to send emails to my primary email address. 

# Getting Started

If you would like to run this application locally then follow these steps:

* Clone this repository to your computer.
* Install npm packages with `npm install`.
* You'll need to create an .env file at the root of the project containing the following variables. 
```
PORT=8080
TRANSPORT_USER=example@email.com
TRANSPORT_PASSWORD=transportpassword
SENDING_ADDRESS=example@email.com
RECEIVING_ADDRESS=example@email.com
RECIPIENT_NAME=User
CORS_ORIGIN=mycoolwebsite.com
```
- `PORT` determines which port the app runs on. You can leave this as 8080 or change it as best suits you.
- `TRANSPORT_USER` and `TRANSPORT_PASSWORD` are used by Nodemailer. You can see the Nodemailer documentation [here](https://nodemailer.com/about/)
- `SENDING_ADDRESS` is the email address your emails are sent from.
- `RECIEVING_ADDRESS` is where emails are sent to.
- `RECIPIENT_NAME` is the name of the person who recieves the emails.
- `CORS_ORIGIN` is the domain requests are sent from.
- Please be aware that this API is configred for use by Gmail accounts. If you'd prefer to use another email provider you'll have to review the Nodemailer documentation. 
* Start the application by running `npm run start` or `npm run devstart` to utilise Nodemon. The application will run on http://localhost:8080 if using the default `PORT` value above. 

# Projects Using Fenpi

[My portfolio website](https://github.com/Fenroe/portfolio)