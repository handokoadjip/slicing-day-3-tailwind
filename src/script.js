document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#toggle-menu-button"),
    menu = document.querySelector("#toggle-menu"),
    open = document.querySelector("#open"),
    close = document.querySelector("#close"),
    nav = document.querySelector("#nav");

  function mobileViewUpdate() {
    document.addEventListener("scroll", function () {
      nav.classList.toggle(
        "scrolled",
        document.scrollingElement.scrollTop > nav.style.height
      );
    });
  }

  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    open.classList.toggle("hidden");
    close.classList.toggle("hidden");
  });

  window.addEventListener("load", mobileViewUpdate);
  window.addEventListener("resize", mobileViewUpdate);

  mobileViewUpdate();
});
