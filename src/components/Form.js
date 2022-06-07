import { Box, Button, TextField } from "@mui/material";
import { useRef } from "react";

function Form({ isRegister, onSubmit, title }) {
    const emailInputRef = useRef(null);
    const nameInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const handleButtonClick = () => {
        if (onSubmit) {
            const email = emailInputRef.current.value;
            const password = passwordInputRef.current.value;

            if (isRegister) {
                const name = nameInputRef.current.value;
                onSubmit(email, password, name);
            } else {
                onSubmit(email, password);
            }
        }
    }

    return <div>
        <div className="heading-container">
            <h3>
                {title} Form
            </h3>
        </div>

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {isRegister && <TextField
                id="name"
                inputRef={nameInputRef}
                type="text"
                label="Enter your name"
                variant="outlined"
            />}
            <TextField
                id="email"
                inputRef={emailInputRef}
                type="email"
                label="Enter the Email"
                variant="outlined"
            />
            <TextField
                id="password"
                inputRef={passwordInputRef}
                type="password"
                label="Enter the Password"
                variant="outlined"
                inputProps={{ minLength: 6 }}
            />
        </Box>

        <Button variant="contained" onClick={handleButtonClick}>{title}</Button>
    </div>
}

export default Form;