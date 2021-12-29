import React from 'react';
import styled from 'styled-components'

export default function Card() {
  const CardContainer = styled.div`
  height:146px;
  width:262px;
  background-color: #E0E2F6;
  border-radius:20px;
  `

  const CardNumber = styled.p`
  text-align:left;
  font-size:18px;
  margin-left:5px;
  `
  const BankName = styled.p`
  text-align:right;
  `
  return (
    <>
      <div style={{display:'flex', justifyContent:'center',}}>
      <CardContainer>
          <BankName>Bank of something </BankName>
          <div>
          <CardNumber>1234 1234 1234 1234</CardNumber>
        </div>
        </CardContainer>
      </div>
      </>
  )
}