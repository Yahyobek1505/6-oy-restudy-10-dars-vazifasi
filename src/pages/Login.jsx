import Button from '@mui/material/Button';
import { Box, TextField } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
function Login() {

  function handleLogin(e) {
    e.preventDefault();
    console.log(name.current.value);
    const isValid = validation(name, email, password, repassword);
    if (isValid) {
      const user = {
        username: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      setloading(true);
      fetch("https://auth-rg69.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if ((data.message == "User registered successfully!")) {
            navigate("/home");
          }
          if ((data.message == "Failed! Email is already in use!")) {
            alert(data.message);
            email.current.focus();
          }
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setloading(false);
        });
    }
  }

  return (
    <>
      <div className=" h-screen px-4 pt-10">
        <div className=" container mx-auto block w-[500px] bg-slate-50 shadow-sm shadow-current text-center p-4 form column border-2">
        <h1 className="text-4xl font-semibold mb-4">Login</h1>
        <Box  component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25rem'},
      }}
      className='mb-4'
      noValidate
      autoComplete="off">
        <TextField className="w-96" type="text" id="outlined-basic1" label="User name" variant="outlined" /> 
        <TextField className="w-96" type="password" id="outlined-basic2" label="Password" variant="outlined" />
        <Button onClick={handleLogin} className="w-56"  variant="contained">Login</Button>
        </Box>
        <span >Not a member yet?</span>
        <Link to="/register" className="text-blue-700 ml-2">Register</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
