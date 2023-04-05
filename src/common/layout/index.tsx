import { ReactNode } from 'react';
import NavBar from '../components/nav-bar';
import styles from '@/styles/Home.module.css';


interface MyComponentProps {
  children: ReactNode
}

const Layout: React.FC<MyComponentProps>  = ({ children }) => {
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.description}>
        {children}
      </div>
    </main>
  );
};

export default Layout;