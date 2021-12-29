import React from 'react';
import styled from 'styled-components';


export default function Form() {
  
  const CardDetails = styled.h1`
  font-weight:normal;
  `
  const LongInput = styled.input`
  width:230px;
  height:34px;
  `
  const CardSecurityDetails = styled.input`
  width:82px;
  height:34px;
  `

  return (
    <>
    <CardDetails>Card Details </CardDetails>

    <form>
      <label>
        Name: 
        </label>
        <br/>
        <LongInput nput type='text' id='name' name='name' />
        <br/>
        <label>
          Credit Card Number 
        </label>
        <br />
        <LongInput type='text' id='CC' name='Credit Card 
        <Number'/>
        <br />
        <div className='security-deets'>
        <label>
          Expiry Date 
        </label>
        <br />
          <CardSecurityDetails type='text' id='expiry' name='expiration' />
          <br />
          <label>
            CVC 
          </label>
          <br />
          <CardSecurityDetails
            type='text'
            id='CVC'
            name='CVC'
          />
        </div>
    </form>
      </>
)
}