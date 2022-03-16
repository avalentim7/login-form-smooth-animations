import React from 'react';
import { Marginer } from '../../marginer/index.jsx';
import { useAccount } from '../../../hooks/useAccount.js';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from '../common/styles.js';

export default function LoginForm(props) {
  const { switchToSignup } = useAccount();

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">
        Esqueceu a senha?
      </MutedLink>
      <Marginer direction="vertical" margin="1.5em" />
      <SubmitButton type="submit">
        Entrar
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#" onClick={switchToSignup}>
        Não tem uma conta?
        <BoldLink href="#">
          Crie uma!
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  )
}