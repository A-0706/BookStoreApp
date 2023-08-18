import { TextField, Button, Typography, FormHelperText } from "@mui/material";
import { Formik, Form, validateYupSchema, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import authService from "../services/authService";
import { toast } from "react-toastify";
import axios from "axios";

const Form1 = () => {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [userdetails, setuserdetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState();
  const getData = async () => {
    await axios
      .get(`https://book-e-sell-node-api.vercel.app/api/user/byId?id=${2502}`)
      .then((res) => setUserData(res.data.result));
  };
  useEffect(() => {
    // if(userdetails.username.length>4){
    getData();
    // }
  }, []);
  console.log("1111", userData);

  const handlesubmit = async (values) => {
    console.log("username:", values.username);
    console.log("email:", values.email);
    console.log("password", values.password);

    const payload = {
      firstName: values.username,
      lastName: "test",
      email: values.email,
      roleId: 2,
      password: values.password,
    };
    console.log(payload.firstName);
    await authService
      .Register(payload)
      .then((response) => {
        if (response && response.status == 200) {
          // console.log("success");
          toast("Data submitted successfully");
        }
      })
      .catch((error) => {
        toast(error);
      });
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("username should not be empty"),
    email: Yup.string().email().required("email should not be empty"),
    password: Yup.string().min(8).required("password should not be empty"),
    age: Yup.number().min(18),
  });
  return (
    <Formik
      initialValues={{ username: "", age: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => handlesubmit(values)}
    >
      {({ values, errors, setFieldValue, handleBlur }) => {
        console.log("error", errors);
        return (
          <Form>
            <div className="form-demo">
              <Typography variant="h5" sx={{ color: "red" }}>
                Registeration Form
              </Typography>
              <TextField
                label="userName"
                name="userName"
                variant="outlined"
                error={errors.username}
                value={values.username}
                onChange={(e) => setFieldValue("username", e.target.value)}
                onBlur={handleBlur}
              />
              <FormHelperText error>
                <ErrorMessage name="username" />
              </FormHelperText>
              <TextField
                label="age"
                name="age"
                variant="outlined"
                error={errors.age}
                value={values.age}
                onChange={(e) => setFieldValue("age", e.target.value)}
                onBlur={handleBlur}
              />
              <FormHelperText error>
                <ErrorMessage name="age" />
              </FormHelperText>
              <TextField
                label="email"
                name="email"
                variant="outlined"
                value={values.email}
                onChange={(e) => setFieldValue("email", e.target.value)}
                onBlur={handleBlur}
              />
              <FormHelperText error>
                <ErrorMessage name="email" />
              </FormHelperText>
              <TextField
                label="password"
                name="password"
                variant="outlined"
                value={values.password}
                onChange={(e) => setFieldValue("password", e.target.value)}
                onBlur={handleBlur}
              />
              <FormHelperText error>
                <ErrorMessage name="password" />
              </FormHelperText>
              <Button
                variant="contained"
                id="button1"
                type="submit"
                onClick={handlesubmit}
              >
                {" "}
                submit{" "}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default Form1;
