import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from './App.css';

export default function App() {
  const [selected, updateSelected] = useState('home');

  const pageContent = {
    home: 'My Cool Homepage',
    about: 'I am Cool, About Me',
    contact: 'Call me, I\'m cool'
  };

  return (
    <section className={styles.App}>
      <Sidebar>
        <a onClick={() => updateSelected('home')} href="#">Homepage</a>
        <a onClick={() => updateSelected('about')} href="#">About Me</a>
        <a onClick={() => updateSelected('contact')} href="#">Contact</a>
      </Sidebar>
      <p>{pageContent[selected]}</p>
    </section>
  );
}
