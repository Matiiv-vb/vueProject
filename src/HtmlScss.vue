<template>
  <div id="app">
    <header class="page-header">
      <a href="" class="page-header__logo">
        <img
          src="src/assets/img/logotype mobile.png"
          width="226"
          height="30"
          alt="Barbershop"
        />
      </a>

      <nav class="main-nav">
        <button class="main-nav__toggle">
          <span class="visually-hidden">Open menu</span>
        </button>
        <div class="main-nav__wrapper">
          <ul class="main-nav__list site-list">
            <li class="site-list__item site-list__item--active">
              <a> Main page </a>
            </li>
            <li class="site-list__item">
              <a href=""> Our works </a>
            </li>
            <li class="site-list__item">
              <a href=""> Sign up </a>
            </li>
            <li class="site-list__item">
              <a href=""> Contacts </a>
            </li>
            <li class="site-list__item">
              <a href=""> Academy </a>
            </li>
          </ul>
          <ul class="main-nav__list user-list">
            <li class="user-list__item">
              <a href="login.html" class="user-list__login">
                Log In
                <img src="" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <main class="page-main">
      <h1 class="visually-hidden"></h1>

      <section class="stats">
        <div class="stats__wrapper">
          <header class="stats__header">
            <h2 class="visually-hidden">Statistic Barber</h2>
            <p class="stats__slogan">
              Cut in us <br />
              it is good
            </p>
            <p class="stats__intro">
              Mens cut <br />
              statistic
            </p>
            <p class="stats__legend stats__legend--top">
              <small> * - data is false </small>
            </p>
          </header>

          <dl class="stats__list">
            <div class="stats__item">
              <dt class="stats__number">1500<sub>*</sub></dt>
              <dd class="stats__desription">
                dollars <br />
                deposit
              </dd>
            </div>
            <div class="stats__item">
              <dt class="stats__number">7200</dt>
              <dd class="stats__desription">
                second <br />
                time master
              </dd>
            </div>
            <div class="stats__item">
              <dt class="stats__number">90 000</dt>
              <dd class="stats__desription">
                Cut <br />
                heirs
              </dd>
            </div>
            <div class="stats__item">
              <dt class="stats__number">500 000<sub>*</sub></dt>
              <dd class="stats__desription">
                likes and <br />
                comments
              </dd>
            </div>
          </dl>
          <p class="stats__legend stats__legend--bottom">
            <small> * - data is false </small>
          </p>
        </div>
      </section>

      <section class="advantages">
        <div class="advantages__wrapper slider">
          <h2 class="visually-hidden">Our advantages</h2>
          <ul class="advantages__list slider__list">
            <li class="advantages__item advantages__item--fast slider__item">
              <h3 class="advantages__title">Fast</h3>
              <p class="advantages__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                cumque, repellat officia inventore voluptatem distinctio!
              </p>
            </li>
            <li class="advantages__item advantages__item--cool slider__item">
              <h3 class="advantages__title">Cool</h3>
              <p class="advantages__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                cumque, repellat officia inventore voluptatem distinctio!
              </p>
            </li>
            <li class="advantages__item advantages__item--price slider__item">
              <h3 class="advantages__title">Expensive</h3>
              <p class="advantages__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                cumque, repellat officia inventore voluptatem distinctio!
              </p>
            </li>
          </ul>
          <p class="advantages__toggles slider__toggles">
            <button class="slider__toggle slider__toggle--active" type="button">
              1
            </button>
            <button class="slider__toggle" type="button">2</button>
            <button class="slider__toggle" type="button">3</button>
          </p>
        </div>
      </section>
      
      <section class="news">
        <div class="news__wrapper">
          <h2 class="news__title">News and Promotions</h2>
          <div class="news__list">
            <a href="#" class="news__item">
              <time class="news__date" datetime="2020-09-12">
                <b class="news__day">12</b> sept
              </time>
              <p class="news_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, fuga.
              </p>
            </a>
            <a href="#" class="news__item">
              <time class="news__date" datetime="2020-09-12">
                <b class="news__day">12</b> sept
              </time>
              <p class="news_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, fuga.
              </p>
            </a>
            <a href="#" class="news__item">
              <time class="news__date" datetime="2020-09-12">
                <b class="news__day">12</b> sept
              </time>
              <p class="news_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, fuga.
              </p>
            </a>
          </div>
          <a href="#" class="news__to-all button">View All</a>
        </div>
      </section>

      <section class="reviews">
        <div class="reviews__wrapper slider">
          <h2 class="reviews__title">Reviews about us</h2>
          <a href="form.html" class="reviews__write button"></a>
          <div class="reviews__list slider__list">
            <blockquote class="reviews__item slider__item">
              <img
                class="reviews__author-image"
                src="src/assets/img/photo.png"
                width="50"
                height="50"
                alt="Photo author"
              />
              <div class="reviews__author-info">
                <cite class="reviews__author-name">Trevis Barker</cite>
                <p class="reviews__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                  soluta aliquam neque error. Suscipit.
                </p>
              </div>
            </blockquote>
            <blockquote class="reviews__item slider__item">
              <img
                class="reviews__author-image"
                src="src/assets/img/photo.png"
                width="50"
                height="50"
                alt="Photo author"
              />
              <div class="reviews__author-info">
                <cite class="reviews__author-name">John Smit</cite>
                <p class="reviews__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                  soluta aliquam neque error. Suscipit.
                </p>
              </div>
            </blockquote>
            <blockquote class="reviews__item slider__item">
              <img
                class="reviews__author-image"
                src="src/assets/img/photo.png"
                width="50"
                height="50"
                alt="Photo author"
              />
              <div class="reviews__author-info">
                <cite class="reviews__author-name">Ivan Boroda</cite>
                <p class="reviews__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                  soluta aliquam neque error. Suscipit.
                </p>
              </div>
            </blockquote>
          </div>
          <p class="reviews__toggles slider__toggles">
            <button class="slider__toggle slider__toggle--active" type="button">
              1
            </button>
            <button class="slider__toggle" type="button">2</button>
            <button class="slider__toggle" type="button">3</button>
          </p>
        </div>
      </section>
    </main>

    <footer class="page-footer">
      <div class="page-footer__wrapper">
        <div class="page-footer__contacts contacts">
          <b class="contacts__title">Barber Boroda</b>
          <p class="contacts__text">
            Lorem ipsum dolor sit amet. <br />
            <a href="tel:+80988540796" class="contacts__phone">
              <span class="contacts__phone-mobile">Tel.:</span>+80988540796
            </a>
          </p>
        </div>
        <div class="page-footer__social social">
          <b class="social__title">Lets frend!</b>
          <ul class="social__list">
            <li class="socian__item">
              <a
                href="https://www.youtube.com/"
                class="social__link social__link-youtube"
                >YouTube</a
              >
            </li>
            <li class="socian__item">
              <a
                href="https://www.youtube.com/"
                class="social__link social__link-instagram"
                >instagram</a
              >
            </li>
            <li class="socian__item">
              <a
                href="https://www.youtube.com/"
                class="social__link social__link-facebook"
                >facebook</a
              >
            </li>
          </ul>
          <div class="page-footer__copyright copyright">
            <b class="copyright__text">Develop in:</b>
            <a href="#" class="copyright__link">copyright link</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {},

  computed: {},

  mounted() {}
};
</script>

<style lang="scss"></style>
