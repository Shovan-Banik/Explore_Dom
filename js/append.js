const liList=document.getElementById('funny');
// console.log(liList);
const li =document.createElement('li');
li.innerText='hoga';
liList.appendChild(li);

// append section

const mainContainer=document.getElementById('main_container');

const section=document.createElement('section');

const head=document.createElement('h1');
head.innerText='new section';
section.appendChild(head);

const ul=document.createElement('ul');

const li1=document.createElement('li');
li1.innerText='ajk';
ul.appendChild(li1);

const li2=document.createElement('li');
li2.innerText='kalke';
ul.appendChild(li2);

const li3=document.createElement('li');
li3.innerText='prso';
ul.appendChild(li3);

const li4=document.createElement('li');
li4.innerText='onkdin por';
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);

const huday=document.createElement('section');
huday.innerHTML=`
<h1>shei level ar khela soro hyce</h1>
<ul>
<li>hyce</li>
</ul>
`
mainContainer.appendChild(huday);
