import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import jwt_decode from 'jwt-decode'
import { 
    crecheDebt,
    kg2Debt,
    kg1Debt,
    nur1Debt,
    nur2Debt,
    basic1Debt,
    basic2Debt,
    basic3Debt,
    basic4Debt,
    basic5Debt,
    basic6Debt,
    jss1Debt,
    jss2Debt,
    jss3Debt,
    sss1Debt,
    sss2Debt,
    sss3Debt,
    allReceipt
 } from '../actions/actions';
import TopNav from './TopNav';
import LineChart from './Charts/Line'
import BarChart from './Charts/Bar';
import { InvoiceManagement, ListManagement, ManagementNavs, TableManagement } from './utilities/Cards';
import CountUp from 'react-countup';
export class DebtManagement extends Component {
componentWillMount(){
    const decode = jwt_decode(localStorage.token)
    this.props.allReceipt()
    if(decode.clas==='Primary'){
        this.props.crecheDebt()
        this.props.kg1Debt()
        this.props.kg2Debt()
        this.props.nur1Debt()
        this.props.nur2Debt()
        this.props.basic1Debt()
        this.props.basic2Debt()
        this.props.basic3Debt()
        this.props.basic4Debt()
        this.props.basic5Debt()
        this.props.basic6Debt()
    }
    else if(decode.clas==='Secondary'){
        this.props.jss1Debt()
        this.props.jss2Debt()
        this.props.jss3Debt()
        this.props.sss1Debt()
        this.props.sss2Debt()
        this.props.sss3Debt()
    }
    else{
        this.props.crecheDebt()
        this.props.kg1Debt()
        this.props.kg2Debt()
        this.props.nur1Debt()
        this.props.nur2Debt()
        this.props.basic1Debt()
        this.props.basic2Debt()
        this.props.basic3Debt()
        this.props.basic4Debt()
        this.props.basic5Debt()
        this.props.basic6Debt()
        this.props.jss1Debt()
        this.props.jss2Debt()
        this.props.jss3Debt()
        this.props.sss1Debt()
        this.props.sss2Debt()
        this.props.sss3Debt()
    }
}
render() {
    const {receipt} = this.props.receipt
    const decode = jwt_decode(localStorage.token)
    const debts = this.props.debts
                            const {
                              creche,
                              kg1,
                              kg2,
                              nur1,
                              nur2,
                              basic1,
                              basic2,
                              basic3,
                              basic4,
                              basic5,
                              basic6,
                              jss1,
                              jss2,
                              jss3,
                              sss1,
                              sss2,
                              sss3
                            } = debts
        console.log(debts)
        function sum(input){
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
          const cd = sum(debts ? creche ? creche.length ? creche.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const cp = sum(debts ? creche ? creche.length ? creche.map(debt=>(debt.amountPaid)) : null : null : null)
          const k1d = sum(debts ? kg1 ? kg1.length ? kg1.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const k1p = sum(debts ? kg1 ? kg1.length ? kg1.map(debt=>(debt.amountPaid)) : null : null : null)
          const k2d = sum(debts ? kg2 ? kg2.length ? kg2.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const k2p = sum(debts ? kg2 ? kg2.length ? kg2.map(debt=>(debt.amountPaid)) : null : null : null)
          const n1d = sum(debts ? nur1 ? nur1.length ? nur1.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const n1p = sum(debts ? nur1 ? nur1.length ? nur1.map(debt=>(debt.amountPaid)) : null : null : null)
          const n2d = sum(debts ? nur2 ? nur2.length ? nur2.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const n2p = sum(debts ? nur2 ? nur2.length ? nur2.map(debt=>(debt.amountPaid)) : null : null : null)
          const b1d = sum(debts ? basic1 ? basic1.length ? basic1.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const b1p = sum(debts ? basic1 ? basic1.length ? basic1.map(debt=>(debt.amountPaid)) : null : null : null)
          const b2d = sum(debts ? basic2 ? basic2.length ? basic2.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const b2p = sum(debts ? basic2 ? basic2.length ? basic2.map(debt=>(debt.amountPaid)) : null : null : null)
          const b3d = sum(debts ? basic3 ? basic3.length ? basic3.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const b3p = sum(debts ? basic3 ? basic3.length ? basic3.map(debt=>(debt.amountPaid)) : null : null : null)
          const b4d = sum(debts ? basic4 ? basic4.length ? basic4.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const b4p = sum(debts ? basic4 ? basic4.length ? basic4.map(debt=>(debt.amountPaid)) : null : null : null)
          const b5d = sum(debts ? basic5 ? basic5.length ? basic5.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const b5p = sum(debts ? basic5 ? basic5.length ? basic5.map(debt=>(debt.amountPaid)) : null : null : null)
          const b6d = sum(debts ? basic6 ? basic6.length ? basic6.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const b6p = sum(debts ? basic6 ? basic6.length ? basic6.map(debt=>(debt.amountPaid)) : null : null : null)
          const j1d = sum(debts ? jss1 ? jss1.length ? jss1.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const j1p = sum(debts ? jss1 ? jss1.length ? jss1.map(debt=>(debt.amountPaid)) : null : null : null)
          const j2d = sum(debts ? jss2 ? jss2.length ? jss2.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const j2p = sum(debts ? jss2 ? jss2.length ? jss2.map(debt=>(debt.amountPaid)) : null : null : null)
          const j3d = sum(debts ? jss3 ? jss3.length ? jss3.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const j3p = sum(debts ? jss3 ? jss3.length ? jss3.map(debt=>(debt.amountPaid)) : null : null : null)
          const s1d = sum(debts ? sss1 ? sss1.length ? sss1.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const s1p = sum(debts ? sss1 ? sss1.length ? sss1.map(debt=>(debt.amountPaid)) : null : null : null)
          const s2d = sum(debts ? sss2 ? sss2.length ? sss2.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const s3d = sum(debts ? sss3 ? sss3.length ? sss3.map(debt=>(debt.fees-debt.amountPaid)) : null : null : null)
          const s3p = sum(debts ? sss3 ? sss3.length ? sss3.map(debt=>(debt.amountPaid)) : null : null : null)
          const s2p = sum(debts ? sss2 ? sss2.length ? sss2.map(debt=>(debt.amountPaid)) : null : null : null)
          const data = decode.clas==='Both' ? [
              {clas:'Creche',paid:cp,debtor:cd},
              {clas:'KG1',paid:k1p,debtor:k1d},
              {clas:'KG2',paid:k2p,debtor:k2d},
              {clas:'NUR1',paid:n1p,debtor:n1d},
              {clas:'NUR2',paid:n2p,debtor:n2d},
              {clas:'Basic1',paid:b1p,debtor:b1d},
              {clas:'Basic2',paid:b2p,debtor:b2d},
              {clas:'Basic3',paid:b3p,debtor:b3d},
              {clas:'Basic4',paid:b4p,debtor:b4d},
              {clas:'Basic5',paid:b5p,debtor:b5d},
              {clas:'Basic6',paid:b6p,debtor:b6d},
              {clas:'Jss1',paid:j1p,debtor:j1d},
              {clas:'Jss2',paid:j2p,debtor:j2d},
              {clas:'Jss3',paid:j3p,debtor:j3d},
              {clas:'Sss1',paid:s1p,debtor:s1d},
              {clas:'Sss2',paid:s2p,debtor:s2d},
              {clas:'Sss3',paid:s3p,debtor:s3d}
          ] : decode.clas==='Secondary' ? [
            {clas:'Jss1',paid:j1p,debtor:j1d},
              {clas:'Jss2',paid:j2p,debtor:j2d},
              {clas:'Jss3',paid:j3p,debtor:j3d},
              {clas:'Sss1',paid:s1p,debtor:s1d},
              {clas:'Sss2',paid:s2p,debtor:s2d},
              {clas:'Sss3',paid:s3p,debtor:s3d}
          ] : [
            {clas:'Creche',paid:cp,debtor:cd},
              {clas:'KG1',paid:k1p,debtor:k1d},
              {clas:'KG2',paid:k2p,debtor:k2d},
              {clas:'NUR1',paid:n1p,debtor:n1d},
              {clas:'NUR2',paid:n2p,debtor:n2d},
              {clas:'Basic1',paid:b1p,debtor:b1d},
              {clas:'Basic2',paid:b2p,debtor:b2d},
              {clas:'Basic3',paid:b3p,debtor:b3d},
              {clas:'Basic4',paid:b4p,debtor:b4d},
              {clas:'Basic5',paid:b5p,debtor:b5d},
              {clas:'Basic6',paid:b6p,debtor:b6d}
          ]
return (
            <div className="main-content position-relative">
                <TopNav/>
            <div class="page-content">
            <div class="row">
        <div class="col-lg-4">
          <div class="card card-stats hover-shadow-lg hover-translate-y-n10">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h6 class="text-muted mb-1">Income Received</h6>
                  <span class="h5 font-weight-bold mb-0"><CountUp end={sum(data.map(data=>data.paid))} duration={7}/></span>
                </div>
                <div class="col-auto">
                  <div class="icon bg-gradient-warning text-white rounded-circle icon-shape">
                    <i class="far fa-money-bill-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card card-stats hover-shadow-lg hover-translate-y-n10">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h6 class="text-muted mb-1">Expected Income</h6>
                  <span class="h5 font-weight-bold mb-0"><CountUp end={sum(data.map(data=>data.debtor))} duration={7}/></span>
                </div>
                <div class="col-auto">
                  <div class="icon bg-gradient-primary text-white rounded-circle icon-shape">
                    <i class="far fa-money-bill-wave"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card card-stats hover-shadow-lg hover-translate-y-n10">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h6 class="text-muted mb-1">Total Estimated Income</h6>
                  <span class="h5 font-weight-bold mb-0"><CountUp end={sum(data.map(data=>data.paid)) + sum(data.map(data=>data.debtor))} duration={7}/></span>
                </div>
                <div class="col-auto">
                  <div class="icon bg-gradient-danger text-white rounded-circle icon-shape">
                    <i class="far fa-money-bill-wave-alt"></i>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
                <div className="card hover-shadow-lg">
                    <div className="card-header">
                    <ManagementNavs/>
                    </div>
                    <div className="card-body">
                <div class="tab-content">
  <div class="tab-pane container active" id="line">
                            <LineChart
                            cd={cd}
                            cp={cp}
                            k1d={k1d}
                            k1p={k1p} 
                            k2d={k2d}
                            k2p={k2p} 
                            n1d={n1d}
                            n1p={n1p} 
                            n2d={n2d}
                            n2p={n2p} 
                            b1d={b1d}
                            b1p={b1p}
                            b2d={b2d}
                            b2p={b2p}
                            b3d={b3d}
                            b3p={b3p}
                            b4d={b4d}
                            b4p={b4p}
                            b5d={b5d}
                            b5p={b5p}
                            b6d={b6d}
                            b6p={b6p}
                            j1d={j1d}
                            j1p={j1p} 
                            j2d={j2d}
                            j2p={j2p} 
                            j3d={j3d}
                            j3p={j3p} 
                            s1d={s1d}
                            s1p={s1p} 
                            s2d={s2d}
                            s2p={s2p}
                            s3d={s3d} 
                            s3p={s3p} 
                            />
                        </div>
                        <div class="tab-pane container fade" id="bar"> 
                        <BarChart
                            cd={cd}
                            cp={cp}
                            k1d={k1d}
                            k1p={k1p} 
                            k2d={k2d}
                            k2p={k2p} 
                            n1d={n1d}
                            n1p={n1p} 
                            n2d={n2d}
                            n2p={n2p} 
                            b1d={b1d}
                            b1p={b1p}
                            b2d={b2d}
                            b2p={b2p}
                            b3d={b3d}
                            b3p={b3p}
                            b4d={b4d}
                            b4p={b4p}
                            b5d={b5d}
                            b5p={b5p}
                            b6d={b6d}
                            b6p={b6p}
                            j1d={j1d}
                            j1p={j1p} 
                            j2d={j2d}
                            j2p={j2p} 
                            j3d={j3d}
                            j3p={j3p} 
                            s1d={s1d}
                            s1p={s1p} 
                            s2d={s2d}
                            s2p={s2p}
                            s3d={s3d} 
                            s3p={s3p} 
                            />
                        </div>
                        <div className="tab-pane container fade" id="table">
                            <TableManagement data={data}/>
                        </div>
                        <div className="tab-pane container fade" id="payment">
                            <div className="card">
                                <div className="card-header">
                            </div>
                        <nav class="nav nav-pills nav-pills-icon nav-justified">
    <a class="nav-item nav-link py-3 active" data-toggle='tab' href="#list">
    <span class="d-block">
            <i class="far fa-list fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">List</span>
    </a>
    <a  class="nav-item nav-link py-3" data-toggle='tab' href="#invoice">
    <span class="d-block">
            <i class="far fa-object-group fa-2x"></i>
        </span>
        <span class="d-none d-sm-block mt-2">Invoice</span>
    </a>
    </nav>
    </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                    <div className="tab-pane container active" id='list'>
                                        <ListManagement receipt={receipt}/>
                                    </div>
                                    <div className="tab-pane container fade" id='invoice'>
                                        <InvoiceManagement receipt={receipt}/>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
DebtManagement.propTypes={
    crecheDebt:PropTypes.func.isRequired,
    kg2Debt:PropTypes.func.isRequired,
    kg1Debt:PropTypes.func.isRequired,
    nur1Debt:PropTypes.func.isRequired,
    nur2Debt:PropTypes.func.isRequired,
    basic1Debt:PropTypes.func.isRequired,
    basic2Debt:PropTypes.func.isRequired,
    basic3Debt:PropTypes.func.isRequired,
    basic4Debt:PropTypes.func.isRequired,
    basic5Debt:PropTypes.func.isRequired,
    basic6Debt:PropTypes.func.isRequired,
    jss1Debt:PropTypes.func.isRequired,
    jss2Debt:PropTypes.func.isRequired,
    jss3Debt:PropTypes.func.isRequired,
    sss1Debt:PropTypes.func.isRequired,
    sss2Debt:PropTypes.func.isRequired,
    sss3Debt:PropTypes.func.isRequired,
    debts:PropTypes.object.isRequired,
    receipt:PropTypes.object.isRequired,
    allReceipt:PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return{
        debts:state.debts,
        receipt:state.receipt
    }
}
export default connect(mapStateToProps, {
    crecheDebt,
    kg2Debt,
    kg1Debt,
    nur1Debt,
    nur2Debt,
    basic1Debt,
    basic2Debt,
    basic3Debt,
    basic4Debt,
    basic5Debt,
    basic6Debt,
    jss1Debt,
    jss2Debt,
    jss3Debt,
    sss1Debt,
    sss2Debt,
    sss3Debt,
    allReceipt
})(DebtManagement)
