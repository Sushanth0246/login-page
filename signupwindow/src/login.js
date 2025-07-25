import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  InputAdornment,
  IconButton,
  Divider
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#fff"
    >
      <Box
        width="100%"
        maxWidth="400px"
        p={4}
        boxShadow={3}
        borderRadius={2}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Sign in
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          Please login to continue to your account.
        </Typography>

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          defaultValue="jonas_kahnwald@gmail.com"
          margin="normal"
        />

        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <FormControlLabel
          control={<Checkbox />}
          label="Keep me logged in"
          sx={{ mt: 1 }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, mb: 2 }}
        >
          Sign in
        </Button>

        <Divider>or</Divider>
      </Box>
    </Box>
  );
}
