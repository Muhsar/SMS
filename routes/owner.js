var express = require('express');
var router = express.Router();
const cors = require('cors')
const getAge = require('get-age')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const key = process.env.SECRET_KEY || 'secret'
router.use(cors())
const Student = require('../models/Students')
const Teacher = require('../models/Teacher')
const News = require('../models/News')
const User = require('../models/User')
const Bill = require('../models/Bill')
const StudentBill = require('../models/StudentBill')
const Chat = require('../models/Chat')
const Receipt = require('../models/Receipt')

router.get('/',(req,res)=>{
    const decode = jwt.verify(req.headers['authorization'],key)
    User.findOne({school_id:decode.school_id})
      .then(user=>{
        res.json(user)
      })
  })
router.post('/account',(req,res)=>{
  const decode = jwt.verify(req.headers['authorization'],key)
  const {
    clas,
        schoolName,
        image,
        logo,
        schoolEmail,
        address,
        state,
        lga,
        firstName,
        lastName,
        ownerEmail,
        number
} = req.body
const update = {
  clas,
        schoolName,
        image,
        logo,
        schoolEmail,
        address,
        state,
        lga,
        firstName,
        lastName,
        ownerEmail,
        number
}
  User.findOneAndUpdate({school_id:decode.school_id }, {
    $set: update
}, {
    new: true,
    runValidators: true,
    upsert: true,
    returnOriginal: false,
    returnNewDocument: true
}).exec()
.then(()=>{
  User.findOne({school_id:decode.school_id})
    .then(user=>{
      const {
        password,
        clas,
        schoolName,
        image,
        logo,
        schoolEmail,
        address,
        state,
        lga,
        firstName,
        lastName,
        ownerEmail,
        number,
          school_id,
          type,
          _id
        } = user
        const payload = {
          password,
          clas,
          schoolName,
          image,
          logo,
          schoolEmail,
          address,
          state,
          lga,
          firstName,
          lastName,
          ownerEmail,
          number,
            school_id,
            type,
            _id
          }
          let token = jwt.sign(payload, key)
      res.json({user,msg:'Update Successful',token})
    })
})
})
router.post('/password',(req,res)=>{
  const decode = jwt.verify(req.headers['authorization'],key)
  User.findOne({school_id:decode.school_id})
  .then(user=>{
    if(user){
      bcrypt.hash(req.body.newPassword,10,(err,hash)=>{
        newPassword=hash
        if(bcrypt.compareSync(req.body.oldPassword, user.password)){
          User.findOneAndUpdate({school_id:decode.school_id }, {
            $set: {password:newPassword}
        }, {
            new: true,
            runValidators: true,
            upsert: true,
            returnOriginal: false,
            returnNewDocument: true
        }).exec()
        .then(()=>{
          res.json({user,msg:'Password Change Successful',error:null})
        })
        }
        else{
          res.json({user,error:'Old Password Not Correct',msg:null})
        }
      }
      )}

  })
})
router.delete('/:id',(req,res)=>{
  User.findOne({school_id:req.params.id})
  .then(user=>{
    if(bcrypt.compareSync(req.body.password,user.password)){
      User.findOneAndDelete({school_id:req.params.id})
      .then(res.json('Account Deleted Successfully'))
    }
    else{
      res.json({user,error:'Passwords do not match'})
    }
  })
})
  router.get('/students',  (req, res) =>{
    var decode = jwt.verify(req.headers['authorization'], key)
    Student.find({school_id:decode.school_id,status:'registered'})
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err))
});
router.get('/student_left',  (req, res) =>{
    var decode = jwt.verify(req.headers['authorization'], key)
    Student.find({school_id:decode.school_id,status:'deleted'})
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err))
});
router.get('/teacher_left',  (req, res) =>{
    var decode = jwt.verify(req.headers['authorization'], key)
    Teacher.find({school_id:decode.school_id,status:'deleted'})
        .then(teachers => res.json(teachers))
        .catch(err => res.status(400).json('Error: ' + err))
});
router.get('/teachers',  (req, res) =>{
    var decode = jwt.verify(req.headers['authorization'], key)
    Teacher.find({school_id:decode.school_id,status:'registered'})
        .then(teachers => res.json(teachers))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.post('/student',async(req,res)=>{
  var decode = jwt.verify(req.headers['authorization'], key)
  var age = getAge(req.body.date)
  var student = await Student.find({school_id:req.body.school_id})
  var stud = Number(student.length)
  var sid = stud + 1
  var student_id = req.body.school_id+'_STD_0'+sid
  var newStudent = new Student({
    status:'registered',
    name:req.body.name,
    surname:req.body.surname,
    clas:req.body.clas,
    department:req.body.department,
    gender:req.body.gender,
    religion:req.body.religion,
    date:req.body.date,
    sog:req.body.sog,
    lga:req.body.lga,
    student_id,
    feeStatus:req.body.feeStatus,
    school_id:req.body.school_id,
    address:req.body.address,
    pname:req.body.pname,
    psurname:req.body.psurname,
    email:req.body.email,
    number:req.body.number,
    paddress:req.body.paddress,
    age:age,
    type:'student',
    signup:false,
    image:req.body.image
  })
  var d = new Date();
  var day = d.getDate()
  var year = d.getFullYear()
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var month = months[d.getMonth()]
   var newReceipt = new Receipt({
     student_id,
     clas:req.body.clas,
     amountPaid:req.body.amountPaid,
     fees:req.body.fees,
     school_id:decode.school_id,
     name:req.body.name,
     surname:req.body.surname,
     schoolName:decode.name,
     day,
     month,
     year,
     paidAmount:req.body.paidAmount
   })
   var newStudentBill = new StudentBill({
     student_id,
     clas:req.body.clas,
     amountPaid:req.body.amountPaid,
     fees:req.body.fees,
     feeStatus:req.body.feeStatus,
     school_id:decode.school_id,
     name:req.body.name,
     surname:req.body.surname,
     reg:true
   })
   Student.findOne({student_id,status:'registered'})
    .then(student=>{
      if(!student){
        Receipt.create(newReceipt)
        StudentBill.create(newStudentBill)
        Student.create(newStudent)
          .then(student=>{
            res.json({student,msg:student.surname+' '+student.name+"'s registration was successful"
          })
      })
    }
  })
})
router.post('/teacher',async(req,res)=>{
  const decode = jwt.verify(req.headers['authorization'],key)
  var teachers = await Teacher.find({school_id:req.body.school_id})
  var stud = Number(teachers.length) || 0
  var teach = stud + 1

  var teacher_id = 'ID_'+req.body.school_id+'_TCH_0'+teach
  var newTeacher = new Teacher({
    name:req.body.name,
    surname:req.body.surname,
    clas:req.body.clas,
    gender:req.body.gender,
    teacher_id,
    status:'registered',
    school_id:req.body.school_id,
    address:req.body.address,
    email:req.body.email,
    number:req.body.number,
    type:'teacher',
    signup: false,
    image: req.body.image
  })
  Teacher.find({school_id:decode.school_id})
  .then(teachers=>{
    Teacher.findOne({
      clas:req.body.clas,
      status:'registered'
  })
      .then(teacher=>{
          if(!teacher){
              Teacher.create(newTeacher)
                  .then(teacher => res.json({msg:teacher.surname+' '+teacher.name+"'s Registration Successfully Completed",teachers}))
                  .catch(err => res.status(400).json('Error: ' + err))
          }else{
              res.json({error:'A Teacher Has been Placed in '+teacher.clas,teachers})
          }
      })
      .catch(err=>{
          res.send('error' + err)
      })
  })

})
router.post('/news',async(req,res)=>{
  var newNews = new News({
    title:req.body.title,
    content:req.body.content,
    school_id:req.body.school_id,
    day:req.body.day,
    month:req.body.month,
    image:req.body.image
  })
  try {
      const news = await newNews.save();
      if (!news) throw Error('Something went wrong when uploading the news');

      res.status(200).json(news);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  })
  router.get('/news', (req,res)=>{
    var decode = jwt.verify(req.headers['authorization'], key)
    News.find({school_id:decode.school_id})
      .sort({date:1})
    .then(news => res.json(news))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  router.get('/newsort', (req,res)=>{
    var decode = jwt.verify(req.headers['authorization'], key)
    News.find({school_id:decode.school_id})
      .sort({date:-1})
    .then(news => res.json(news))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  router.get('/news/:id',(req,res)=>{
    News.findById({_id:req.params.id})
      .then(news=>res.json(news))
      .catch(err => res.status(400).json('Error: ' + err))
  })
  router.post('/news/:id',async(req,res)=>{
    var decode = jwt.verify(req.headers['authorization'], key)
    var update = {
      title:req.body.title,
      content:req.body.content,
      image:req.body.image
    }
    News.findById({_id:req.params.id})
      .then(info=>{
          News.findByIdAndUpdate({_id:req.params.id }, {
            $set: update
        }, {
            new: true,
            runValidators: true,
            upsert: true,
            returnOriginal: false,
            returnNewDocument: true
        }).exec()
        .then(()=>{
          News.find({school_id:decode.school_id})
            .then(news=>{
              res.json(news)
            })
        })
      })
    
  })
router.delete('/news/:id',(req,res)=>{
  News.findByIdAndDelete({_id:req.params.id})
    .then(()=>(res.json('News Deleted')))
})

router.get('/student/:student_id', (req,res)=>{
    Student.findOne({student_id:req.params.student_id})
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.get('/teacher/:teacher_id', (req,res)=>{
    Teacher.findOne({teacher_id:req.params.teacher_id})
        .then(teacher => res.json(teacher))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.post('/teacher/:teacher_id',(req,res)=>{
    var status = 'deleted'
    var update = {status}
    Teacher.findOneAndUpdate({teacher_id:req.params.teacher_id }, {
        $set: update
    }, {
        new: true,
        runValidators: true,
        upsert: true,
        returnOriginal: false,
        returnNewDocument: true
    }).exec()
    .then(res.json('Teacher Deleted'))
    .catch(err => res.status(400).json('Error: ' + err))
})
router.post('/updatestudent/:student_id',(req,res)=>{
  var decode = jwt.verify(req.headers['authorization'], key)
    var name=req.body.name
    var surname=req.body.surname
    var clas=req.body.clas
    var department=req.body.department
    var sog=req.body.sog
    var lga=req.body.lga
    var address=req.body.address
    var pname=req.body.pname
    var psurname=req.body.psurname
    var email=req.body.email
    var number=req.body.number
    var paddress=req.body.paddress
    var image = req.body.image
    var update={
        name,
        surname,
        clas,
        department,
        sog,
        lga,
        address,
        pname,
        psurname,
        email,
        number,
        paddress,
        image
    }
    Student.findOne({student_id:req.params.student_id})
      .then(student=>{
        Student.findOneAndUpdate({
            student_id: req.params.student_id
        }, {
            $set: update
        }, {
            new: true,
            runValidators: true,
            upsert: true,
            returnOriginal: false,
            returnNewDocument: true
        }).exec()

        .then(()=>{
          Student.find({school_id:decode.school_id, status:'registered'})
            .then(responses=>{
              res.json({msg:student.name+' update was successfull',responses})
              console.log(responses)
            })
        })

      })
    .catch(err => res.status(400).json('Error: ' + err))

})
router.post('/updateteacher/:teacher_id',(req,res)=>{
  const decode = jwt.verify(req.headers['authorization'], key)
    var name=req.body.name
    var surname=req.body.surname
    var clas=req.body.clas
    var gender=req.body.gender
    var address=req.body.address
    var email=req.body.email
    var number=req.body.number
    var image=req.body.image
    var update = {name,surname,clas,gender,address,email,number,image}
    Teacher.findOne({clas:req.body.clas,school_id:decode.school_id,status:'registered'})
      .then(teacher=>{
        if(teacher){
        if(teacher.teacher_id===req.params.teacher_id){
          console.log(teacher.teacher_id,req.params.teacher_id)
          Teacher.findOneAndUpdate({
            teacher_id: req.params.teacher_id
          }, {
            $set: update
          }, {
            new: true,
            runValidators: true,
            upsert: true,
            returnOriginal: false,
            returnNewDocument: true
          }).exec()
          .then(()=>{
            Teacher.find({school_id:decode.school_id,status:'registered'})
              .then(teachers=>{
                res.json({teachers,msg:teacher.surname+' '+teacher.name+' update successful'})
              })
          })
          .catch(err => res.status(400).json('Error: ' + err))
        }
        
        else{
          Teacher.find({school_id:decode.school_id,status:'registered'})
              .then(teachers=>{
                res.json({teachers,error:'A teacher has been registered in'+teacher.clas})
              })
        }
      }
      else{
        Teacher.findOneAndUpdate({
          teacher_id: req.params.teacher_id
        }, {
          $set: update
        }, {
          new: true,
          runValidators: true,
          upsert: true,
          returnOriginal: false,
          returnNewDocument: true
        }).exec()
        .then(()=>{
          Teacher.find({school_id:decode.school_id,status:'registered'})
            .then(teachers=>{
              res.json({teachers,msg:update.surname+' '+update.name+' update successful'})
            })
        })
        .catch(err => res.status(400).json('Error: ' + err))
      }
            })
})
router.post('/student/:student_id',(req, res) => {
    var status = 'deleted'
    var update = {status}
    Student.findOneAndUpdate({student_id:req.params.student_id }, {
        $set: update
    }, {
        new: true,
        runValidators: true,
        upsert: true,
        returnOriginal: false,
        returnNewDocument: true
    }).exec()
    .then(res.json('Student Deleted'))
    .catch(err => res.status(400).json('Error: ' + err))
  });

  router.post('/signup', async(req,res)=>{
    const today = new Date()
    const {
      password,
      clas,
      schoolName,
      image,
      logo,
      schoolEmail,
      address,
      state,
      lga,
      firstName,
      lastName,
      ownerEmail,
      number
    } = req.body
    var skul = await User.find()
    var school = Number(skul.length) + 1
    var school_id = 'SCH_0'+school
    const userData ={
      password,
      clas,
      schoolName,
      image,
      logo,
      schoolEmail,
      address,
      state,
      lga,
      firstName,
      lastName,
      ownerEmail,
      number,
        school_id:school_id,
        created:today,
        type:'owner'
    }
    User.findOne({
        schoolEmail
    })
        .then(user=>{
            if(!user){
                bcrypt.hash(password,10,(err,hash)=>{
                    userData.password=hash
                    User.create(userData)
                        .then(user=>{
                            res.json({msg:'Sign Up Successful'})
                        })
                        .catch(err=>{
                            res.send('error' + err)
                        })
                })
            }else{
                res.json({error:'User Already exist'})
            }
        })
        .catch(err=>{
            res.send('error' + err)
        })
  })
  
  router.post('/login',(req,res)=>{
    User.findOne({schoolEmail:req.body.schoolEmail})
        .then(user=>{
            if(user){
                if(bcrypt.compareSync(req.body.password, user.password)){
                  const {
                    password,
                    clas,
                    schoolName,
                    image,
                    logo,
                    schoolEmail,
                    address,
                    state,
                    lga,
                    firstName,
                    lastName,
                    ownerEmail,
                    number,
                      school_id,
                      type,
                      _id
                  } = user
                  const payload = {
                    password,
                    clas,
                    schoolName,
                    image,
                    logo,
                    schoolEmail,
                    address,
                    state,
                    lga,
                    firstName,
                    lastName,
                    ownerEmail,
                    number,
                      school_id,
                      type,
                      _id
                    }
                    let token = jwt.sign(payload, key)
                    res.send(token)
                }else{
                    res.json({error: 'Passwords do not match'})
                }
            }else{
                res.json({error: 'User does not exist'})
            }
        })
        .catch(err=>{
            res.send('error' + err)
        })
  })
  router.post('/bill',async(req,res)=>{
    var decode = jwt.verify(req.headers['authorization'], key)
    var newBill = new Bill({
      clas:req.body.clas,
      fees:req.body.fees,
      uniform:req.body.uniform,
      exerciseBooks:req.body.exerciseBooks,
      pricePerBook:req.body.pricePerBook,
      textBooks:req.body.textBooks,
      school_id:decode.school_id
    })
    await Bill.findOne({
      clas:req.body.clas,
      school_id:decode.school_id
  })
      .then(bill=>{
          if(!bill){
              Bill.create(newBill)
                  .then(bill => {res.json({msg:"Bill for "+bill.clas+" created Successfully",bill})
                  console.log(bill)
                })
                  .catch(err => res.status(400).json('Error: ' + err))
          }else{
              res.json({error:'A Bill Has been created for '+bill.clas,nothing:{nothing:'empty'}})
          }
      })
      .catch(err=>{
          res.send('error' + err)
      })
  })
  router.get('/bill',(req,res)=>{
    var decode = jwt.verify(req.headers['authorization'], key)
    Bill.find({school_id:decode.school_id})
    .then(bill => res.json(bill))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  router.get('/bill/:id',(req,res)=>{
    Bill.findById({_id:req.params.id})
      .then(bill=>res.json(bill))
      .catch(err => res.status(400).json('Error: ' + err))
  })
  router.post('/bill/:id',async(req,res)=>{
    const decode = jwt.verify(req.headers['authorization'], key)
    var update = {
      fees:req.body.fees,
      uniform:req.body.uniform,
      exerciseBooks:req.body.exerciseBooks,
      pricePerBook:req.body.pricePerBook,
      textBooks:req.body.textBooks
    }
    Bill.findOne({_id:req.params.id})
    .then(bill=>{
  Bill.findByIdAndUpdate({_id:req.params.id }, {
            $set: update
        }, {
            new: true,
            runValidators: true,
            upsert: true,
            returnOriginal: false,
            returnNewDocument: true
        }).exec()
        .then(()=>{
          Bill.find({school_id:decode.school_id})
            .then(bills=>{
              res.json({bills, msg:bill.clas+' updated successfully'})
              console.log(bills)
            })
        })})
  
  })

router.delete('/bill/:id',(req,res)=>{
    Bill.findByIdAndDelete({_id:req.params.id})
      .then(()=>(res.json('Bill Deleted')))
    })
    router.post('/studentbill',async(req,res)=>{
      var decode = jwt.verify(req.headers['authorization'], key)
      var student = await Student.find({school_id:decode.school_id})
      var stud = Number(student.length)
      var sid = stud + 1
      var student_id = decode.school_id+'_STD_0'+sid
      var newReceipt = new Receipt({
        student_id,
        clas:req.body.clas,
        amountPaid:req.body.amountPaid,
        fees:req.body.fees,
        school_id:decode.school_id,
        name:req.body.name,
        surname:req.body.surname,
        schoolName:decode.name
      })
      newReceipt.save()
      var newStudentBill = new StudentBill({
        student_id,
        clas:req.body.clas,
        amountPaid:req.body.amountPaid,
        fees:req.body.fees,
        status:req.body.status,
        school_id:decode.school_id,
        name:req.body.name,
        surname:req.body.surname,
        reg:true
      })
      try {
          const studentBill = await newStudentBill.save();
          if (!studentBill) throw Error('Something went wrong when uploading the studentBill');
    
          res.status(200).json(studentBill);
        } catch (e) {
          res.status(400).json({ msg: e.message });
        }
    })
    router.get('/classbill/:clas',async(req,res)=>{
      await Bill.findOne({clas:req.params.clas})
      .then(bill=>res.json(bill))
      .catch(err => res.status(400).json('Error: ' + err))
    })
    router.get('/studentbill',(req,res)=>{
      var decode = jwt.verify(req.headers['authorization'], key)
      StudentBill.find({school_id:decode.school_id,feeStatus:'debtor'})
      .then(studentBill => res.json(studentBill))
      .catch(err => res.status(400).json('Error: ' + err))
    })
    router.get('/paid',(req,res)=>{
      var decode = jwt.verify(req.headers['authorization'], key)
      StudentBill.find({school_id:decode.school_id,feeStatus:'paid'})
      .then(studentBill => res.json(studentBill))
      .catch(err => res.status(400).json('Error: ' + err))
    })
    router.get('/studentbill/:student_id',(req,res)=>{
      StudentBill.findOne({student_id:req.params.student_id})
        .then(bill=>res.json(bill))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    router.get('/receipt/:student_id',(req,res)=>{
      Receipt.find({student_id: req.params.student_id})
      .sort({date:-1})
        .then(receipt=>res.json(receipt))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    router.post('/studentbill/:student_id',async(req,res)=>{
    var decode = jwt.verify(req.headers['authorization'], key)
      var update = {
        clas:req.body.clas,
        amountPaid:req.body.amountPaid,
        fees:req.body.fees,
        feeStatus:req.body.status,
        name:req.body.name,
        surname:req.body.surname
      }
      var d = new Date();
      var day = d.getDate()
      var year = d.getFullYear()
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var month = months[d.getMonth()];
      var newReceipt = new Receipt({
        student_id:req.params.student_id,
        clas:req.body.clas,
        paidAmount:req.body.paidAmount,
        fees:req.body.fees,
        school_id:decode.school_id,
        name:req.body.name,
        surname:req.body.surname,
        schoolName:decode.name,
        day,
        month,
        year,
        amountPaid:req.body.amountPaid
      })
      newReceipt.save()
      Student.findOneAndUpdate({student_id:req.params.student_id }, {
        $set: {feeStatus:req.body.status}
    }, {
        new: true,
        runValidators: true,
        upsert: true,
        returnOriginal: false,
        returnNewDocument: true
    }).exec()
      try {
          const info = StudentBill.findOneAndUpdate({student_id:req.params.student_id }, {
              $set: update
          }, {
              new: true,
              runValidators: true,
              upsert: true,
              returnOriginal: false,
              returnNewDocument: true
          }).exec()
          if (!info) throw Error('Something went wrong when updating the bill');
    
          res.status(200).json(info);
        } catch (e) {
          res.status(400).json({ msg: e.message });
        }
    })
    router.post('/deletebill/:student_id',(req,res)=>{
      StudentBill.findOneAndUpdate({student_id:req.params.student_id}, {
          $set: {reg:false}
      }, {
          new: true,
          runValidators: true,
          upsert: true,
          returnOriginal: false,
          returnNewDocument: true
      }).exec()
      .then(res.json('Bill Deleted'))
    })
    router.post('/chat',async(req,res)=>{
    var date = new Date()
    var decode = jwt.verify(req.headers['authorization'], key)
      var newChat = new Chat({
        sender_id:req.body.sender_id,
        message:req.body.message,
        school_id:decode.school_id,
        date,
        name:req.body.name
      })
      try {
          const chat = await newChat.save();
          if (!chat) throw Error('Something went wrong when uploading the chat');
    
          res.status(200).json(chat);
        } catch (e) {
          res.status(400).json({ msg: e.message });
        }
      })
      router.get('/chat', (req,res)=>{
        var decode = jwt.verify(req.headers['authorization'], key)
        Chat.find({school_id:decode.school_id})
          .sort({date:1})
        .then(chat => res.json(chat))
        .catch(err => res.status(400).json('Error: ' + err))
      })
      router.get('/receipts',(req,res)=>{
        const decode = jwt.verify(req.headers['authorization'],key)
        Receipt.find({school_id: decode.school_id})
        .sort({date:-1})
          .then(receipts=>res.json(receipts))
          .catch(err => res.status(400).json('Error: ' + err))
      })
const classes =[
  {class:'Creche'},
  {class:'KG1'},
  {class:'KG2'},
  {class:'NUR1'},
  {class:'NUR2'},
  {class:'Basic1'},
  {class:'Basic2'},
  {class:'Basic3'},
  {class:'Basic4'},
  {class:'Basic5'},
  {class:'Basic6'},
  {class:'Jss1'},
  {class:'Jss2'},
  {class:'Jss3'},
  {class:'Sss1'},
  {class:'Sss2'},
  {class:'Sss3'}
]
classes.map(clas=>{
  return(
    router.get(`/${clas.class}`,(req,res)=>{
      StudentBill.find({clas:clas.class,reg:true})
        .then(debtor=>{
            res.json(debtor)
        })
    })
    )
})
router.get('/allReceipt',(req,res)=>{
  const decode=jwt.verify(req.headers['authorization'],key)
  Receipt.find({school_id: decode.school_id})
  .sort({date:-1})
    .then(receipt=>res.json(receipt))
    .catch(err => res.status(400).json('Error: ' + err))
})
    module.exports = router;