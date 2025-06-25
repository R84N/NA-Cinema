export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts"],

  // 👇 Саме тут можна додати параметри
  googleFonts: {
    families: {
      Inter: [400, 600],
      Orbitron: [500, 700],
    },
    display: "swap",
  },
  css: ["~/assets/styles/style.scss"],
});
