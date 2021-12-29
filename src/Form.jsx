import React from "react";
import styled from "styled-components";

export default function Form() {
  const CardDetails = styled.h1`
    font-weight: normal;
  `;
  const LongInput = styled.input`
    width: 230px;
    height: 34px;
    background-color: #eee8e8;
    border: 1.5px solid black;
  `;
  const CardSecurityDetails = styled.input`
    width: 82px;
    height: 34px;
    background-color: #eee8e8;
    border: 1.5px solid black;
  `;

  const SecurityDeetsDiv = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-evenly;
  `;

  const CheckBoxDiv = styled.div`
    margin-top: 30px;
    font-size: 13px;
  `;
  const CheckBoxSize = styled.input`
    height: 18px;
    width: 19px;
    background-color: #c4c4c4;
  `;

  const ProceedButton = styled.button`
    height: 40px;
    width: 237px;
    border-radius: 20px;
    background-color: rgba(62, 67, 186, 0.73);
    color: white;
    margin-top: 50px;
  `;

  return (
    <>
      <CardDetails>Card Details </CardDetails>

      <form>
        <label>Name:</label>
        <br />
        <LongInput input type="text" id="name" name="name" />
        <br />
        <label>Credit Card Number</label>
        <br />
        <LongInput
          type="text"
          id="CC"
          name="Credit Card 
        <Number"
        />
        <br />
        <SecurityDeetsDiv>
          <div>
            <label>Expiry Date</label>
            <br />
            <CardSecurityDetails type="text" id="expiry" name="expiration" />
            <br />
          </div>
          <div style={{ textAlign: "left" }}>
            <label>CVC</label>
            <br />
            <CardSecurityDetails type="text" id="CVC" name="CVC" />
          </div>
        </SecurityDeetsDiv>
        <CheckBoxDiv>
          <CheckBoxSize />
          <label>Save for future purchases</label>
          <br />
          <CheckBoxSize />
          <label>Billing Address is the same as shipping address</label>
        </CheckBoxDiv>
      </form>
      <ProceedButton>Proceed</ProceedButton>
    </>
  );
}
