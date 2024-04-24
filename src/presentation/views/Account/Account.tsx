import React, { useEffect, useState } from 'react';
import {
  TextField,
  Link,
  Button as Btn,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/system';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAccountState } from '@/core/states/account';
import edit from '@/presentation/assets/edit.png';
import Image from 'next/image';
import { useSignUp } from '@/core/hooks/useSignUp';
import { useAds } from '@/core/hooks/useAds';
import { useLogin } from '@/core/hooks/useLogin';
import { Button } from '@/presentation/components';
import { useAdsState } from '@/core/states/ads';
import { useBan } from '@/core/hooks/useBan';

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

const YellowButton = styled(Btn)`
  background-color: #fdfe02;
  &:hover {
    background-color: #fdfe02;
  }
`;

const Title = styled('h1')`
  color: #fdfe02;
  text-align: center;
`;

const AdsTable = styled(Table)`
  background-color: #f5f5f5;
`;

const AdsTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #8b8349;
  }
`;

const AdsTableCell = styled(TableCell)`
  color: #111105;
`;

const handleApproveAd = (adId: number) => {
  // Logic to approve the ad
};

const handleRejectAd = (adId: number) => {
  // Logic to reject the ad
};

export const Account = () => {
  const { account } = useAccountState();
  const permEmail = account.email;
  const currentUsername = account.username;
  const currentEmail = account.email;
  const [username, setUsername] = useState(currentUsername);
  const [email, setEmail] = useState(currentEmail);
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false); // Novo estado para controlar o modo de edição
  const { updateAccount } = useSignUp();
  const { createAd, aproveAd, removeAd, retrieveNotVerifiedAds } = useAds();
  const [isSeeingAds, setIsSeeingAds] = useState(false);
  const [notVerifiedAds, setNotVerifiedAds] = useState([]);
  const { banUser } = useBan();
  const [banUserId, setBanUserId] = useState(0);
  const { retrieveUserData } = useLogin();
  const [adFile, setAdFile] = useState<File | null>(null);
  const handleAdFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAdFile(event.target.files[0]);
    }
  };

  const handleAdSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (adFile) {
      await createAd(adFile);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    if (username || email || password) {
      // At least one field is filled, proceed with form submission
      if (password && password.length < 8) {
        toast.error('A senha deve ter pelo menos 8 caracteres!');
      } else {
        // Close all other toasts before showing success toast
        try {
          const accountUpdates: {
            username?: string;
            email?: string;
            senha?: string;
          } = {};
          if (username) accountUpdates.username = username;
          if (email) accountUpdates.email = email;
          if (password) accountUpdates.senha = password;

          await updateAccount(accountUpdates);
          retrieveUserData(permEmail);
        } catch (error) {
          console.error('Erro ao fazer login: ', error);
        }
      }
    } else {
      // Display error message or prevent form submission
      toast.error('Por favor, preencha pelo menos um campo!');
    }
  };

  const handleEditClick = () => {
    setIsEditing(true); // Altera o estado para ativar o modo de edição
    setEmail('');
    setPassword('');
    setUsername('');
  };

  const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setBanUserId(event.target.value);
    console.log('ban user id: ', banUserId);
  };

  const handleAdsRequest = async () => {
    setIsSeeingAds(true);
    setNotVerifiedAds(await retrieveNotVerifiedAds({ id_usuario: 4 }));
  };

  useEffect(() => {
    handleAdsRequest();
  }, [notVerifiedAds]);
  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Alterar Dados</Title>
        {!isEditing && (
          <Button.Outlined
            style={{
              color: '#fe9102',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0 0.5rem',
              cursor: 'pointer',
              width: '100%',
            }}
            onClick={handleEditClick}
          >
            <Image src={edit} alt="edit" width={24} height={24} />
            Clique para alterar
          </Button.Outlined>
        )}
        {isEditing ? ( // Renderiza os campos em modo de edição se isEditing for true
          <>
            <WhiteTextField
              label="Username"
              variant="outlined"
              inputProps={{ style: { color: '#fdfe02' } }}
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
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
          </>
        ) : (
          // Renderiza os campos em modo de leitura se isEditing for false
          <div
            style={{
              color: '#fdfe02',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem 0',
              margin: '2rem 0',
              border: '2px solid #fdfe02 ',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
            }}
          >
            <p>Username: {username || '-'}</p>
            <p>Email: {email || '-'}</p>
            <p>Senha: ********</p>
          </div>
        )}
        <YellowButton
          type="submit"
          variant="contained"
          color="primary"
          style={{ color: '#111105', fontWeight: 'bold' }}
        >
          Atualizar
        </YellowButton>
      </FormContainer>
      {account.user_type_id === 4 && (
        <>
          <Title style={{ margin: '1rem 0' }}>Enviar anúncio</Title>
          <form
            onSubmit={handleAdSubmit}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0 1rem',
            }}
          >
            <WhiteTextField
              type="file"
              variant="outlined"
              inputProps={{ style: { color: '#fdfe02' } }}
              InputLabelProps={{ style: { color: '#fdfe02' } }}
              onChange={handleAdFileChange}
            />
            <Button.Default
              type="submit"
              style={{
                color: '#111105',
                fontWeight: 'bold',
                marginTop: '1rem',
              }}
            >
              Enviar anúncio
            </Button.Default>
          </form>
        </>
      )}

      {account.user_type_id === 2 && (
        <div
          style={{
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Title style={{ margin: '1rem 0' }}>Solicitações de anúncio</Title>
          {isSeeingAds ? (
            <TableContainer style={{ maxWidth: '600px' }}>
              <AdsTable
                style={{
                  borderRadius: '0.5rem',
                  background: '#969651',
                  color: '#fff',
                }}
              >
                <TableHead>
                  <TableRow>
                    <AdsTableCell style={{ fontWeight: 'Bold' }}>
                      ID
                    </AdsTableCell>
                    <AdsTableCell style={{ fontWeight: 'Bold' }}>
                      Imagem
                    </AdsTableCell>
                    <AdsTableCell style={{ fontWeight: 'Bold' }}>
                      ID Usuário
                    </AdsTableCell>
                    <AdsTableCell style={{ fontWeight: 'Bold' }}>
                      Ação
                    </AdsTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {notVerifiedAds.map(ad => (
                    <AdsTableRow key={ad.id}>
                      <AdsTableCell>{ad.id}</AdsTableCell>
                      <AdsTableCell>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0 1rem',
                          }}
                        >
                          <img
                            src={`data:image/jpeg;base64,${ad.ad}`}
                            alt="Ad Image"
                            style={{ width: '50px', height: '50px' }}
                          />
                          <Button.Default
                            style={{
                              maxWidth: '4rem',
                              borderRadius: '0.5rem',
                              height: '2rem',
                              marginLeft: '.25rem',
                            }}
                            onClick={() => {
                              const link = document.createElement('a');
                              link.href = `data:image/jpeg;base64,${ad.ad}`;
                              link.download = 'ad_image.jpg';
                              link.click();
                            }}
                          >
                            Baixar
                          </Button.Default>
                        </div>
                      </AdsTableCell>
                      <AdsTableCell>{ad.id_usuario}</AdsTableCell>
                      <AdsTableCell>
                        <Btn
                          onClick={() => aproveAd(ad.id)}
                          style={{
                            backgroundColor: 'green',
                            color: '#fff',
                            marginRight: '1rem',
                          }}
                        >
                          Aprovar
                        </Btn>
                        <Btn
                          onClick={() => removeAd(ad.id)}
                          style={{ backgroundColor: 'red', color: '#fff' }}
                        >
                          Rejeitar
                        </Btn>
                      </AdsTableCell>
                    </AdsTableRow>
                  ))}
                </TableBody>
              </AdsTable>
            </TableContainer>
          ) : (
            <Button.Default
              onClick={handleAdsRequest}
              style={{
                background: '#fdfe02',
                color: '#111105',
                width: '12rem',
                borderRadius: '0.5rem',
                marginTop: '1rem',
              }}
            >
              Ver solicitações
            </Button.Default>
          )}
        </div>
      )}

      {account.user_type_id === 2 && (
        <div style={{ marginTop: '5rem' }}>
          <Title style={{ margin: '1rem 0' }}>Banir Usuário</Title>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '400px',
              alignItems: 'center',
              gap: '0.5rem',
              margin: '0 auto',
            }}
          >
            <WhiteTextField
              label="ID do usuário"
              variant="outlined"
              inputProps={{ style: { color: '#fdfe02' } }}
              value={banUserId}
              onChange={handleUserIdChange}
            />
            <Button.Default
              onClick={() => banUser(banUserId)}
              style={{
                background: 'red',
                color: '#fff',
                width: '12rem',
                borderRadius: '0.5rem',
                marginBottom: '5rem',
              }}
            >
              Banir
            </Button.Default>
          </div>
        </div>
      )}
    </div>
  );
};
