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

      <nav v-bind:class="toggleClassMenu" class="main-nav main-nav--nojs">
        <button
          v-on:click="clickedMenu = !clickedMenu"
          class="main-nav__toggle"
        >
          <span class="visually-hidden">Open menu</span>
        </button>
        <div class="main-nav__wrapper">
          <ul class="main-nav__list site-list">

            <li class="site-list__item" v-for="item in menuItem" :key="item.id">
              <a href="#">{{ item.page }}</a>
            </li>
           
          </ul>
          <ul class="main-nav__list user-list">
            <li class="user-list__item">
              <a href="login.html" class="user-list__login">
                <img src="/src/assets/img/login icon.svg" alt="" />
                <span>LogIn</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <MainPage></MainPage>

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
        </div>
        <div class="page-footer__copyright copyright">
          <b class="copyright__text">Develop in:</b>
          <a href="#" class="copyright__link">Academia link</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  components: {
   MainPage
  },
  data: function() {
    return {
      clickedMenu: true,
      menuItem: [
      { id :1, page: 'Mainpage' },
      { id :2, page: 'works' },
      { id :3, page: 'Signup' },
      { id :4, page: 'Contacts' },
      { id :5, page: 'Academy' },
    ]
    };
  },
  methods: {},

  computed: {
    toggleClassMenu() {
      return this.clickedMenu ? "main-nav--opened" : "main-nav--closed";
    }
  },

  mounted() {}
};
</script>

<style lang="scss"></style>
