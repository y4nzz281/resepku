const RECIPES = [
    {
      id: 1,
      title:'Nasi Goreng Spesial',
      desc:'Nasi goreng sederhana dengan telur, ayam suwir dan kecap manis.',
      img:'img/nasi goreng.jpg',
      ingredients:['nasi','telur','kecap manis','bawang merah','bawang putih'],
      steps:['Panaskan minyak, tumis bawang hingga harum.','Masukkan ayam suwir, tambahkan kecap manis.','Tambahkan nasi, aduk hingga rata.','Masak telur orak-arik dan campur.','Sajikan hangat.'],
      time:20,
      video:'tes.mp4'
    },
    {
      id: 2,
      title:'Soto Ayam Praktis',
      desc:'Soto ayam bening dengan bumbu sederhana dan kuah segar.',
      img:'img/soto.jpg',
      ingredients:['ayam','soun','kubis','daun bawang','bawang merah','bawang putih','kunyit'],
      steps:['Rebus ayam hingga empuk.','Tumis bumbu halus lalu campurkan ke kaldu.','Masukkan soun dan sayuran.','Sajikan dengan bawang goreng.'],
      time:40
    },
    {
      id: 3,
      title:'Rendang Khas Palembang',
      desc:'Nasi goreng sederhana dengan telur, ayam suwir dan kecap manis.',
      img:'img/rendang.jpg',
      ingredients:['Daging sapi','Bumbu rendang'],
      steps:['Panaskan minyak, tumis bawang hingga harum.','Masukkan ayam suwir, tambahkan kecap manis.','Tambahkan nasi, aduk hingga rata.','Masak telur orak-arik dan campur.','Sajikan hangat.'],
      time:20,
      video:'nasi_goreng.mp4'
    },
    {
      id: 4,
      title:'Tahu Crispy Makyuss',
      desc:'Nasi goreng sederhana dengan telur, ayam suwir dan kecap manis.',
      img:'img/tahucrispi.jpg',
      ingredients:['tahu','tepung'],
      steps:['Panaskan minyak, tumis bawang hingga harum.','Masukkan ayam suwir, tambahkan kecap manis.','Tambahkan nasi, aduk hingga rata.','Masak telur orak-arik dan campur.','Sajikan hangat.'],
      time:20,
      video:'nasi_goreng.mp4'
    },
    {
      id:5,
      title:'Telor Balado pedas',
      desc:'Nasi goreng sederhana dengan telur, ayam suwir dan kecap manis.',
      img:'img/telorbalado.jpg',
      ingredients:['Bumbu balado','telur'],
      steps:['Panaskan minyak, tumis bawang hingga harum.','Masukkan ayam suwir, tambahkan kecap manis.','Tambahkan nasi, aduk hingga rata.','Masak telur orak-arik dan campur.','Sajikan hangat.'],
      time:20,
      video:'nasi_goreng.mp4'
    },
    {
      id:6,
      title:'Perkedel Kenteng',
      desc:'Nasi goreng sederhana dengan telur, ayam suwir dan kecap manis.',
      img:'img/perkedel.jpg',
      ingredients:['Kentang','Daun bawang'],
      steps:['Panaskan minyak, tumis bawang hingga harum.','Masukkan ayam suwir, tambahkan kecap manis.','Tambahkan nasi, aduk hingga rata.','Masak telur orak-arik dan campur.','Sajikan hangat.'],
      time:20,
      video:'nasi_goreng.mp4'
    },
    {
      id:7,
      title:'Sayur Lodeh',
      desc:'Nasi goreng sederhana dengan telur, ayam suwir dan kecap manis.',
      img:'img/sayurlodeh.jpg',
      ingredients:['nasi','telur'],
      steps:['Panaskan minyak, tumis bawang hingga harum.','Masukkan ayam suwir, tambahkan kecap manis.','Tambahkan nasi, aduk hingga rata.','Masak telur orak-arik dan campur.','Sajikan hangat.'],
      time:20,
      video:'nasi_goreng.mp4'
    },
    {
      id:8,
      title:'Orek Tempe',
      desc:'Nasi goreng sederhana dengan telur, ayam suwir dan kecap manis.',
      img:'img/tempe.jpg',
      ingredients:['nasi','telur','ayam','kecap manis','bawang merah','bawang putih'],
      steps:['Panaskan minyak, tumis bawang hingga harum.','Masukkan ayam suwir, tambahkan kecap manis.','Tambahkan nasi, aduk hingga rata.','Masak telur orak-arik dan campur.','Sajikan hangat.'],
      time:20,
      video:'nasi_goreng.mp4'
    },
    {
      id:9,
      title:'Omellete',
      desc:'Nasi goreng sederhana dengan telur, ayam suwir dan kecap manis.',
      img:'img/omelet.jpg',
      ingredients:['nasi','telur','ayam','kecap manis','bawang merah','bawang putih'],
      steps:['Panaskan minyak, tumis bawang hingga harum.','Masukkan ayam suwir, tambahkan kecap manis.','Tambahkan nasi, aduk hingga rata.','Masak telur orak-arik dan campur.','Sajikan hangat.'],
      time:20,
      video:'nasi_goreng.mp4'
    },
    {
      id:10,
      title:'Nasi Goreng Spesial',
      desc:'Nasi goreng sederhana dengan telur, ayam suwir dan kecap manis.',
      img:'nasi goreng.jpg',
      ingredients:['nasi','telur','ayam','kecap manis','bawang merah','bawang putih'],
      steps:['Panaskan minyak, tumis bawang hingga harum.','Masukkan ayam suwir, tambahkan kecap manis.','Tambahkan nasi, aduk hingga rata.','Masak telur orak-arik dan campur.','Sajikan hangat.'],
      time:20,
      video:'nasi_goreng.mp4'
    },
    {
      id:11,
      title:'Nasi Goreng Spesial',
      desc:'Nasi goreng sederhana dengan telur, ayam suwir dan kecap manis.',
      img:'nasi goreng.jpg',
      ingredients:['nasi','telur','ayam','kecap manis','bawang merah','bawang putih'],
      steps:['Panaskan minyak, tumis bawang hingga harum.','Masukkan ayam suwir, tambahkan kecap manis.','Tambahkan nasi, aduk hingga rata.','Masak telur orak-arik dan campur.','Sajikan hangat.'],
      time:20,
      video:'nasi_goreng.mp4'
    },
    {
      id:12,
      title:'Nasi Goreng Spesial',
      desc:'Nasi goreng sederhana dengan telur, ayam suwir dan kecap manis.',
      img:'nasi goreng.jpg',
      ingredients:['nasi','telur','ayam','kecap manis','bawang merah','bawang putih'],
      steps:['Panaskan minyak, tumis bawang hingga harum.','Masukkan ayam suwir, tambahkan kecap manis.','Tambahkan nasi, aduk hingga rata.','Masak telur orak-arik dan campur.','Sajikan hangat.'],
      time:20,
      video:'nasi_goreng.mp4'
    }
  ];

  const grid=document.getElementById('recipesGrid');
  const modalBackdrop=document.getElementById('modalBackdrop');
  const closeModal=document.getElementById('closeModal');
  const videoEl=document.getElementById('modalVideo');

  function renderRecipes(list){
    grid.innerHTML='';
    list.forEach(r=>{
      const card=document.createElement('article');
      card.className='card';
      card.innerHTML=`
        <div class="media" style="background-image:url('${r.img}')"></div>
        <div class="meta">
          <h3>${r.title}</h3>
          <p>${r.desc}</p>
          <div class="tags">${r.ingredients.slice(0,4).map(i=>`<span class="tag">${i}</span>`).join('')}</div>
        </div>
        <div class="actions"><button data-id="${r.id}" class="viewBtn">Lihat</button></div>`;
      grid.appendChild(card);
    });
    document.querySelectorAll('.viewBtn').forEach(b=>b.addEventListener('click',e=>openModal(Number(e.currentTarget.dataset.id))));
  }

  function openModal(id){
    const r=RECIPES.find(x=>x.id===id); if(!r)return;
    document.getElementById('modalImage').style.backgroundImage=`url('${r.img}')`;
    document.getElementById('modalTitle').textContent=r.title;
    document.getElementById('modalDesc').textContent=r.desc;
    const ul=document.getElementById('modalIngredients'); ul.innerHTML=''; r.ingredients.forEach(i=>ul.innerHTML+=`<li>${i}</li>`);
    const ol=document.getElementById('modalSteps'); ol.innerHTML=''; r.steps.forEach(s=>ol.innerHTML+=`<li>${s}</li>`);
    document.getElementById('modalTime').textContent=r.time+' menit';
    if (r.video) {
      videoEl.src=r.video;
      videoEl.style.display='block';
    } else {
      videoEl.style.display='none';
      videoEl.removeAttribute('src');
    }
    modalBackdrop.style.display='flex';
  }

  closeModal.addEventListener('click',()=>{
    modalBackdrop.style.display='none';
    videoEl.pause();
    videoEl.currentTime=0;
  });

  modalBackdrop.addEventListener('click',e=>{
    if(e.target===modalBackdrop){
      modalBackdrop.style.display='none';
      videoEl.pause();
      videoEl.currentTime=0;
    }
  });

  // =======================
  // LOGIN CHECK
  // =======================
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  const nav = document.querySelector('nav');
  if (isLoggedIn) {
// Hapus tombol Sign In
document.getElementById('signInBtn').remove();

// Tambahkan gambar user
const userIcon = document.createElement('img');
userIcon.src = 'img/user2.png'; // ganti nama file sesuai gambar kamu
userIcon.alt = 'User';
userIcon.style.width = '40px';
userIcon.style.height = '40px';
userIcon.style.borderRadius = '50%';
userIcon.style.cursor = 'pointer';
userIcon.title = "Klik untuk logout";
nav.appendChild(userIcon);

// ✅ Tambahkan event klik untuk logout
userIcon.addEventListener('click', () => {
  const konfirmasi = confirm("Yakin mau logout, bro? 🥺");
  if (konfirmasi) {
    localStorage.removeItem('loggedIn'); // hapus status login
    window.location.href = "home.html"; // kembali ke halaman home
  }
});
}


// =======================
// FILTER FUNCTION
// =======================
function filterRecipes() {
const keyword = document.getElementById('searchInput').value.toLowerCase();
const ingredient = document.getElementById('ingredientInput').value.toLowerCase();
const time = parseInt(document.getElementById('timeFilter').value) || 0;

const filtered = RECIPES.filter(r => {
  const matchKeyword = r.title.toLowerCase().includes(keyword) || r.desc.toLowerCase().includes(keyword);
  const matchIngredient = !ingredient || r.ingredients.some(i => i.toLowerCase().includes(ingredient));
  const matchTime = !time || r.time <= time;
  return matchKeyword && matchIngredient && matchTime;
});

renderRecipes(filtered);
}

// Tombol "Cari" tetap berfungsi
document.getElementById('filterBtn').addEventListener('click', filterRecipes);

// Jalankan juga otomatis saat mengetik di input pencarian
document.getElementById('searchInput').addEventListener('input', filterRecipes);
document.getElementById('ingredientInput').addEventListener('input', filterRecipes);
document.getElementById('timeFilter').addEventListener('change', filterRecipes);


  renderRecipes(RECIPES);