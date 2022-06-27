/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


window.onload = () => {

    const navBar = document.querySelector('nav');
    const sections = [...document.querySelectorAll("section")];
    const observerSettings = {
        threshold: 0.4
    }

    const observer = new IntersectionObserver((entries) => {
        for(const entry of entries){
            let id = entry.target.id;
            let navLink = navBar.querySelector(`a[href="#${id}"]`);
            navLink.classList.remove("active");
            if(entry.isIntersecting){
                navLink.className = "active";
            }
        }
        }
      , observerSettings);  
    
    for (let i = 0; i < sections.length; i++){
        observer.observe(sections[i]);
    }
  };