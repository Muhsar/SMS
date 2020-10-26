import axios from 'axios'
import { OwnerServer, ParentServer, TeacherServer } from '../servers';
import { Loading,
     DeleteChat,
     UpdateChat,
     GetChat,
     AddChat,
     BillDetail,
     DeleteBill,
     UpdateBill,
     GetBill,
     AddBill,
     NewsDetail,
     DeleteNews,
     UpdateNews,
     GetNews,
     AddNews,
     ClassBill,
     DeleteStudent,
     UpdateStudent,
     AddStudent,
     StudentDetail,
     GetStudent,
     DeleteTeacher,
     UpdateTeacher,
     AddTeacher,
     TeacherDetail,
     GetTeacher, 
     GetStudentBill,
     StudentBillDetail,
     UpdateStudentBill,
     DeleteStudentBill,
     AddStudentBill,
     GetReceipt,
     GetResult,
     OwnerDetail,
     UpdateSchool,
     DeleteSchool,
     Creche,
     KG1,
     KG2,
     NUR1,
     NUR2,
     Basic1,
     Basic2,
     Basic3,
     Basic4,
     Basic5,
     Basic6,
     Jss1,
     Jss2,
     Jss3,
     Sss1,
     Sss2,
     Sss3,
     Typing
    } from './types';
    export const typingState=status=>dispatch=>{
      dispatch({
        type:Typing,
        name:status.name,
        id:status.id
      })
    }
    export const allReceipt=()=>dispatch=>{
      axios.get(`${OwnerServer}/allReceipt`)
      .then(res=>dispatch({
        type:GetReceipt,
        payload:res.data
      }))
    }
    export const crecheDebt=()=>dispatch=>{
      axios.get(`${OwnerServer}/Creche`)
      .then(res=>dispatch({
        type:Creche,
        payload:res.data
      }))
    }
    export const kg1Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/KG1`)
      .then(res=>dispatch({
        type:KG1,
        payload:res.data
      }))
    }
    export const kg2Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/KG2`)
      .then(res=>dispatch({
        type:KG2,
        payload:res.data
      }))
    }
    export const nur1Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/NUR1`)
      .then(res=>dispatch({
        type:NUR1,
        payload:res.data
      }))
    }
    export const nur2Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/NUR2`)
      .then(res=>dispatch({
        type:NUR2,
        payload:res.data
      }))
    }
    export const basic1Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/Basic1`)
      .then(res=>dispatch({
        type:Basic1,
        payload:res.data
      }))
    }
    export const basic2Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/Basic2`)
      .then(res=>dispatch({
        type:Basic2,
        payload:res.data
      }))
    }
    export const basic3Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/Basic3`)
      .then(res=>dispatch({
        type:Basic3,
        payload:res.data
      }))
    }
    export const basic4Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/Basic4`)
      .then(res=>dispatch({
        type:Basic4,
        payload:res.data
      }))
    }
    export const basic5Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/Basic5`)
      .then(res=>dispatch({
        type:Basic5,
        payload:res.data
      }))
    }
    export const basic6Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/Basic6`)
      .then(res=>dispatch({
        type:Basic6,
        payload:res.data
      }))
    }
    export const jss1Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/Jss1`)
      .then(res=>dispatch({
        type:Jss1,
        payload:res.data
      }))
    }
    export const jss2Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/Jss2`)
      .then(res=>dispatch({
        type:Jss2,
        payload:res.data
      }))
    }
    export const jss3Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/Jss3`)
      .then(res=>dispatch({
        type:Jss3,
        payload:res.data
      }))
    }
    export const sss1Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/Sss1`)
      .then(res=>dispatch({
        type:Sss1,
        payload:res.data
      }))
    }
    export const sss2Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/Sss2`)
      .then(res=>dispatch({
        type:Sss2,
        payload:res.data
      }))
    }
    export const sss3Debt=()=>dispatch=>{
      axios.get(`${OwnerServer}/Sss3`)
      .then(res=>dispatch({
        type:Sss3,
        payload:res.data
      }))
    }
     export const schoolDetail=()=>dispatch=>{
       axios.get(`${OwnerServer}/`)
       .then(res=>dispatch({
         type:OwnerDetail,
         payload:res.data
       }))
     }
     export const updateSchool=data=>dispatch=>{
      axios.post(`${OwnerServer}/account`,data)
      .then(res=>
        {
          if(res.data.token){
            localStorage.setItem('token',res.data.token)
          } 
          dispatch({
        type:UpdateSchool,
        payload:res.data.user,
        msg:res.data.msg,
        error:res.data.error
      })
    }
      )
    }
    export const changePassword=passwords=>dispatch=>{
      axios.post(`${OwnerServer}/password`,passwords)
      .then(res=>dispatch({
        type:UpdateSchool,
        payload:res.data.user,
        msg:res.data.msg ? res.data.msg : null,
        error:res.data.error ? res.data.error : null
      }))
    }
    export const deleteAccount=(id)=>dispatch=>{
      axios.delete(`${OwnerServer}/${id}`)
      .then(res=>dispatch({
        type:DeleteSchool,
        payload:res.data.user ? res.data.user : id,
        msg:res.data.msg,
        error:res.data.error,
        userReturn:res.data.user ? true : false
      }))
    }
     export const firstTerm =(id)=>dispatch=>{
      axios.get(`${TeacherServer}/1sttermresult/`+id)
      .then(res=>dispatch({
        type:GetResult,
        payload:res.data
      }))
    }
    export const secondTerm =(id)=>dispatch=>{
      axios.get(`${TeacherServer}/2ndtermresult/`+id)
      .then(res=>dispatch({
        type:GetResult,
        payload:res.data
      }))
    }
    export const thirdTerm =(id)=>dispatch=>{
      axios.get(`${TeacherServer}/3rdtermresult/`+id)
      .then(res=>dispatch({
        type:GetResult,
        payload:res.data
      }))
    }
     export const getReceipt =(id)=>(dispatch)=>{
      axios.get(`${OwnerServer}/receipt/`+id)
        .then(res=>dispatch({
          type:GetReceipt,
          payload:res.data
        }))
    }
     export const getStudentBill =()=>(dispatch)=>{
      axios.get(`${OwnerServer}/studentbill`)
        .then(res=>dispatch({
          type:GetStudentBill,
          payload:res.data
        }))
    }
    export const addStudentBill = (studentBill) => (
      dispatch
    ) => {
      axios
        .post(`${OwnerServer}/studentbill`, studentBill)
        .then(res =>
          dispatch({
            type:AddStudentBill,
            payload:res.data
          }))
    }
    export const studentBillDetail = (id) => (dispatch) => {
        dispatch(setLoading());
        axios
          .get(`${OwnerServer}/studentbill/`+id)
            .then(res =>
              dispatch({
                type: StudentBillDetail,
                payload:res.data
              }),
            )

      };
      export const updateStudentBill = (id,studentBill) => (
        dispatch
      ) => {
        axios
          .post(`${OwnerServer}/studentbill/${id}`, studentBill)
          .then(res =>
            dispatch({
              type: UpdateStudentBill,
              payload: res.data
            })
          )

      };
      export const deleteStudentBill =(id)=>(dispatch)=>{
        axios.post(`${OwnerServer}/deletebill/`+id)
          .then(res=>dispatch({
            type:DeleteStudentBill,
            payload:id
          }))
      }
export const getTeachers = () => (dispatch) => {
    dispatch(setLoading());
    axios
      .get(`${OwnerServer}/teachers`)
        .then(res =>
          dispatch({
            type: GetTeacher,
            payload: res.data
          }),
        )

  };
  export const teacher_left = () => (dispatch) => {
      dispatch(setLoading());
      axios
        .get(`${OwnerServer}/teacher_left`)
          .then(res =>
            dispatch({
              type: GetTeacher,
              payload: res.data
            }),
          )

    };

export const teacherDetail = (id) => (dispatch) => {
    dispatch(setLoading());
    axios
      .get(`${OwnerServer}/teacher/`+id)
        .then(res =>
          dispatch({
            type: TeacherDetail,
            payload:res.data
          }),
        )

  };
  export const teacherAccount = (clas) => (dispatch) => {
      dispatch(setLoading());
      axios
        .get(`${TeacherServer}/teacher/`+clas)
          .then(res =>
            dispatch({
              type: TeacherDetail,
              payload:res.data
            }),
          )

    };
  export const addTeacher = (teacher) => (
    dispatch
  ) => {
    axios
      .post(`${OwnerServer}/teacher`, teacher)
      .then(res =>
        dispatch({
          type: AddTeacher,
          payload: res.data.teacher,
          msg:res.data.msg,
          error:res.data.error,
          all:!res.data.error ? null : res.data.teachers
        })
      )

  };
  export const updateTeacher = (id,teacher) => (
    dispatch
  ) => {
    axios
      .post(`${OwnerServer}/updateteacher/${id}`, teacher)
      .then(res =>
        dispatch({
          type: UpdateTeacher,
          payload:res.data.teachers,
          msg:res.data.msg,
          error:res.data.error
        })
      )

  };

  export const deleteTeacher = (id) => (
    dispatch
  ) => {
    axios
      .post(`${OwnerServer}/teacher/${id}`)
      .then(res =>
        dispatch({
          type: DeleteTeacher,
          payload: id
        })
      )

  };
  export const getStudents = () => (dispatch) => {
      dispatch(setLoading());
      axios
        .get(`${OwnerServer}/students`)
          .then(res =>
            dispatch({
              type: GetStudent,
              payload: res.data
            }),
          )

    };
    export const student_left = () => (dispatch) => {
        dispatch(setLoading());
        axios
          .get(`${OwnerServer}/student_left`)
            .then(res =>
              dispatch({
                type: GetStudent,
                payload: res.data
              }),
            )

      };
      export const studentAccount = (id) => (dispatch) => {
  dispatch(setLoading());
  axios
  .get(`${ParentServer}/signup/`+id)
  .then(res =>
    dispatch({
      type: StudentDetail,
      payload:res.data
    }),
  )

};

  export const studentDetail = (id) => (dispatch) => {
      dispatch(setLoading());
      axios
        .get(`${OwnerServer}/student/`+id)
          .then(res =>
            dispatch({
              type: StudentDetail,
              payload:res.data
            }),
          )

    };

    export const addStudent = (student) => (
      dispatch
    ) => {
      axios
        .post(`${OwnerServer}/student`, student)
        .then(res =>
          dispatch({
            type: AddStudent,
            payload: res.data.student,
            msg:res.data.msg
          })
        )

    };

    export const updateStudent = (id,student) => (
      dispatch
    ) => {
      axios
        .post(`${OwnerServer}/updatestudent/${id}`, student)
        .then(res =>
          dispatch({
            type: UpdateStudent,
            payload: res.data.responses,
            msg:res.data.msg
          })
        )

    };
    export const deleteStudent = (id) => (
      dispatch
    ) => {
      axios
        .post(`${OwnerServer}/student/${id}`)
        .then(res =>
          dispatch({
            type: DeleteStudent,
            payload: id
          })
        )

    }
  
    export const addNews = (news) => (
      dispatch
    ) => {
          dispatch({
            type:AddNews,
            payload:news
          })
    }
    export const getNews =()=>(dispatch)=>{
      axios.get(`${OwnerServer}/news`)
        .then(res=>dispatch({
          type:GetNews,
          payload:res.data
        }))
    }
    export const sortNews =()=>(dispatch)=>{
      axios.get(`${OwnerServer}/newsort`)
        .then(res=>dispatch({
          type:GetNews,
          payload:res.data
        }))
    }
    export const updateNews =(id,news)=>(dispatch)=>{
      axios.post(`${OwnerServer}/news/${id}`, news)
        .then(res=>dispatch({
          type:UpdateNews,
          payload:res.data
        }))
    }
    export const deleteNews =(id)=>(dispatch)=>{
      axios.delete(`${OwnerServer}/news/`+id)
        .then(res=>dispatch({
          type:DeleteNews,
          payload:id
        }))
    }
    export const newsDetail = (id) => (dispatch) => {
        dispatch(setLoading());
        axios
          .get(`${OwnerServer}/news/`+id)
            .then(res =>
              dispatch({
                type: NewsDetail,
                payload:res.data
              }),
            )

      };
      export const addBill = (bill) => (
        dispatch
      ) => {
        axios
          .post(`${OwnerServer}/bill`, bill)
          .then(res =>
            dispatch({
              type:AddBill,
              payload:(res.data.msg)?(res.data.bill):(res.data.nothing),
              msg:res.data.msg,
              error:res.data.error
            }))
      }
      export const getBill =()=>(dispatch)=>{
        axios.get(`${OwnerServer}/bill`)
          .then(res=>dispatch({
            type:GetBill,
            payload:res.data
          }))
      }
      export const updateBill =(id,bill)=>(dispatch)=>{
        axios.post(`${OwnerServer}/bill/${id}`, bill)
          .then(res=>dispatch({
            type:UpdateBill,
            payload:res.data.bills,
            msg:res.data.msg
          }))
      }
      export const deleteBill =(id)=>(dispatch)=>{
        axios.delete(`${OwnerServer}/bill/`+id)
          .then(res=>dispatch({
            type:DeleteBill,
            payload:id,
            msg: res.data
          }))
      }
      export const billDetail = (id) => (dispatch) => {
          dispatch(setLoading());
          axios
            .get(`${OwnerServer}/bill/`+id)
              .then(res =>
                dispatch({
                  type: BillDetail,
                  payload:res.data
                }),
              )

        };
        export const getClassBill = (clas) => (dispatch) => {
            dispatch(setLoading());
            axios
              .get(`${OwnerServer}/classbill/`+clas)
                .then(res =>
                  dispatch({
                    type: ClassBill,
                    payload:res.data
                  }),
                )

          };

          export const addChat = (chat) => (
            dispatch
          ) => {
          
              dispatch({
                type:AddChat,
                payload:chat
              })
            }
            export const getChat =()=>(dispatch)=>{
              axios.get(`${OwnerServer}/chat`)
                .then(res=>dispatch({
                  type:GetChat,
                  payload:res.data
                }))
            }
            export const updateChat =(id,chat)=>(dispatch)=>{
              axios.post(`${OwnerServer}/chat/${id}`, chat)
                .then(res=>dispatch({
                  type:UpdateChat,
                  payload:res.data
                }))
            }
            export const deleteChat =(id)=>(dispatch)=>{
              axios.delete(`${OwnerServer}/chat/`+id)
                .then(res=>dispatch({
                  type:DeleteChat,
                  payload:id
                }))
            }

  export const setLoading = () => {
    return {
      type: Loading
    };
  };
