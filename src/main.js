import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen flex flex-col text-white">
    <!-- Header (sticky) -->
    <header class="sticky top-0 z-50 bg-opacity-90 bg-[#0a0f07] backdrop-blur-sm py-4 px-6 flex justify-between items-center">
      <div class="text-[#ffa7a3] text-2xl font-bold permanent-marker-bold">CAPRI CLUB</div>
      <nav class="hidden md:flex space-x-6 text-white">
        <a href="#" class="hover:text-[#ffa7a3] transition-colors">Home</a>
        <a href="#events" class="hover:text-[#ffa7a3] transition-colors">Events</a>
        <a href="#gallery" class="hover:text-[#ffa7a3] transition-colors">Gallery</a>
        <a href="#contact" class="hover:text-[#ffa7a3] transition-colors">Contact</a>
      </nav>
      <button class="md:hidden" id="mobile-menu-button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>

    <!-- Mobile menu (hidden by default) -->
    <div class="hidden bg-[#0a0f07] fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 text-xl" id="mobile-menu">
      <a href="#" class="hover:text-[#ffa7a3] transition-colors">Home</a>
      <a href="#events" class="hover:text-[#ffa7a3] transition-colors">Events</a>
      <a href="#gallery" class="hover:text-[#ffa7a3] transition-colors">Gallery</a>
      <a href="#contact" class="hover:text-[#ffa7a3] transition-colors">Contact</a>
      <button class="absolute top-5 right-5 text-white" id="close-menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center">
      <div class="absolute inset-0 bg-[#0a0f07] bg-opacity-70 z-0">
        <!-- Background image with overlay -->
        <div class="absolute inset-0 bg-[url('https://scontent-gig4-1.xx.fbcdn.net/v/t39.30808-6/473424257_10161614460522217_1078364924807963987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ceIdyxNULPwQ7kNvwHQ58CZ&_nc_oc=Adn9RgOSjtFbP3zdFdH0bhKel9CbaCXjRYicmQdfbeuyYodCo1zMWJWss6w8JDGOcY0&_nc_zt=23&_nc_ht=scontent-gig4-1.xx&_nc_gid=KscZyxawNuBTz6tbaZKVZQ&oh=00_AfKWS8uo4Kd5xhlQ2p5R6TJOZ89ZKqGa1C45RR9eKcgkgw&oe=68355693')] bg-cover bg-center blur-sm opacity-50"></div>
      </div>
      <div class="z-10 text-center px-4">
        <h1 class="text-6xl md:text-8xl font-bold mb-4 text-[#ffa7a3] permanent-marker-bold">Capri Club</h1>
        <p class="text-xl md:text-2xl mb-8 text-white italic">La mejor fiesta del Sur de Italia; en el corazón de la Zona T.</p>
        <button class="bg-[#ffa7a3] text-[#0a0f07] font-bold px-8 py-3 rounded-md shadow-md hover:scale-105 transition-all duration-300">
          Reserva Ahora
        </button>
      </div>
    </section>

    <!-- Quick Info Section -->
    <section class="bg-[#0a0f07] py-12 px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center md:text-left">
          <h3 class="text-[#837118] text-xl font-bold mb-2">Dirección</h3>
          <p class="text-white">Cl. 83 # 12A - 36 - Floor 3<br>Bogotá, Colombia</p>
        </div>
        <div class="text-center">
          <h3 class="text-[#837118] text-xl font-bold mb-2">Contacto</h3>
          <a href="tel:+573106070083" class="text-white hover:text-[#ffa7a3] transition-colors">+57 310 6070083</a>
        </div>
        <div class="text-center md:text-right">
          <h3 class="text-[#837118] text-xl font-bold mb-2">Síguenos</h3>
          <a href="https://www.facebook.com/profile.php?id=61571704631568" target="_blank" class="inline-block text-white hover:text-[#ffa7a3] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section id="events" class="py-16 px-6 bg-gradient-to-b from-[#0a0f07] to-[#111a0b]">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-[#ffa7a3] permanent-marker-bold">Próximos Eventos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${createEventCards()}
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-16 px-6 bg-[#111a0b]">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-[#ffa7a3] permanent-marker-bold">Galería</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${createGalleryItems()}
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="bg-[#0a0f07] text-white py-12 px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-[#ffa7a3] font-bold text-xl mb-4 permanent-marker-bold">Capri Club</h3>
          <p class="mb-2">Cl. 83 # 12A - 36 - Floor 3</p>
          <p>Bogotá, Colombia</p>
        </div>
        <div>
          <h3 class="text-[#ffa7a3] font-bold text-xl mb-4 permanent-marker-bold">Horario</h3>
          <p class="mb-2">Jueves a Sábado</p>
          <p>9:00 PM - 3:00 AM</p>
        </div>
        <div>
          <h3 class="text-[#ffa7a3] font-bold text-xl mb-4 permanent-marker-bold">Contacto</h3>
          <p class="mb-2">
            <a href="tel:+573106070083" class="hover:text-[#ffa7a3] transition-colors">+57 310 6070083</a>
          </p>
          <p>
            <a href="mailto:info@capriclub.co" class="hover:text-[#ffa7a3] transition-colors">info@capriclub.co</a>
          </p>
          <div class="mt-4 flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61571704631568" target="_blank" class="text-white hover:text-[#ffa7a3] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" class="text-white hover:text-[#ffa7a3] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-12 text-center text-sm text-[#837118]">
        © ${new Date().getFullYear()} Capri Club. Todos los derechos reservados.
      </div>
    </footer>
  </div>
`

// Helper functions to generate content
function createEventCards() {
  const events = [
    { 
      date: '', 
      title: 'Miercoles de Energia Elevada', 
      image: 'https://scontent-gig4-1.xx.fbcdn.net/v/t51.75761-15/491464856_17866268907361332_2670920672412696955_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=X9aHoMDaUCwQ7kNvwEKYMTW&_nc_oc=AdmAkYUgSqliJSL2Oz7GfO1vrkyrSZxp9Edw9EA3ZTPS1qJ8v75Pf9lIqwrB-T83O8U&_nc_zt=23&_nc_ht=scontent-gig4-1.xx&_nc_gid=gvpGxhQs2wjhuNlUyHNWyA&oh=00_AfI1EwveLWxoR8_Wlnvp2PPoYaVsBwZL23shh7-luwzlXA&oe=683573EE' 
    },
    { 
      date: '', 
      title: 'Black Coffe', 
      image: 'https://scontent-gig4-1.xx.fbcdn.net/v/t51.75761-15/490419610_17865883485361332_9047439651885537519_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SJ2LTLp2u2AQ7kNvwF9qwhZ&_nc_oc=Adn6a4b51UUdnQW-IYt_ChUzfwgCToLxeIy2a00qzYeYvte3vvnFeODCsWK6Ao2O8uU&_nc_zt=23&_nc_ht=scontent-gig4-1.xx&_nc_gid=cj5bV9niSudo855jKX_-Xg&oh=00_AfK5EEFiHo6c3vubUZ3cugUIsS66A7J5aTP9-FUCE-8r0g&oe=6835863D'
    },
    { 
      date: '', 
      title: 'Ponte', 
      image: 'https://scontent-gig4-2.xx.fbcdn.net/v/t51.75761-15/488587695_17865517053361332_1603105703555652256_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HkKnXfZSPEMQ7kNvwHINrp4&_nc_oc=AdngdmnCNV-vIDmj_usedK9tEgzhFVV49KfwLs6LWioAwUORWA6AntxCbyMgRP8ilp0&_nc_zt=23&_nc_ht=scontent-gig4-2.xx&_nc_gid=FIF7mp3ZJXMyDn6jL0lZsA&oh=00_AfJPFKFB0fIu576Bave_Zbr15MYngk1R8XEQASZ_jo95Xw&oe=68355D0B' 
    }
  ];

  return events.map(event => `
    <div class="bg-[#0a0f07] rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
      <div class="h-64 overflow-hidden">
        <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover">
      </div>
      <div class="p-6">
        <div class="text-[#ffa7a3] font-bold">${event.date}</div>
        <h3 class="text-xl font-bold mt-2">${event.title}</h3>
        <button class="mt-4 bg-transparent border border-[#837118] text-[#837118] px-4 py-2 rounded hover:bg-[#837118] hover:text-white transition-colors">
          Más Info
        </button>
      </div>
    </div>
  `).join('');
}

function createGalleryItems() {
  // Array of sample gallery images
  const images = [
    'https://scontent-gig4-2.xx.fbcdn.net/v/t51.75761-15/490985017_17866025055361332_5088864262314374453_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=98NPGHpliksQ7kNvwHAgC5X&_nc_oc=AdlXsB_d8L2d9HkttNZkVQ2Bis8zYR8P67ZIBCkCwU7sQpdPIiXjkG_UJHOrQcRvNLA&_nc_zt=23&_nc_ht=scontent-gig4-2.xx&_nc_gid=iQLgc2T_aTGaYQrKRyRpgw&oh=00_AfILbPa0C226pYu4_NXOHuZZb4G2qshcnI9uXoxvke79Xg&oe=68358506',
    'https://scontent-gig4-2.xx.fbcdn.net/v/t51.75761-15/490295811_17866025046361332_4803766369576903955_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DT6QqGv0BZ4Q7kNvwFOUZNi&_nc_oc=AdnsGhOQnwxVCsHKeNT3lKZKzCGHyt0gq9rPo_8J0yoRakSaTDSPR1TsJj4EsxEzkU8&_nc_zt=23&_nc_ht=scontent-gig4-2.xx&_nc_gid=GG-k7_tgGembXHQgNqCWeg&oh=00_AfJSezO_6UP96kPjp451ohj4PSi4zvX5ElKXOeRbN_-caA&oe=68355E06',
    'https://scontent-gig4-1.xx.fbcdn.net/v/t51.75761-15/475907231_17856436308361332_5956169966739561474_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=H3Oo1sKh7vQQ7kNvwHHYjmD&_nc_oc=AdnW0mwjEqu9d_BIZkFy0MyUs-1ItpKU_kBGcXNoDdcEegNaz_nUJRzcvtEFWSwolrY&_nc_zt=23&_nc_ht=scontent-gig4-1.xx&_nc_gid=h6NemafaXDCgLqRgWo-tOQ&oh=00_AfLOTMVL-bWwUIf0ezZBoQd2Ut1Tkd5FKPQ5wRtA9tx5Ag&oe=683583B0',
    'https://scontent-gig4-1.xx.fbcdn.net/v/t51.75761-15/475777938_17856436317361332_3231492925795497750_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_28NYpwbhl0Q7kNvwFkMdhg&_nc_oc=AdmkiVIkjfBGshFgdOf15iod51Wk5EnqqWa9YY9HLd5iw8zMLTdNl1Is6MJv4puMTFY&_nc_zt=23&_nc_ht=scontent-gig4-1.xx&_nc_gid=0Fhv5L7qsr9CJxfkkXzMJQ&oh=00_AfJYKW8aRo3BSjUi2_r_9uLm8nk7oJF5UdFUouF8MyDy0Q&oe=68357C5D',
    'https://scontent-gig4-2.xx.fbcdn.net/v/t51.75761-15/474883379_17855544351361332_7557892417345282158_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GGm-MLqwKwwQ7kNvwEeEVt7&_nc_oc=AdlauXYrMYqJ2tJLmYgEbSMeJLg4LtNaiPbyj7jY3B89k2xlnnm1PY2S5rcufXkQsgg&_nc_zt=23&_nc_ht=scontent-gig4-2.xx&_nc_gid=zOX9T2RCEGGAzqpd5-fvFA&oh=00_AfJLh5_l_kXDGUJAG_CIBIADcicBogyG-WewS74btmHKXw&oe=683579FA',
    'https://scontent-gig4-2.xx.fbcdn.net/v/t51.75761-15/474953493_17855544360361332_8772305109791033479_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8ZdhTBif1C8Q7kNvwH8tQEb&_nc_oc=AdnjwtIjCpf7-98hgbuqs8dqsK1hG1p-FbjAdN_Fr29zIi-G3aYmpS1cTa5vj6e5Xsw&_nc_zt=23&_nc_ht=scontent-gig4-2.xx&_nc_gid=_yBLr5gT1Dp8wInzBB6UoQ&oh=00_AfIO3SchQtE4Yjq5ATqC9AcbwNMvne6W84JH5qCU6BIHWA&oe=68355FC8',
    'https://scontent-gig4-2.xx.fbcdn.net/v/t51.75761-15/474797634_17855544369361332_2606718780490318138_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Qy5j5h_2XroQ7kNvwE01eRr&_nc_oc=AdlJJsb78zYtfxBskjIjI3AwwUb3RWFotfZDMSFy9-LaLCQAkZlBjv53FG7EpFO-Lgs&_nc_zt=23&_nc_ht=scontent-gig4-2.xx&_nc_gid=W6yStuBc5rlxhQNLlcN4LA&oh=00_AfI2sLaOHKATzKyAU-9QIJxW9MxtbUltkbjM3lHYf6eD6A&oe=6835732A',
    'https://scontent-gig4-1.xx.fbcdn.net/v/t51.75761-15/474031882_17854626528361332_926017226916868932_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AFOsjeavjncQ7kNvwFijkO3&_nc_oc=AdmqaiKFBykWmAU8SHeQC7iP8q2DBpxe0V0xvBeFo0aupxHZ0vtOZSB3YPNMkiGHtsM&_nc_zt=23&_nc_ht=scontent-gig4-1.xx&_nc_gid=AtSYT-P-nBoZcZJ650FVQA&oh=00_AfJNBJWyEOFmIWC3V4-Q-oF9A0yOdV-FskfwExy-V8i2SQ&oe=68356551'
  ];

  return images.map(image => `
    <div class="aspect-square overflow-hidden rounded-md hover:brightness-75 transition-all duration-300 cursor-pointer">
      <img src="${image}" alt="Capri Club gallery" class="w-full h-full object-cover">
    </div>
  `).join('');
}

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
  
  closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  // Close menu when clicking on links
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });
  });
});

// Initialize the counter
setupCounter(document.querySelector('#counter'))
