import { ReactNode } from 'react';
import NavBar from '../components/nav-bar';
import styles from '@/styles/Home.module.css';
import Footer from '../components/footer';


interface MyComponentProps {
  children: ReactNode
}

const Layout: React.FC<MyComponentProps>  = ({ children }) => {
  return (
    <main className={styles.main}>
      <NavBar />
      <div style={{margin: "40px 0px 0px"}}>
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;