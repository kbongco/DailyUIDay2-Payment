import React from 'react';
import styled from 'styled-components';
const CardContainerDiv = styled.div`
height:270px;
width:100%;
background-color:blue;
`

const Payment = styled.p`
margin:auto;
padding:20px;
color:white;
fontSize:26px;
`
export default function CardContainer() {
  return (
    <CardContainerDiv>
      <div className='choosepayment'>
      <Payment>Choose your payment method</Payment>
      </div>
    </CardContainerDiv>
  )
}