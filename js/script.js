
// eseguo un ciclo di 10 ripetizioni da 0 a 9
console.log('------ da 0 a 9 -----------');
for(let i = 0; i < 10; i++){
  console.log(i);
}

console.log('------ da 10 a 1 -----------');
// eseguo un ciclo di 10 ripetizioni da 10 a 1
for(let i = 10; i > 0; i--){
  console.log(i);
}
console.log('------ fine cilo-----------');

let num = 10;
let y = num++;
console.log('y = ', y); // 10
y = num;
console.log('y = ', y); // 11

let num2 = 10;
let z = --num2;
console.log('z = ', z); // 9

const limit = 10;

// genero una lista con innerHTML partendo da 0
const lista1 = document.getElementById('lista-1');
for(let i = 0; i < limit; i++){
  lista1.innerHTML += `<li>Elemento: ${i}</li>`
}

// genero una lista con innerHTML partendo da 1
const lista2 = document.getElementById('lista-2');
for(let i = 1; i <= limit; i++){
  lista2.innerHTML += `<li>Elemento: ${i}</li>`
}

// genero una lista con innerHTML partendo da 1 con ciclo da 0
const lista3 = document.getElementById('lista-3');
for(let i = 0; i < limit; i++){
  lista3.innerHTML += `<li>Elemento: ${i + 1}</li>`
}

// genero una lista con createElement() partendo da 1 con ciclo da 0
const lista4 = document.getElementById('lista-4');
for(let i = 0; i < limit; i++){
  // creo un nuovo elemento HTML
  const li = document.createElement('li');
  li.innerHTML = `Elemento: ${i + 1}`
  lista4.append(li);
}

// genero una lista con createElement() della tabellina del 2 fino a 10
const lista5 = document.getElementById('lista-5');
for(let i = 0; i < limit; i++){
  if(!(i % 2)){  
    const li = document.createElement('li');
    li.innerHTML = `Elemento: ${i + 2}`
    lista5.append(li);
  }
}

// genero una lista con createElement() della tabellina del 3 fino a 30
const lista6 = document.getElementById('lista-6');
for(let i = 0; i < 30; i++){
  if(i % 3 === 0){  
    const li = document.createElement('li');
    li.innerHTML = `Elemento: ${i + 3}`
    lista6.append(li);
  }
}

// genero una lista con createElement() della tabellina del 5 fino a 50
const lista7 = document.getElementById('lista-7');
for(let i = 0; i < 50; i++){
  if(i % 5 === 0){  
    const li = document.createElement('li');
    li.innerHTML = `Elemento: ${i + 5}`
    lista7.append(li);
  }
}

// genero una lista con createElement() di 10 elementi verdi ma i pari rossi
const lista8 = document.getElementById('lista-8');
for(let i = 1; i <= limit; i++){
  const li = document.createElement('li');
  li.innerHTML = `Elemento: ${i}`
  if(i % 2 === 0) {
    li.classList.add('text-danger')
  }else{
    li.classList.add('text-success')
   }
  lista8.append(li);
}

// STAMPA DI BOX

const containerQ = document.getElementById('container-q');
for(let i = 1; i <= 100; i++){
  let classPari = '';
  if(i % 2 === 0){
    classPari = 'pari';
  }
  containerQ.innerHTML += `
    <div class="box ${classPari}">${i}</div>
  `
}

const containerQbis = document.getElementById('container-qbis');
for(let i = 1; i <= 100; i++){
  if(i % 2 === 0){
    containerQbis.innerHTML += `
      <div class="box pari">${i}</div>
    `
  }else{
    containerQbis.innerHTML += `
      <div class="box ">${i}</div>
    `
  }
}

const containerQ2 = document.getElementById('container-q2');
for(let i = 1; i <= 100; i++){
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = i;
  if(!(i % 2)) box.classList.add('pari')
  containerQ2.append(box);
}
