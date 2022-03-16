import { createContext, useContext, useState } from 'react';
import { expandingTransition } from '../components/accountBox/styles';

const AccountContext = createContext();

export function AccountProvider({ children, }) {
  const [active, setActive] = useState('signin');
  const [isExpanded, setExpanded] = useState(false);

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500)
  }

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive('signup');
    }, 600)
  }

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive('signin');
    }, 600)
  }

  return (
    <AccountContext.Provider
      value={{ active, isExpanded, switchToSignup, switchToSignin }}>
      {children}
    </ AccountContext.Provider>
  )
}

export function useAccount() {
  const context = useContext(AccountContext);

  return context;
}