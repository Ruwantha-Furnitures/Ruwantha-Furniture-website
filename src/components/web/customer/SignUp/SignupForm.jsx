import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FormStyle from "../../../../css/web/Form.module.css";
import "../../../../css/web/Signup.css";
import axios from "axios";

const SignupForm = ({ signUpHandler }) => {
  require("bootstrap/dist/css/bootstrap.min.css");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contact_number, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // search account
      const validAccount = await axios.get(
        `http://localhost:8080/api/signup/${email}`
      );
      console.log(validAccount);

      if (validAccount.data === "") {
        console.log("No such email on the database");
        if (password === confirmPassword) {
          console.log("matched");
          signUpHandler({
            first_name,
            last_name,
            email,
            address,
            contact_number,
            password,
          });
        } else {
          alert("Password not matched");
          setPassword("");
          setConfirmPassword("");
        }
      } else {
        alert("The email has been already used");
        setEmail("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Card
        className={FormStyle.cardbox}
        style={{
          marginBottom: "20px",
          width: "21rem",
          border: "solid 3px bisque",
          boxShadow: "0px 0px 20px #000",
        }}
      >
        <Form
          style={{ padding: "20px", margin: "10px" }}
          onSubmit={submitHandler}
        >
          <center>
            <h2>Sign Up</h2>
          </center>

          <input
            style={{ width: "260px" }}
            className={FormStyle.textBox}
            name="first_name"
            type="text"
            placeholder="First Name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <br />
          <input
            style={{ width: "260px" }}
            className={FormStyle.textBox}
            name="last_name"
            type="text"
            placeholder="Last Name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <br />

          <input
            style={{ width: "260px" }}
            className={FormStyle.textBox}
            name="address"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <br />

          <input
            style={{ width: "260px" }}
            className={FormStyle.textBox}
            name="telephone"
            type="tele"
            pattern="[0-9]{10}"
            placeholder="Contact Number"
            value={contact_number}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
          <br />

          <input
            style={{ width: "260px" }}
            className={FormStyle.emailBox}
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label>
            <b>
              <i style={{ fontSize: "10px" }}>
                **Use at least one lowercase, uppercase and digit. Minimum
                length is 6 characters.
              </i>
            </b>
          </label>
          <br />

          <input
            style={{ width: "260px" }}
            className={FormStyle.passwordBox}
            name="password"
            type="password"
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />

          <input
            style={{ width: "260px" }}
            className={FormStyle.passwordBox}
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <br />

          <center>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  style={{ fontSize: "14px" }}
                  inline
                  label=" I agree to the terms and conditions"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                  required
                />
              </div>
            ))}
          </center>
          <center>
            {/*<button  type="submit" className={NavButtonStyle.btn}>Sign Up</button>*/}
            <Button variant="danger" type="reset">
              {" "}
              Cancel
            </Button>{" "}
            <Button variant="success" type="submit">
              Signup
            </Button>{" "}
          </center>
        </Form>
      </Card>
    </div>
  );
};
export default SignupForm;
