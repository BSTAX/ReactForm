import React, { useState } from "react";

const App = () => {
  const [fullname, setfullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    qua: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;

    setfullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };

      // if (name === "fName") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   };
      // }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("form Submitted");
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullname.fname} {fullname.lname}
            </h1>
            <p>{fullname.email}</p>
            <p>{fullname.phone}</p>
            <p>{fullname.qua}</p>

            <input
              type="text"
              placeholder="Enter your name"
              name="fname"
              onChange={inputEvent}
              value={fullname.fname}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your last Name"
              name="lname"
              onChange={inputEvent}
              value={fullname.lname}
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={inputEvent}
              value={fullname.email}
            />
            <input
              type="number"
              placeholder="Enter your number"
              name="phone"
              onChange={inputEvent}
              value={fullname.phone}
            />
            <input
              type="text"
              placeholder="Enter your Qualification"
              name="qua"
              onChange={inputEvent}
              value={fullname.qua}
            />
            <button type="submit" onClick={onSubmits}>
              submit me👍
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
