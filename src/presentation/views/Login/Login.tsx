import React, { useState } from 'react';
import { TextField, Button, Link } from '@mui/material';
import { styled } from '@mui/system';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const FormContainer = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
  padding: 5rem 1rem;
`;

const WhiteTextField = styled(TextField)`
  background-color: #111105 !important;

  & .MuiOutlinedInput-root {
    fieldset {
      border-color: #fdfe02;
    }
    &:hover fieldset {
      border-color: #fdfe02;
    }
    &.Mui-focused fieldset {
      border-color: #fdfe02;
    }
    & .MuiInputLabel-root.Mui-focused {
      color: #fdfe02;
    }
  }
  & .MuiInputLabel-root.Mui-focused {
    color: #fdfe02;
  }
  & .MuiInputLabel-root {
    color: #fdfe02;
  }
  & .MuiInputBase-input::placeholder {
    color: #fdfe02;
  }
`;

const YellowButton = styled(Button)`
  background-color: #fdfe02;
  &:hover {
    background-color: #fdfe02;
  }
`;

const Title = styled('h1')`
  color: #fdfe02;
  text-align: center;
`;

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    if (email && password) {
      // All fields are filled, proceed with form submission
      if (password.length < 8) {
        toast.error('A senha deve ter pelo menos 8 caracteres!');
      } else {
        // Close all other toasts before showing success toast
        toast.dismiss();
        toast.success('Login efetuado com sucesso!');
      }
    } else {
      // Display error message or prevent form submission
      toast.error('Por favor, preencha todos os campos!');
    }
  };

  const handleSignUpClick = () => {
    router.push('/signup');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Fazer Login</Title>
      <WhiteTextField
        label="Email"
        variant="outlined"
        type="email"
        inputProps={{ style: { color: '#fdfe02' } }}
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <WhiteTextField
        label="Senha"
        variant="outlined"
        type="password"
        inputProps={{
          style: { color: '#fdfe02' },
        }}
        value={password}
        onChange={event => setPassword(event.target.value)}
        helperText="A senha deve ter pelo menos 8 caracteres."
        FormHelperTextProps={{ style: { color: '#fdfe02' } }}
        InputLabelProps={{ style: { color: '#fdfe02' } }}
      />
      <YellowButton
        type="submit"
        variant="contained"
        color="primary"
        style={{ color: '#111105', fontWeight: 'bold' }}
      >
        Entrar
      </YellowButton>
      <Link
        href="/cadastrar"
        onClick={handleSignUpClick}
        style={{ color: '#fff' }}
      >
        Não tem uma conta? Cadastre-se aqui.
      </Link>
    </FormContainer>
  );
};
