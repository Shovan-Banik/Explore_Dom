const allLi=document.getElementsByTagName('li');
console.log(allLi);
const titlechng=document.getElementsByClassName('title');
console.log(titlechng);
const section=document.getElementById('one');
section.style.backgroundColor='red';
section.style.padding='50px';
section.style.border="10px solid white";
section.style.borderRadius='50px';
section.style.color='white';
// console.log(section);
const peras=document.querySelectorAll('p');
for(const pera of peras){
    console.log(pera);
}
const pera1=document.querySelector('p');
console.log(pera1);
pera1.innerText='paglu hye jbo';
// 5 selector done

const liLola=document.getElementById('first');
const li=document.createElement('li');
li.innerText='aja aja';
liLola.appendChild(li);

// get set done
const main=document.getElementById('container');
const section=document.createElement('section');
section.innerHTML=`
<h1>Add section using inner html</h1>
<p>parbo tahole</p>

`;
main.appendChild(section);

