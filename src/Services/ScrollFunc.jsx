export default function ScrollFunc() {
  addEventListener("scroll", (e) => {
    const ScrollDown = document.getElementById("Scroll-Down");
    // const SocialButNav = document.getElementById("Social_Midia_Navbar");
    if (window.scrollY == 0) {
      //   setSmall("");
      ScrollDown.style.opacity = 1;
    } else if (window.scrollY <= 200) {
      //   setSmall("Small");
      ScrollDown.style.opacity = 0;
    }

    // if (window.scrollY >= 600 && socialButVisible == false) {
    //   SocialButNav.style.transform = "translateY(0%)";
    //   setSocialButVisible(true);
    // } else if (window.scrollY <= 600 && socialButVisible == true) {
    //   SocialButNav.style.transform = "translateY(-200%)";
    //   setSocialButVisible(false);
    // }
  });
}
