import React from 'react';
import logoSmall from '../../assets/logo-nav_small.png';
import logout from '../../assets/logout.png';
import edit from '../../assets/edit.png';
import delete1 from '../../assets/delete1.png';
import styles from './AdminView.module.css';


const AdminEmployees = ({ setNavSection, handleLogOut, users }) => {
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <img className={styles.logosmall} src={logoSmall} alt="small logo" />
        <h2 className={styles.menuLetter} onClick={() => setNavSection('employees')}>Trabajadores</h2>
        <h2 className={styles.menuLetter} onClick={() => setNavSection('products')}>Productos</h2>
        <img
          className={styles.logout}
          src={logout}
          alt="logout"
          onClick={handleLogOut}
        />
      </header>
      <section className={styles.tableContainerEmployees} >
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cargo</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <>
                    <tr key={user.id}>
                      <td >{user.data.name}</td>
                      <td >{user.data.lastname}</td>
                      <td >{user.data.rol}</td>
                      <td className={styles.buttonContainer}>
                        <img
                          className={styles.action}
                          src={edit}
                          alt="edit"
                        // onClick={handleLogOut}
                        />
                        <br />
                        <img
                          className={styles.action}
                          src={delete1}
                          alt="delete"
                        // onClick={handleLogOut}
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminEmployees;