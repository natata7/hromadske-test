import Head from "next/head";
import Burger from "../app/components/atomic-design/organisms/Burger/Burger";
import PostPreview from "../app/components/atomic-design/organisms/PostPreview/PostPreview";
import styles from "./Page.module.css";
import SidebarPreview from "./components/atomic-design/organisms/SidebarPreview/SidebarPreview";
import Link from "next/link";
import "@/styles/atomic-styles/style.scss";
import PodcastPreview from "./components/atomic-design/organisms/PodcastPreview/PoscastPreview";

async function getLastNews() {
  const res = await fetch("https://api.hromadske.radio/news");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    console.log(res);
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getHome() {
  const res = await fetch("https://api.hromadske.radio/home");

  if (!res.ok) {
    console.log(res);
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  //const { lastNews } = await getLastNews();
  const { main, news, videos, last_posts, vlasnaDumka, banners } =
    await getHome();

  return (
    <>
      <Head>
        <title>My page title</title>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <Link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div className={styles.wrap}>
          <div className={styles.container}>
            <div className={styles.burgerContainer}>
              <Burger />
            </div>
            <header>
              <div className={styles.menuBtn}>
                <div className={styles.linesWrap}>
                  <div className={styles.line1}></div>
                  <div className={styles.line2}></div>
                  <div className={styles.line1}></div>
                </div>
              </div>

              <div className={styles.wrap}>
                <div className={styles.logoArea}>
                  <img
                    src="../../assets/logo1.png"
                    alt="logo"
                    className={styles.logo}
                  />
                  <span className={styles.logoName}>Громадське радіо</span>
                  <span className={styles.logoLabel}>слухайте. думайте.</span>
                </div>

                <div className={styles.verLine}></div>

                <div className={styles.newsItem}>
                  <img
                    src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"
                    alt="image"
                  />
                  <div className={styles.wrap}>
                    <div className={styles.newsContent}>
                      Вселенський Патріархат
                      <br /> розпочинає процедури,
                      <br /> необхідні для надання
                      <br /> фалії Українській Православній Церкві
                    </div>
                    <div className={styles.newsAuthor}>
                      Михайло Гвоздинський
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.playerTopArea}>
                <div className="btn-wrap">
                  <div className="play-btn">
                    <i className="fas fa-play"></i>
                  </div>
                </div>

                <div className="cur-wrap">
                  <div className="label">Зараз в ефiрi</div>
                  <div className="cur-play-name">Філософський барабан</div>
                </div>

                <div className="ver-line">
                  <div className="left-angle-wrap">
                    <i className="fas fa-angle-left"></i>
                  </div>
                </div>
                <div className="efir-wrap">
                  <div className="label">Прямий ефiр</div>
                  <a href="#">Останнi новини</a>
                  <div className="programs-btn">
                    Програми
                    <i className="fas fa-angle-down"></i>
                  </div>
                </div>

                <div className="small-size-btn">
                  <i className="fas fa-angle-down"></i>
                </div>
              </div>
            </header>

            <nav>
              <div className="search-btn center">
                <i className="fas fa-search"></i>
              </div>
              <div className="menu-wrap">
                <ul>
                  <li>
                    <a href="#">Відео</a>
                  </li>
                  <li>
                    <a href="#">Публікації</a>
                  </li>
                  <li>
                    <a href="#">Крим</a>
                  </li>
                  <li>
                    <a href="#">Донбас</a>
                  </li>
                  <li>
                    <a href="#">Подкасти</a>
                  </li>
                  <li>
                    <a href="#">Програми</a>
                  </li>
                  <li>
                    <a href="#">Точка зору</a>
                  </li>
                  <li>
                    <a href="#">
                      Регiони
                      <i className="fas fa-angle-down"></i>
                    </a>
                  </li>
                </ul>
                <a href="#" className="blue">
                  Пiдтримати
                </a>
                <a href="#">
                  <img
                    src="../../assets/ico4.png"
                    alt="icon"
                    className="icon"
                  />
                  <span>Версія для слабозорих</span>
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className="container wrap-content">
          <div className="sidebar-wrap">
            <div className="sidebar">
              <div className="locales">
                <div className="lang">
                  УКР<i className="fas fa-angle-down"></i>
                </div>
                <div className="lang">РУС</div>
                <div className="lang">ENG</div>
              </div>
              <div className="socials">
                <div className="caption">
                  Нашi
                  <br />
                  соцмережi
                </div>
                <a href="#" className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="youtube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="soundcloud">
                  <i className="fab fa-soundcloud"></i>
                </a>
                <a href="#" className="telegram">
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.newswrap}>
            <div className={styles.newscol}>
              <h2 class={styles.caption}>Останнi новини</h2>

              <div className={styles.sidebarinnerwrap}>
                {news.map((node) => (
                  <SidebarPreview
                    key={node.id}
                    title={node.title.rendered}
                    date={node.date}
                    author={node.author}
                    slug={node.slug}
                  />
                ))}
              </div>
              <a className={styles.sidebarlink} href="/news">
                дивитись усі{" "}
                <svg
                  height="7px"
                  width="4px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.010,3.869 L0.756,7.010 L-0.011,6.270 L2.860,3.499 L-0.011,0.730 L0.756,-0.011 L4.010,3.129 L3.627,3.499 L4.010,3.869 Z"
                    fill="rgb(98, 198, 226)"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className={styles.newsmain}>
              {main.map((node) => (
                <PostPreview
                  key={node.id}
                  title={node.title.rendered}
                  coverImage={node.featured_image_url}
                  date={node.date}
                  author={node.author}
                  slug={node.slug}
                />
              ))}
            </div>
          </div>

          <div className={styles.lastposts}>
            <div className={styles.titlewrap}>
              <div className={styles.title}>Свіжі подкасти та публікації</div>
            </div>

            <div className={styles.row}>
              {last_posts.map((node) => (
                <PodcastPreview
                  key={node.id}
                  title={node.title.rendered}
                  coverImage={node.featured_image_url}
                  date={node.date}
                  author={node.author}
                  slug={node.slug}
                />
              ))}
            </div>
          </div>

          <div className="content">
            <div className="footer-wrap">
              <footer>
                <div className="row main">
                  <div className="sections">
                    <div className="caption">Розділи</div>
                    <ul>
                      <li>
                        <a href="#">Новини</a>
                      </li>
                      <li>
                        <a href="#">Подкасти</a>
                      </li>
                      <li>
                        <a href="#">Публікацї</a>
                      </li>
                      <li>
                        <a href="#">Відео</a>
                      </li>
                      <li>
                        <a href="#">Картки</a>
                      </li>
                      <li>
                        <a href="#">Лонгріди</a>
                      </li>
                    </ul>
                    <div className="ver-line"></div>
                  </div>

                  <div className="categories">
                    <div className="caption">Категорії новин</div>
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
                    <div className="ver-line"></div>
                  </div>

                  <div className="about">
                    <div className="caption">Про нас</div>
                    <ul>
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
                    <div className="ver-line"></div>
                  </div>

                  <div className="socials">
                    <div className="caption">Ми у соцмережах</div>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>Фейсбук
                        </a>
                        <div className="hor-line"></div>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>Твіттер
                        </a>
                        <div className="hor-line"></div>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>Ютуб
                        </a>
                        <div className="hor-line"></div>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-soundcloud"></i>Саундклауд
                        </a>
                        <div className="hor-line"></div>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-telegram-plane"></i>Телеграм
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bottom-menu-area">
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          src="../../assets/ico1.png"
                          alt="icon"
                          className="icon"
                        />
                        Версія для слабозорих
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="../../assets/ico2.png"
                          alt="icon"
                          className="icon"
                        />
                        Розклад програм
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="../../assets/ico3.png"
                          alt="icon"
                          className="icon"
                        />
                        Як нас слухати
                      </a>
                    </li>
                  </ul>

                  <button>Підтримати проект</button>
                </div>

                <div className="bottom-area">
                  <div className="logo-area">
                    <img
                      src="../../assets/logo1.png"
                      alt="logo"
                      className="logo"
                    />
                    <span className="logo-name">Громадське радіо</span>
                    <span className="logo-label">слухайте. думайте.</span>
                  </div>
                  <div className="authors">
                    Розробка сайту -<a href="#">demch.co</a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
