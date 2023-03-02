const express=require('express')
const router=express.Router()


router.get('/',function(req,res){
 res.render('home')
})
router.get('/services',function(req,res){
    res.render('services')
})
router.get('/contact',function(req,res){
    res.render('contact')
})

module.exports=router;