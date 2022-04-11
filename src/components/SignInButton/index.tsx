import { useState } from 'react';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
  const [iseUserLoggedIn, setIseUserLoggedIn] = useState(true);

  return iseUserLoggedIn ? (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04D361" />
      Sign in with GitHub
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#EBA417" />
      Sign in with GitHub
    </button>
  )
}