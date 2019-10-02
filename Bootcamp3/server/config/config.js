//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://guest:8VwK8n23iCyGasER@cen3031-course-hiulj.mongodb.net/Bootcamp2'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '46682f201b154dc193e7703c691baa06' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};