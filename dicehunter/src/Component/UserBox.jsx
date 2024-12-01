import React, { useState } from "react";
export default function UserBox({
  userKey,
  userValue,
  handledicenumber,
  holdebtnuserdata,
  currentUser,
  userDataCurrentScore,
  winnwer,
  timer,
}) {
  return (
    <div className="col-sm-4 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body">
          <p>{currentUser === userKey && timer}</p>
          <h5 className="card-title">Score: {userValue}</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <p>{userDataCurrentScore}</p>
          <div className="Button_for_operation">
            <button
              className="btn btn-success"
              onClick={handledicenumber}
              disabled={currentUser !== userKey || winnwer}
            >
              dice
            </button>
            <button
              className="btn btn-danger"
              onClick={holdebtnuserdata}
              disabled={currentUser !== userKey || winnwer}
            >
              hold
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
