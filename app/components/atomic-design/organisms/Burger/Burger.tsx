import React from "react";
import styles from "./Burger.module.css";

function Burger() {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.closeBurgerArea}>
            <div className={styles.buttonWrap}>
              <button className={styles.button}>&times;</button>
            </div>
          </div>
          <div className={styles.mainBurgerArea}>
            <div className={styles.row}>
              <div className={styles.searchArea}>
                <button className={styles.closeBtn}>&times;</button>

                <img
                  src="../../assets/logo.png"
                  alt="#"
                  className={styles.logo}
                />
                <form action="">
                  <input
                    id="searchInput"
                    type="text"
                    placeholder="Пошук по сайту"
                  />
                  <i className={ styles.searchLabel}
                  ></i>
                </form>
                <div className={styles.searchLabel}></div>
              </div>

              <div className={styles.topMenuArea}>
                <ul className={styles.row}>
                  <li className={styles.col}>
                    <a href="#">
                      <img
                        src="../../assets/ico1.png"
                        alt="icon"
                        className={styles.icon}
                      />
                      Версія для слабозорих
                    </a>
                  </li>
                  <li className={styles.col}>
                    <a href="#">
                      <img
                        src="../../assets/ico2.png"
                        alt="icon"
                        className={styles.icon}
                      />
                      Розклад програм
                    </a>
                  </li>
                  <li className={styles.col}>
                    <a href="#">
                      <img
                        src="../../assets/ico3.png"
                        alt="icon"
                        className={styles.icon}
                      />
                      Як нас слухати
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.topButtonArea}>
                <button>Підтримати проект</button>
              </div>

              <section className={styles.sections}>
                <h1 className={styles.sectionHeader}>Розділи</h1>
                <div className={styles.row}>
                  <ul className={styles.lg6}>
                    <li>
                      <a href="#">Новини</a>
                    </li>
                    <li>
                      <a href="#">Подкасти</a>
                    </li>
                    <li>
                      <a href="#">Програми</a>
                    </li>
                    <li>
                      <a href="#">Публікацї</a>
                    </li>
                  </ul>
                  <ul className={styles.lg6}>
                    <li>
                      <a href="#">Відео</a>
                    </li>
                    <li>
                      <a href="#">Картки</a>
                    </li>
                    <li>
                      <a href="#">Точка зору</a>
                    </li>
                    <li>
                      <a href="#">Лонгріди</a>
                    </li>
                  </ul>
                </div>
              </section>

              <div className={styles.verLine}></div>

              <section className={styles.rubrics}>
                <h1 className={styles.rubricHeader}>Рубрики</h1>
                <ul>
                  <li>
                    <a href="#">Країна</a>
                  </li>
                  <li>
                    <a href="#">Людина</a>
                  </li>
                  <li>
                    <a href="#">Політика</a>
                  </li>
                  <li>
                    <a href="#">Економіка</a>
                  </li>
                  <li>
                    <a href="#">Події</a>
                  </li>
                  <li>
                    <a href="#">Культура</a>
                  </li>
                  <li>
                    <a href="#">Суспільство</a>
                  </li>
                </ul>
              </section>

              <div className={styles.smallWrap}>
                <div className={styles.horLine}></div>
                <ul className={styles.row}>
                  <li className={styles.col}>
                    <a href="#">
                      <img
                        src="../../assets/ico1.png"
                        alt="icon"
                        className={styles.icon}
                      />
                      Версія для слабозорих
                    </a>
                  </li>
                  <li className={styles.col}>
                    <a href="#">
                      <img
                        src="../../assets/ico2.png"
                        alt="icon"
                        className={styles.icon}
                      />
                      Розклад програм
                    </a>
                  </li>
                  <li className={styles.col}>
                    <a href="#">
                      <img
                        src="../../assets/ico3.png"
                        alt="icon"
                        className={styles.icon}
                      />
                      Як нас слухати
                    </a>
                  </li>
                </ul>
                <div className={styles.horLine}></div>
              </div>

              <div className={styles.col}>
              <ul className={styles.bottomMenu}>
                  <li>
                    <a href="#">Про «Громадське радіо»</a>
                  </li>
                  <li>
                    <a href="#">Фінансові звіти</a>
                  </li>
                  <li>
                    <a href="#">Тендери</a>
                  </li>
                  <li>
                    <a href="#">Вакансії</a>
                  </li>
                  <li>
                    <a href="#">Контакти</a>
                  </li>
                  <li>
                    <a href="#">Рекламодавцям</a>
                  </li>
                </ul>
              </div>
              <div className={styles.horLine}></div>

              <footer className={styles.footer}>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>Фейсбук
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>Твіттер
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>Ютуб
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-soundcloud"></i>Саундклауд
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-telegram-plane"></i>Телеграм
                    </a>
                  </li>
                </ul>
              </footer>

              <div className={styles.horLine}></div>
              <section className={styles.lang}>
                <button>Підтримати проект</button>
                <div className={styles.locales}>
                  <a href="#" className={styles.active}>
                    УКР
                  </a>
                  <a href="#">РУС</a>
                  <a href="#">ENG</a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Burger;
