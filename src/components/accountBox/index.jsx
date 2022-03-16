import React from 'react';
import { useAccount } from '../../hooks/useAccount';
// import { useTheme } from '../../hooks/useTheme';
import LoginForm from './loginForm';
import SignUpForm from './signupForm';
import { BackDrop, backdropVariants, BoxContainer, expandingTransition, HeaderContainer, HeaderText, InnerContainer, SmallText, TopContainer } from './styles';

export function AccountBox(props) {
  const { isExpanded, active } = useAccount();
  // const { theme, onToggleTheme } = useTheme();

  return (
    <BoxContainer>
      <TopContainer>
        {/* <SmallText className={'toggle-switch-theme'} onClick={onToggleTheme}>Alterar Tema</SmallText> */}
        <BackDrop
          initial={false}
          animate={isExpanded ? 'expanded' : 'collapsed'}
          variants={backdropVariants}
          transition={expandingTransition}
        />
        {active === 'signin' && <HeaderContainer>
          <HeaderText>Bem-vindo</HeaderText>
          <HeaderText>de volta!</HeaderText>
          <SmallText>Por favor, faça o login para continuar!</SmallText>
        </HeaderContainer>}
        {active === 'signup' && <HeaderContainer>
          <HeaderText>Criar</HeaderText>
          <HeaderText>Conta</HeaderText>
          <SmallText>Por favor, cadastre-se para continuar!</SmallText>
        </HeaderContainer>}
      </TopContainer>
      <InnerContainer>
        {active === 'signin' && <LoginForm />}
        {active === 'signup' && <SignUpForm />}
      </InnerContainer>
    </BoxContainer>
  )
}