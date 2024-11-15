window.addEventListener('scroll', function() {
    const extra = document.querySelector('.extra-icon');
const topIcon1 = document.querySelector('.remove-icon1');
const topIcon2 = document.querySelector('.remove-icon2');
const con = document.querySelector('.con');
const img = document.querySelector('.img');
const footer = document.querySelector('.footer');

    const businessSection = document.getElementById('main');
    const businessSectionTop = businessSection.offsetTop;

    if (window.scrollY < 70) {
extra.style.display="none";
topIcon2.style.display="flex"
topIcon1.style.display="flex"
con.style.justifyContent="space-around";
con.style.display="flex";
footer.style.width="100%";
    } else {
extra.style.display="flex";
topIcon1.style.display="none";
topIcon2.style.display="none";
con.style.justifyContent="center";
con.style.textAlign="center";
con.style.display="flex";
footer.style.width="100%";
footer.style.justifyContent="space-evenly";
footer.style.paddingLeft="3%";
    }
});
