import React, { useState } from 'react';
import {
  TextField,
  Button,
  Link,
  Radio,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/system';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { useSignUp } from '@/core/hooks/useSignUp';

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

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSponsor, setIsSponsor] = useState(false); // Added state for sponsor
  const router = useRouter();
  const { createAccount } = useSignUp();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    if (username && email && password) {
      // All fields are filled, proceed with form submission
      if (username.length < 5) {
        toast.error('O nome de usuário deve ter pelo menos 5 caracteres!');
      } else if (password.length < 8) {
        toast.error('A senha deve ter pelo menos 8 caracteres!');
      } else {
        try {
          await createAccount({
            username: username,
            email: email,
            senha: password,
            type: isSponsor ? 4 : 1, // Set type based on isSponsor state
          });
          // Close all other toasts before showing success toast

          router.push('/login'); // Redirecionar para a página de login após o cadastro bem-sucedido
        } catch (error) {
          toast.error(
            'Ocorreu um erro ao criar a conta. Por favor, tente novamente.',
          );
        }
      }
    } else {
      // Display error message or prevent form submission
      toast.error('Por favor, preencha todos os campos!');
    }
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Criar Conta</Title>
      <WhiteTextField
        label="Nome de Usuário"
        variant="outlined"
        inputProps={{ style: { color: '#fdfe02' } }}
        value={username}
        onChange={event => {
          setUsername(event.target.value);
          console.log('username', event.target.value);
        }}
      />
      <WhiteTextField
        label="Email"
        variant="outlined"
        type="email"
        inputProps={{ style: { color: '#fdfe02' } }}
        value={email}
        onChange={event => {
          setEmail(event.target.value);
          console.log('email', event.target.value);
        }}
      />
      <WhiteTextField
        label="Senha"
        variant="outlined"
        type="password"
        inputProps={{
          style: { color: '#fdfe02' },
        }}
        value={password}
        onChange={event => {
          setPassword(event.target.value);
          console.log('password', event.target.value);
        }}
        helperText="A senha deve ter pelo menos 8 caracteres."
        FormHelperTextProps={{ style: { color: '#fdfe02' } }}
        InputLabelProps={{ style: { color: '#fdfe02' } }}
      />
      <FormControlLabel
        control={
          <Radio
            checked={isSponsor}
            onChange={() => setIsSponsor(!isSponsor)}
            color="primary"
            style={{ color: '#fdfe02' }}
          />
        }
        label={<span style={{ color: '#fdfe02' }}>Sou Patrocinador</span>}
      />
      <YellowButton
        type="submit"
        variant="contained"
        color="primary"
        style={{ color: '#111105', fontWeight: 'bold' }}
      >
        Cadastrar
      </YellowButton>
      <Link href="/login" onClick={handleLoginClick} style={{ color: '#fff' }}>
        Já tem uma conta? Faça login aqui.
      </Link>
    </FormContainer>
  );
};
