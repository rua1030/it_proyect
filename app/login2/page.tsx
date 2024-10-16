'use client';

import '@/public/DiagonalSplit.css';
import styles from '@/public/Login.module.css';

export default function Login() {
  return (
    <div className="wraper">
      <div className="div-1">
        <div className="content">
          <div className="logo">
            <img
              src="Designer__18_-removebg.png"
              alt="Descripción de la imagen"
            />
          </div>
        </div>
      </div>
      <div className="div-2">
        <div className={styles.content}>
          <div className={styles.contentForm}>
            <h1 className={styles.titulo}>Bienvenido de nuevo</h1>
            <p className={styles.text}>Por favor inicie sesión para continuar</p>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email:</label>
                <input className={styles.input} type="email" id="email" placeholder="Ingrese su email" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="password">Contraseña:</label>
                <input className={styles.input} type="password" id="password" placeholder="Ingrese su contraseña" />
              </div>
              <button type="submit" className={styles.btn}>Iniciar sesión</button>
              <p className={styles.forgotPassword}>
                <a href="#">Olvidé mi contraseña</a>
              </p>
            </form>
            <div className={styles.text}>
              <p>———————————————  Iniciar sesión con  ———————————————</p>
              <div className={styles.socialButtons}>
                <button className={styles.socialBtn}>
                  <img
                    src="facelogo.png"
                    alt="Descripción de la imagen"
                  />
                </button>
                <button className={styles.socialBtn}>
                  <img
                    src="googlelogo.png"
                    alt="Descripción de la imagen"
                  />
                </button>
                <button className={styles.socialBtn}>
                  <img
                    src="apleelogo.png"
                    alt="Descripción de la imagen"
                  />
                  {' '}

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
