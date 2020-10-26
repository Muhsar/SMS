import React from 'react'
import { Line } from 'react-chartjs-2'
import jwt_decode from 'jwt-decode';
const decode = localStorage.token ? jwt_decode(localStorage.token) : null
export const LineChart=({
  cd,
  cp,
  k1d,
  k1p, 
  k2d,
  k2p, 
  n1d,
  n1p, 
  n2d,
  n2p, 
  b1d,
  b1p,
  b2d,
  b2p,
  b3d,
  b3p,
  b4d,
  b4p,
  b5d,
  b5p,
  b6d,
  b6p,
  j1d,
  j1p, 
  j2d,
  j2p, 
  j3d,
  j3p, 
  s1d,
  s1p, 
  s2d,
  s2p,
  s3d, 
  s3p
})=>{
  const data = {
    labels: decode.clas==='Both' ? [
      'Creche',
      'KG1',
      'KG2',
      'NUR1',
      'NUR2',
      'Basic1',
      'Basic2',
      'Basic3',
      'Basic4',
      'Basic5',
      'Basic6',
      'Jss1',
      'Jss2',
      'Jss3',
      'Sss1',
      'Sss2',
      'Sss3'
     ] : decode.clas==='Primary' ? ['Creche',
     'KG1',
     'KG2',
     'NUR1',
     'NUR2',
     'Basic1',
     'Basic2',
     'Basic3',
     'Basic4',
     'Basic5',
     'Basic6'] : [
       'Jss1',
      'Jss2',
      'Jss3',
      'Sss1',
      'Sss2',
      'Sss3'
     ],
    datasets: [
      {
        label: 'Debt',
        data:   decode.clas==='Primary' ? [
          cd,k1d,k2d,n1d,n2d,b1d,b2d,b3d,b4d,b5d,b6d
        ] : decode.clas==='Secondary' ? [
          j1d,j2d,j3d,s1d,s2d,s3d
        ] : [
          cd,k1d,k2d,n1d,n2d,b1d,b2d,b3d,b4d,b5d,b6d,j1d,j2d,j3d,s1d,s2d,s3d
        ],
        borderColor: ['#ff5630'],
        backgroundColor: ['#ffddd6'],
        pointBackgroundColor: '#ff5630',
        pointBorderColor: '#ff5630'
      },
      {
        label: 'Paid',
        data: decode.clas==='Primary' ? [
          cp,k1p,k2p,n1p,n2p,b1p,b2p,b3p,b4p,b5p,b6p
        ] : decodeURIComponent.clas==='Secondary' ? [
          j1p,j2p,j3p,s1p,s2p,s3p
        ] : [
          cp,k1p,k2p,n1p,n2p,b1p,b2p,b3p,b4p,b5p,b6p,j1p,j2p,j3p,s1p,s2p,s3p
        ],
        borderColor: ['#36b37e'],
        backgroundColor: ['#d7f0e5'],
        pointBackgroundColor: '#36b37e',
        pointBorderColor: '#36b37e'
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Line Chart'
    }
  }

  return <Line data={data} options={options} />
}

export default LineChart