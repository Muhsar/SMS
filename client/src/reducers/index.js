import { combineReducers } from "redux";
import getTeachers from './getTeachers'
import getStudents from './getStudents'
import teacherDetail from './teacherDetail'
import studentDetail from './studentDetail'
import getNews from './getNews'
import newsDetail from './newsDetail'
import getBill from './getBill'
import billDetail from './billDetail'
import getChat from './getChat'
import getReceipt from './getReceipt'
import SchoolData from './schoolData'
import getStudentBill from './getStudentBill'
import studentBillDetail from './studentBillDetail'
import getResult from './getResult'
import debts from './feeManagement'
import typing from './typing'
export default combineReducers({
  teachers:getTeachers,
  students:getStudents,
  student:studentDetail,
  teacher:teacherDetail,
  news: getNews,
  info:newsDetail,
  classBill:billDetail,
  bill:getBill,
  chats:getChat,
  receipt: getReceipt,
  school:SchoolData,
  studentBill:getStudentBill,
  debtor:studentBillDetail,
  result:getResult,
  debts,
  typing:typing
})
