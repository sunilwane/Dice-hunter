import React, { useEffect, useState } from "react";
import "./Home.css";
import Swal from "sweetalert2";
import UserBox from "../Component/UserBox";
export default function Home() {
  const userintialdata = [{ user1: 0, user2: 0 }];
  const currentscore = [{ user1: 0, user2: 0 }];

  const [user1, setUser1] = useState(true);
  const [dicenumber, setDiceNUmber] = useState(0);
  const [userData, setUserData] = useState(currentscore);
  const [userDataCurrentScore, setUserDataCurrentScore] =
    useState(currentscore);
  const [currentUser, setCurrentUser] = useState("user1");
  const [winnwer, setWinner] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          holdebtnuserdata();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const checkWinner = (newData) => {
    if (newData[0].user1 >= 10) {
      Swal.fire({
        title: "User 1 Wins!",
        text: "Congratulations!",
        icon: "success",
      });
      setTimer(0);
      setWinner(true);
    } else if (newData[0].user2 >= 10) {
      Swal.fire({
        title: "User 2 Wins!",
        text: "Congratulations!",
        icon: "success",
      });
      setTimer(0);
      setWinner(true);
    }
  };

  const handledicenumber = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    setTimer(10);
    setDiceNUmber(number);
    setUserData((prevData) => {
      const newUserData = user1
        ? [{ ...prevData[0], user1: prevData[0].user1 + number }]
        : [{ ...prevData[0], user2: prevData[0].user2 + number }];

      return newUserData;
    });
    if (number === 1) {
      setUser1(!user1);
      setCurrentUser((prevUser) => (prevUser === "user1" ? "user2" : "user1"));
      setUserData(userintialdata);
    }
  };

  const holdebtnuserdata = () => {
    setTimer(10);
    setUser1(!user1);
    setCurrentUser((prevUser) => (prevUser === "user1" ? "user2" : "user1"));
    setUserData(userintialdata);
    setUserDataCurrentScore((prevData) => {
      const newUserData = user1
        ? [{ ...prevData[0], user1: prevData[0].user1 + userData[0].user1 }]
        : [{ ...prevData[0], user2: prevData[0].user2 + userData[0].user2 }];
      checkWinner(newUserData);
      return newUserData;
    });
  };

  const restartgame = () => {
    setUser1(true);
    setUserData(userintialdata);
    setDiceNUmber(0);
    setWinner(false);
    setTimer(10);
    setUserDataCurrentScore(currentscore);
  };

  const startgame = () => {
    setTimer();
  };

  return (
    <div className="App">
      <h1>
        {user1 ? "user1: " : "user2: "}
        {dicenumber}
      </h1>
      <ul>
        <li>user1: {userData[0]?.user1}</li>
        <li>user2: {userData[0]?.user2}</li>
      </ul>
      <div className="Button_for_operation">
        <button className="btn btn-primary" onClick={startgame}>
          start
        </button>
        <button className="btn btn-primary" onClick={restartgame}>
          restart
        </button>
      </div>

      <div className="userbox">
        {Object.entries(userData[0]).map(([key, value], index) => (
          <UserBox
            key={index}
            userKey={key}
            userValue={value}
            handledicenumber={handledicenumber}
            holdebtnuserdata={holdebtnuserdata}
            currentUser={currentUser}
            userDataCurrentScore={userDataCurrentScore[0][key]}
            winnwer={winnwer}
            timer={timer}
          />
        ))}
      </div>
    </div>
  );
}
