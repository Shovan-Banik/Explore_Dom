const sections=document.querySelectorAll('section');
for(const section of sections){
    section.style.border='2px solid red';
    section.style.marginBottom='30px';
    section.style.borderRadius='20px';
    section.style.padding='50px';
    section.style.backgroundColor='green';
}
const firstSection=document.getElementById('first_section');
firstSection.style.backgroundColor='yellow';
firstSection.classList.add('sefu');
firstSection.classList.remove('text');