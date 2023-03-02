const express=require("express")
const routeNavbarLink=require('./routes')
const app = express()
app.set('view engine','pug');
app.set('views','./views');

function rightHour(req,res,next){
    currentTime= new Date()
    currentHours=currentTime.getHours();
    if(currentHours>=9&&currentHours<=17){
        next()
    }
   res.status(404).send( "The web application is only available during working hours from 9 to 17.");
}
function rightDay(req,res,next){
    currentTime= new Date()
    currentDay=currentTime.getDay();
    if(currentDay>=1&&currentDay<=5){
        next()
    }
   res.status(404).send("The web application is only available during working Days from Monday to Friday.");
}


//set pug up

//
app.use([rightDay,rightHour])
app.use("/",routeNavbarLink)





//serveur
app.listen(3000)

