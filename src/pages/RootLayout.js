import { Outlet, useNavigation } from 'react-router-dom';

import Header from '../components/Header/Header';

function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      {navigation.state === 'loading' && <p>Loading...</p>}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
