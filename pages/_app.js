import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { store } from '../app/store';
import { Provider } from 'react-redux';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [introDisabled, setIntroDisabled] = useState(false);

  useEffect(() => {
    const start = () => {
      if (localStorage.getItem('introDisabled')) {
        setIntroDisabled(true)
        router.push('/intro')
      } else {
        setIntroDisabled(false)       
      }
    };
    start()
  }, [])

  return (
    <Provider store={store}>
      <Layout className="layout">
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
