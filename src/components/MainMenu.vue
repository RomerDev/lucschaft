<template>
  <div id="nav">
    <div ref="nav" class="overlay">
      <a class="closebtn" @click="closeNav()">&times;</a>

      <div class="overlay-content">
        <div @click="closeNav()">
          <a href="#work">
            {{ $t("menu.work") }}
          </a>
        </div>

        <br />

        <div @click="closeNav()">
          <a href="#skills">
            {{ $t("menu.skills") }}
          </a>
        </div>

        <br />

        <div @click="closeNav()">
          <a href="#about">
            {{ $t("menu.about") }}
          </a>
        </div>

        <br />

        <div @click="closeNav()">
          <a href="#contact">
            {{ $t("menu.contact") }}
          </a>
        </div>

      </div>

      <div class="switcher">
        <div class="switcher-wrapper">
          <LocaleSwitcher />
        </div>
      </div>
    </div>
    <div>
      <span class="menuButton" ref="menuButton" @click="openNav()">
        <img src="@/assets/hamburger.svg" alt="logo" />
      </span>
    </div>

    <img src="@/assets/logo.svg" alt="logo" />

    <div class="switcher-desktop">
      <LocaleSwitcher />
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";

export default {
  name: "MainMenu",
  components: {
    LocaleSwitcher,
  },
  methods: {
    closeNav() {
      this.$refs.nav.style.opacity = "0.0";
      this.$refs.nav.style.zIndex = "-1";
      this.$refs.menuButton.style.zIndex = "9000";
    },
    openNav() {
      this.$refs.nav.style.opacity = "1";
      this.$refs.nav.style.zIndex = "1";
      this.$refs.menuButton.style.zIndex = "-1000";
    },
  },
};
</script>

<style scoped>
#nav {
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  margin-bottom: 50px;
  padding: 2rem 3.5rem;
  text-align: ;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 37px;
}


#nav a.router-link-exact-active {
  color: #fdf520;
}

.menuButton {
  position: fixed;
  z-index: 1000;
}

img {
  max-height: 60px;
}

.overlay {
  height: 100vh;
  width: 100%;
  opacity: 0;
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 30%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

span {
  cursor: pointer;
}

span img {
  height: 60px;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  left: 45px;
  font-size: 60px !important;
  cursor: pointer;
}

.switcher {
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 5rem;
  margin: auto;
}

.switcher-wrapper {
  margin: 0 auto;
}

@media screen and (max-width: 600px) {
  .overlay .closebtn {
    font-size: 35px;
    top: 15px;
    right: 35px;
  }

  #nav a {
    font-size: 28px;
  }

  .switcher-desktop {
    display: none;
  }
}
</style>
