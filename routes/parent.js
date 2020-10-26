var express = require('express');
var router = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const key = process.env.SECRET_KEY || 'secret'
router.use(cors())
const Student = require('../models/Students')


  router.get('/signup/:student_id', (req,res)=>{
    Student.findOne({student_id:req.params.student_id,signup:false})
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  router.post('/signup/:student_id', async(req,res)=>{

    await Student.findOne({
      signup:false,student_id:req.params.student_id,status:'registered'
    })
    .then(student=>{
      if(student){
        bcrypt.hash(req.body.password,10,(err,hash)=>{
          Student.findOneAndUpdate({student_id:req.params.student_id }, {
            $set: {password:hash,signup:true}
          }, {
            new: true,
            runValidators: true,
            upsert: true,
            returnOriginal: false,
            returnNewDocument: true
          }).exec()
          .then(res.json('Sign Up Successful'))
          .catch(err => res.status(400).json('Error: ' + err))
        })
      }else{
        res.json({error:'Student Already exist'})
      }
    })
    .catch(err=>{
      res.send('error' + err)
    })
  })
  
  router.post('/login',(req,res)=>{
    Student.findOne({email:req.body.login,signup:true,status:'registered'})
    .then(student=>{
      if(student){
        if(bcrypt.compareSync(req.body.password, `${student.password}`)){
          const payload = {
            _id : student._id,
            name:student.name,
            surname:student.surname,
            clas:student.clas,
            department:student.department,
            gender:student.gender,
            religion:student.religion,
            sog:student.sog,
            lga:student.lga,
            student_id:student.student_id,
            school_id:student.school_id,
            address:student.address,
            pname:student.pname,
            psurname:student.psurname,
            email:student.email,
            number:student.number,
            paddress:student.paddress,
            age:student.age,
            type:student.type
          }
          let token = jwt.sign(payload, key)
          res.send(token)
          // res.send('passwords match')
        }else{
          res.json({error: 'Passwords do not match'})
        }
      }else{
        Student.findOne({student_id:req.body.login,signup:true,status:'registered'})
        .then(student=>{
          if(student){
            if(bcrypt.compareSync(req.body.password, `${student.password}`)){
              const payload = {
                _id : student._id,
                name:student.name,
                surname:student.surname,
                clas:student.clas,
                department:student.department,
                gender:student.gender,
                religion:student.religion,
                sog:student.sog,
                lga:student.lga,
                student_id:student.student_id,
                school_id:student.school_id,
                address:student.address,
                pname:student.pname,
                psurname:student.psurname,
                email:student.email,
                number:student.number,
                paddress:student.paddress,
                age:student.age,
                type:student.type
              }
              let token = jwt.sign(payload, key)
              res.send(token)
            }else{
              res.json({error: 'Passwords do not match'})
            }
          }else{
            res.json({error: "Student does not exist or hasn't been registered yet"})
          }
        })
        .catch(err=>{
          res.send('error' + err)
        })
      }
    })
    .catch(err=>{
      res.send('error' + err)
    })
  })
  
  module.exports = router;
