import React from 'react';
import { Marginer } from '../../marginer/index.jsx';
import { useAccount } from '../../../hooks/useAccount.js';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from '../common/styles.js';

export default function SignUpForm(props) {
  const { switchToSignin } = useAccount();

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Nome completo" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirme a senha" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">
        Criar
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Já tem uma conta?
        <BoldLink href="#" onClick={switchToSignin}>
          Entrar
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  )
}