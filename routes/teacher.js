var express = require('express');
var router = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const key = process.env.SECRET_KEY || 'secret'
router.use(cors())
const Student = require('../models/Students')
const Result = require('../models/Result')
const Teacher = require('../models/Teacher')
const StudentBill = require('../models/StudentBill')

router.get('/students',  (req, res) =>{
    var decode = jwt.verify(req.headers['authorization'], key)
    Student.find({school_id:decode.school_id,status:'registered',clas:decode.clas})
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err))
  });

  router.get('/studentbill',(req,res)=>{
    var decode = jwt.verify(req.headers['authorization'], key)
    StudentBill.find({school_id:decode.school_id,feeStatus:'debtor',clas:decode.clas})
    .then(studentBill => res.json(studentBill))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  router.get('/paid',(req,res)=>{
    var decode = jwt.verify(req.headers['authorization'], key)
    StudentBill.find({school_id:decode.school_id,feeStatus:'paid',clas:decode.clas})
    .then(studentBill => res.json(studentBill))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  router.get('/results', (req,res)=>{
    var decode = jwt.verify(req.headers['authorization'], key)
    Result.find({school_id:decode.school_id, clas:decode.clas})
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  router.get('/result/:student_id', (req,res)=>{
    var decode = jwt.verify(req.headers['authorization'], key)
    Result.find({school_id:decode.school_id,student_id:req.params.student_id})
    .sort({date:-1})
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  router.get('/result/:id', (req,res)=>{
    var decode = jwt.verify(req.headers['authorization'], key)
    Result.findOne({_id:req.params.id})
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  router.delete('/result/:id',(req,res)=>{
    Result.findByIdAndDelete({_id:req.params.id})
      .then(result=>res.json(result))
  })
  router.post('/result',async(req,res)=>{
    var decode = jwt.verify(req.headers['authorization'], key)
    var newResult = new Result({
      subject:req.body.subject,
      test:req.body.test,
      exam:req.body.exam,
      student_id:req.body.student_id,
      term:req.body.term,
      clas:decode.clas,
      remarks:req.body.remarks,
      grade:req.body.grade,
      school_id:decode.school_id,
      total:req.body.total
    })
    Result.findOne({clas: decode.clas,term:req.body.term,school_id:decode.school_id,subject:req.body.subject})
    .then(async(result)=>{
      if(result){
        res.json({error:result.subject+"'s result for "+result.term+" exist try updating or deleting the result instead"})
      }else{
        try {
          const result = await newResult.save();
          if (!result) throw Error('Something went wrong when uploading the result');
  
          res.status(200).json(result);
        } catch (e) {
          res.status(400).json({ msg: e.message });
        }
      }
    })
  
  })
  router.get('/1sttermresult/:student_id', (req,res)=>{
    var decode = jwt.verify(req.headers['authorization'],key)
    Result.find({student_id:req.params.student_id,term:'1stTerm',clas:decode.clas,school_id:decode.school_id})
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  router.get('/2ndtermresult/:student_id', (req,res)=>{
    var decode = jwt.verify(req.headers['authorization'],key)
    Result.find({student_id:req.params.student_id,term:'2ndTerm',clas:decode.clas,school_id:decode.school_id})
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  router.get('/3rdtermresult/:student_id', (req,res)=>{
    var decode = jwt.verify(req.headers['authorization'],key)
    Result.find({student_id:req.params.student_id,term:'3rdTerm',clas:decode.clas,school_id:decode.school_id})
    .then(result => res.json(result))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  
  router.get('/teacher/:clas', (req,res)=>{
    var decode = jwt.verify(req.headers['authorization'],key)
    Teacher.findOne({clas:req.params.clas,school_id:decode.school_id})
    .then(teacher => res.json(teacher))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  
  
  
  router.post('/signup/:teacher_id', async(req,res)=>{
    console.log(req.params.teacher_id)
    await Teacher.findOne({
      signup:false,teacher_id:req.params.teacher_id,status:'registered'
    })
    .then(teacher=>{
      if(teacher){
        bcrypt.hash(req.body.password,10,(err,hash)=>{
          Teacher.findOneAndUpdate({teacher_id:req.params.teacher_id }, {
            $set: {password:hash,signup:true}
          }, {
            new: true,
            runValidators: true,
            upsert: true,
            returnOriginal: false,
            returnNewDocument: true
          }).exec()
          .then(res.json({msg:'Sign Up Successful'}))
          .catch(err => res.status(400).json('Error: ' + err))
        })
      }else{
        res.json({error:'Teacher Already exist'})
      }
    })
    .catch(err=>{
      res.send('error' + err)
    })
  })
  
  router.post('/login',(req,res)=>{
    Teacher.findOne({email:req.body.login,status:'registered',signup:true})
    .then(teacher=>{
      if(teacher){
        if(bcrypt.compareSync(req.body.password, `${teacher.password}`)){
          const payload = {
            _id : teacher._id,
            name: teacher.name,
            email: teacher.email,
            teacher_id:teacher.teacher_id,
            surname:teacher.surname,
            clas:teacher.clas,
            gender:teacher.gender,
            address:teacher.address,
            number:teacher.number,
            school_id:teacher.school_id,
            type:teacher.type
          }
          let token = jwt.sign(payload, key)
          res.send(token)
        }else{
          res.json({error: 'Passwords do not match'})
        }
      }else{
        Teacher.findOne({teacher_id:req.body.login,status:'registered',signup:true})
        .then(teacher=>{
          if(teacher){
            if(bcrypt.compareSync(req.body.password, `${teacher.password}`)){
              const payload = {
                _id : teacher._id,
                name: teacher.name,
                email: teacher.email,
                teacher_id:teacher.teacher_id,
                surname:teacher.surname,
                clas:teacher.clas,
                gender:teacher.gender,
                address:teacher.address,
                number:teacher.number,
                school_id:teacher.school_id,
                type:teacher.type
              }
              let token = jwt.sign(payload, key)
              res.send(token)
            }else{
              res.json({error: 'Passwords do not match'})
            }
          }else{
            res.json({error: "Teacher doesn't exist"})
          }
        })
        .catch(err=>{
          res.send('error' + err)
      })
    }})
    .catch(err=>{
      res.send('error' + err)
  
  })
  })
  module.exports = router;
