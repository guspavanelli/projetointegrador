import React, { useState, useEffect } from 'react';
import  Logo  from '../../assests/logomarca-sanguebom.png'
import { height, padding } from '@mui/system';


interface User {
  name: string;
  profileImage: string;
}

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      const loggedInUser = JSON.parse(storedUser);
      setUser(loggedInUser);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    const loggedInUser: User = {
      name: 'John Doe',
      profileImage: 'https://via.placeholder.com/40', // Simulated profile image
    };
    
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    setUser(loggedInUser);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <header style={styles.header}>
      {/* Esquerda: Logo */}
      <div style={styles.left}>
        <img style={styles.logo} src={Logo} alt="logo Sangue Bom" />
      </div>

      {/* Centro: Links de navegação */}
      <div style={styles.center}>
        <nav>
          <a href="/" style={styles.navLink}>Home</a>
          <a href="/about" style={styles.navLink}>Sobre</a>
          <a href="/donation" style={styles.navLink}>Doação</a>
        </nav>
      </div>

      {/* Direita: Login ou perfil */}
      <div style={styles.right}>
        {isLoggedIn && user ? (
          <div style={styles.profileContainer}>
            <img src={user.profileImage} alt="Profile" style={styles.profileImage} />
            <button style={styles.logoutButton} onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button style={styles.loginButton} onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </header>
  );
};

// Estilos CSS em JS
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#fff',
    borderBottom: '2px solid #d32f2f',
    width: '100%', // Ocupa a largura completa da div pai
    gap: '50px'
  },
  left: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '10px'
  },
  center: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    height: '80px',
  },
  navLink: {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#d32f2f',
    fontSize: '16px',
    fontWeight: '500',
  },
  loginButton: {
    padding: '8px 20px',
    backgroundColor: '#d32f2f',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: '500',
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  profileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  logoutButton: {
    padding: '6px 12px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    fontWeight: '500',
  },
};

export default Header;