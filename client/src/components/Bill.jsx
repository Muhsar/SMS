import React, { Component } from 'react'
import { BillHeader, BillsCard } from './utilities/Cards';
import { NewBill } from './utilities/RegisterModal'
import { BillsPage } from './utilities/Titles';
import {AllBills} from './utilities/Tables'
import axios from 'axios'
import {addBill,getBill,billDetail, deleteBill, updateBill} from '../actions/actions'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { OwnerServer } from '../servers';
import { UpdateBill } from './utilities/UpdateModal';
import $ from 'jquery'
import TopNav from './TopNav';
class Bill extends Component {
    state={
        clas:'',
        fees:'',
        uniform:'',
        exerciseBooks:'',
        pricePerBook:'',
        textBooks:[],
        name:'',
        price:'',
        modal:false
      }
        componentDidMount() {
          this.props.getBill()
          // ptfNotifications()
          // if(this.props.bill.msg!==''){
          //   toast.success(this.props.bill.msg,{
          //     position: toast.POSITION.TOP_RIGHT,
          //     autoClose: 10000
          //   })
          // }
        }
        handleToggle=()=>{
          this.setState({modal:!this.state.modal})
          console.log('toggle Clicked')
        }
        openUpdateModal=(id)=>{
          axios.get(`${OwnerServer}/bill/`+id)
          .then(res=>{
            this.setState({
              clas:res.data.clas,
              fees:res.data.fees,
              uniform:res.data.uniform,
              exerciseBooks:res.data.exerciseBooks,
              pricePerBook:res.data.pricePerBook,
              textBooks:[...res.data.textBooks]
                })
              })
          this.props.billDetail(id)
          this.props.getBill()
          console.log('modal A clicked')
        }
        handleUpdate=e=>{
          e.preventDefault()
          const {classBill} = this.props.classBill
          const bill = {
            clas:this.state.clas,
            fees:this.state.fees,
            uniform:this.state.uniform,
            exerciseBooks:this.state.exerciseBooks,
            pricePerBook:this.state.pricePerBook,
            textBooks:this.state.textBooks
          }
          this.props.updateBill(classBill._id, bill)
          this.props.getBill()
          this.setState({msg:bill.clas+' bill updated successfull',textBooks:[],price:'',name:'',clas:'Please Select',fees:'',uniform:'',exerceiseBooks:'',pricePerBook:''})

          
      }
      handleDelete=(id)=>{
        // const {classBill} = this.props.classBill
        this.props.deleteBill(id)
        // this.setState({error:classBill.clas+' Deleted Successfully'})
        this.props.getBill()
        this.handleToggle()
      }
        handleChange=e=>{
          this.setState({[e.target.name]:e.target.value})
        }
        handleSubmit=e=>{
          e.preventDefault()
          const bill = {
            clas:this.state.clas,
            fees:this.state.fees,
            uniform:this.state.uniform,
            exerciseBooks:this.state.exerciseBooks,
            pricePerBook:this.state.pricePerBook,
            textBooks:this.state.textBooks
          }
          console.log(bill)
          this.props.addBill(bill)
          this.setState({msg:bill.clas+' added successfully'})
          this.setState({textBooks:[],price:'',name:'',clas:'Please Select',fees:'',uniform:'',exerceiseBooks:'',pricePerBook:''})
          
        }
    handleAdd=e=>{
        e.preventDefault()
        this.setState({textBooks:[...this.state.textBooks,{id:(Math.random()),name:this.state.name,price:Number(this.state.price)}],
        price:'',
        name:''
    })
    }
    handleRemove=(id)=>{
        console.log(id)
        this.setState({textBooks:this.state.textBooks.filter(textbook=> textbook.id!==id)})
        
    }
    handleSearch=()=>{
      $("#mySearch").on("keyup", function() {
        var value = $(this).val().toLowerCase()
        $("#myBill .card").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
      })
  }
    render() {
      const sum=(input)=>{
        if(toString.call(input)!=="[object Array]")
        return false
        var total = 0
        for (var i = 0; i<input.length;i++){
          if(isNaN(input[i])){
            continue
          }
          total += Number(input[i])
        }
        return total
      }
      const {bill} = this.props.bill
      const {classBill} = this.props.classBill
        return (
          <div className="main-content position-relative">
                <TopNav/>
            <div className='page-content'>
                <NewBill
                change={this.handleChange}
                add={this.handleAdd}
                state={this.state}
                remove={this.handleRemove}
                submit={this.handleSubmit}
                />
                <UpdateBill
                state={this.state}
                submit={this.handleUpdate}
                change={this.handleChange}
                classBill={classBill}
                remove={this.handleRemove}
                add={this.handleAdd}
                />
                <BillsPage/>
                <BillsCard bill={bill}/>
                <div class="card">
          <BillHeader search={this.handleSearch}/>
          <div className='row'>
                        <div className='col-md-12 mx-auto' id='myBill'>
              <AllBills
              bill={bill}
              update={this.openUpdateModal}
              remove={this.handleDelete}
              sum={sum}
              />
                        </div>
                        </div>
        </div>
        </div>
    <div class="sidenav-mask mask-body d-xl-none" data-action="sidenav-unpin" data-target="#sidenav-main"></div>

            </div>
        )
    }
}
Bill.propTypes = {
  getBill:PropTypes.func.isRequired,
  bill:PropTypes.object.isRequired,
  billDetail:PropTypes.func.isRequired,
  classBill:PropTypes.object.isRequired
}
const mapStateToProps= state => {
  return{
    bill:state.bill,
    classBill:state.classBill
  }
}
export default connect(mapStateToProps,{addBill,getBill,billDetail, deleteBill, updateBill})(Bill)