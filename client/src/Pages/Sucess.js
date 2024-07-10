import React from 'react';

const Success = () => {
  const styles = {
    h1: {
      color: '#88B04B',
      fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif',
      fontWeight: 900,
      fontSize: '40px',
      marginBottom: '10px',
    },
    p: {
      color: '#404F5E',
      fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif',
      fontSize: '20px',
      margin: '0',
    },
    i: {
      color: '#9ABC66',
      fontSize: '100px',
      lineHeight: '200px',
      marginLeft: '-15px',
    },
    card: {
      background: 'white',
      padding: '60px',
      borderRadius: '4px',
      boxShadow: '0 2px 3px #C8D0D8',
      justifyContent: "center",
      alignItems: "center",
      display: 'inline-block',
      margin: '0 auto',
    },
    checkmarkContainer: {
      borderRadius: '200px',
      height: '200px',
      width: '200px',
      background: '#F8FAF5',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card} className='justify-content-center'>
        <div style={styles.checkmarkContainer}>
          <i className="checkmark" style={styles.i}>✓</i>
        </div>
        <h1 style={styles.h1}>Success</h1>
        <p style={styles.p}>
          We received your purchase request;<br /> we'll be in touch shortly!
        </p>
      </div>
    </div>
  );
}

export default Success;
