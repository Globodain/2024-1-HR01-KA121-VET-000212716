AOS.init({
  duration: 1000,
  once: true
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
      backToTop.classList.add('visible');
  } else {
      backToTop.classList.remove('visible');
  }


  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
          backToTop.classList.add('visible');
      } else {
          backToTop.classList.remove('visible');
      }
  });

  window.onscroll = function() {
    var button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

});

 // Show/hide back to top button
 window.onscroll = function() {
    var button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};


    