
import Button from '@mui/material/Button';
import { Box, TextField } from "@mui/material";
function Login() {
  return (
    <>
      <div className=" h-screen px-4 pt-10">
        <div className=" container mx-auto block w-[500px] bg-slate-50 shadow-sm shadow-current text-center p-4 form column border-2">
        <h1 className="text-4xl font-semibold mb-4">Login</h1>
        <Box  component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25rem'},
      }}
      noValidate
      autoComplete="off">
        <TextField className="w-96" type="text" id="outlined-basic" label="User name" variant="outlined" /> 
        <TextField className="w-96" type="password" id="outlined-basic" label="Password" variant="outlined" />
        <Button className="w-56"  variant="contained">Send</Button>
        </Box>
        </div>
      </div>
    </>
  );
}

export default Login;
