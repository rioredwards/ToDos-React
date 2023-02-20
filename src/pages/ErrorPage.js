import React from 'react';
import Header from '../components/Header/Header.js';

export default function ErrorPage() {
  return (
    <>
      <Header />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}
