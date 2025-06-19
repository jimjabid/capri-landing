import "./style.css";

// Loading animation HTML
const loadingHTML = `
  <div id="loading-screen" class="fixed inset-0 z-[200] bg-[#0a0f07] flex items-center justify-center">
    <div class="text-center">
      <!-- Animated Logo -->
      <div class="mb-8">
        <h1 class="text-6xl md:text-8xl font-bold text-[#ffa7a3] poetsen-one-regular animate-pulse">
          CAPRI CLUB
        </h1>
        <div class="w-32 h-1 bg-gradient-to-r from-[#ffa7a3] to-[#837118] mx-auto mt-4 animate-pulse"></div>
      </div>
      
      <!-- Animated Particles -->
      <div class="relative w-64 h-64 mx-auto mb-8">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-32 h-32 border-2 border-[#ffa7a3] rounded-full animate-spin"></div>
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-24 h-24 border-2 border-[#837118] rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 3s;"></div>
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-16 h-16 border-2 border-[#ffa7a3] rounded-full animate-spin" style="animation-duration: 2s;"></div>
        </div>
        
        <!-- Floating particles -->
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
        <div class="particle particle-5"></div>
      </div>
      
      <!-- Progress Bar -->
      <div class="w-64 mx-auto mb-4">
        <div class="bg-[#111a0b] rounded-full h-2 overflow-hidden">
          <div id="progress-bar" class="bg-gradient-to-r from-[#ffa7a3] to-[#837118] h-full rounded-full transition-all duration-300" style="width: 0%"></div>
        </div>
      </div>
      
      <!-- Loading Text -->
      <p class="text-[#837118] text-lg animate-pulse">Cargando la mejor fiesta...</p>
    </div>
  </div>
`;

// Main content HTML (existing code)
const mainContentHTML = `
  <!-- Popup Modal -->
  <div id="domain-info-popup" class="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
    <div class="bg-[#0a0f07] border-2 border-[#ffa7a3] rounded-lg p-8 mx-4 max-w-md w-full text-center shadow-2xl">
      <div class="mb-6">
        <h2 class="text-2xl font-bold text-[#ffa7a3] poetsen-one-regular mb-4">¡Bienvenido a Capri Club!</h2>
        <div class="w-16 h-1 bg-[#837118] mx-auto mb-4"></div>
      </div>
      
      <div class="text-white space-y-4 text-sm leading-relaxed">
        <p>
          Esta es la página oficial de <span class="text-[#ffa7a3] font-bold">Capri Club</span>, 
          el mejor club nocturno del sur de Italia en el corazón de la Zona T.
        </p>
        
        <p>
          Capri Club forma parte de <span class="text-[#837118] font-bold">Solid Ground</span> 
          (solidground.com.co), nuestra empresa matriz que opera diversos establecimientos 
          de entretenimiento en Bogotá.
        </p>
        
        <div class="bg-[#111a0b] rounded-lg p-4 mt-4">
          <p class="text-xs text-[#837118]">
            <strong>CAPRI WORLD S.A.S</strong><br>
            NIT: 901.871.386-5<br>
            Parte de Solid Ground Colombia
          </p>
        </div>
      </div>
      
      <button 
        id="close-popup" 
        class="mt-6 bg-[#ffa7a3] text-[#0a0f07] font-bold px-6 py-3 rounded-md hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Continuar al Sitio
      </button>
    </div>
  </div>

  <div class="min-h-screen flex flex-col text-white">
    <!-- Header (sticky) -->
    <header class="sticky top-0 z-50 bg-opacity-90 bg-[#0a0f07] backdrop-blur-sm py-4 px-6 flex justify-between items-center">
      <div class="text-[#ffa7a3] text-2xl font-bold poetsen-one-regular ">CAPRI CLUB</div>
      <nav class="hidden md:flex space-x-6 text-white">
        <a href="#" class="hover:text-[#ffa7a3] transition-colors">Home</a>
        <a href="#events" class="hover:text-[#ffa7a3] transition-colors">Eventos</a>
        <a href="#gallery" class="hover:text-[#ffa7a3] transition-colors">Galeria</a>
        <a href="#contact" class="hover:text-[#ffa7a3] transition-colors">Contacto</a>
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
        <div class="absolute inset-0 bg-[url('/images/capri-hero.jpg')] bg-cover bg-center blur-sm opacity-50"></div>
      </div>
      <div class="z-10 text-center px-4">
        <h1 class="text-6xl md:text-8xl font-bold mb-4 text-[#ffa7a3] poetsen-one-regular ">Capri Club</h1>
        <p class="text-xl md:text-2xl mb-8 text-white italic">La mejor fiesta del Sur de Italia; en el corazón de la Zona T.</p>
        <a href="https://wa.me/573106070083" target="_blank">
          <button class="bg-[#ffa7a3] text-[#0a0f07] font-bold px-8 py-3 rounded-md shadow-md hover:scale-105 transition-all duration-300">
            Reserva Ahora
          </button>
        </a>
      </div>
    </section>

    <!-- Quick Info Section -->
    <section class="bg-[#0a0f07] py-12 px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-6 bg-[#111a0b] rounded-lg hover:bg-[#161f10] transition-all duration-300">
          <div class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto text-[#837118]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="text-[#837118] text-xl font-bold mb-2">Dirección</h3>
          <p class="text-white">Cl. 83 # 12A - 36 - Floor 3<br>Bogotá, Colombia</p>
        </div>
        <div class="text-center p-6 bg-[#111a0b] rounded-lg hover:bg-[#161f10] transition-all duration-300">
          <div class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto text-[#837118]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 class="text-[#837118] text-xl font-bold mb-2">Contacto</h3>
          <a href="tel:+573106070083" class="text-white hover:text-[#ffa7a3] transition-colors">+57 310 6070083</a>
        </div>
        <div class="text-center p-6 bg-[#111a0b] rounded-lg hover:bg-[#161f10] transition-all duration-300">
          <div class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto text-[#837118]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-[#837118] text-xl font-bold mb-2">Síguenos</h3>
          <div class="flex justify-center space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61571704631568" target="_blank" class="text-white hover:text-[#ffa7a3] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/capriclub_official/" target="_blank" class="text-white hover:text-[#ffa7a3] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section id="events" class="py-16 px-6 bg-gradient-to-b from-[#0a0f07] to-[#111a0b]">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-[#ffa7a3] poetsen-one-regular ">Próximos Eventos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${createEventCards()}
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-16 px-6 bg-[#111a0b]">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-[#ffa7a3] poetsen-one-regular ">Galería</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${createGalleryItems()}
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="bg-[#0a0f07] text-white py-12 px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-[#ffa7a3] font-bold text-xl mb-4 poetsen-one-regular ">Capri Club</h3>
          <p class="mb-2">Cl. 83 # 12A - 36 - Floor 3</p>
          <p>Bogotá, Colombia</p>
        </div>
        <div>
          <h3 class="text-[#ffa7a3] font-bold text-xl mb-4 poetsen-one-regular ">Horario</h3>
          <p class="mb-2">Jueves a Sábado</p>
          <p>9:00 PM - 3:00 AM</p>
        </div>
        <div>
          <h3 class="text-[#ffa7a3] font-bold text-xl mb-4 poetsen-one-regular ">Contacto</h3>
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
      <div class="mt-12 text-center text-sm">
        <p class="text-[#837118] mb-2">© ${new Date().getFullYear()} Capri Club. Todos los derechos reservados.</p>
        <p class="text-[#837118]">CAPRI WORLD S.A.S</p>
        <p class="text-[#837118]">NIT: 901.871.386-5</p>
      </div>
    </footer>
  </div>
`;

// Initialize the page
document.querySelector("#app").innerHTML = loadingHTML;

// Loading animation function
function startLoadingAnimation() {
  const progressBar = document.getElementById('progress-bar');
  let progress = 0;
  
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;
    
    progressBar.style.width = progress + '%';
    
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        // Hide loading screen with fade out
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
          // Show main content
          document.querySelector("#app").innerHTML = mainContentHTML;
          initializeMainContent();
        }, 500);
      }, 500);
    }
  }, 100);
}

// Initialize main content functionality
function initializeMainContent() {
  // Popup functionality
  const popup = document.getElementById("domain-info-popup");
  const closePopupButton = document.getElementById("close-popup");

  // Show popup on page load
  popup.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  // Close popup functionality
  closePopupButton.addEventListener("click", () => {
    popup.style.opacity = "0";
    popup.style.transform = "scale(0.95)";

    setTimeout(() => {
      popup.classList.add("hidden");
      document.body.style.overflow = "auto";
    }, 300);
  });

  // Close popup when clicking outside (optional)
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      closePopupButton.click();
    }
  });

  // Mobile menu functionality
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeMenuButton = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });

  closeMenuButton.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    document.body.style.overflow = "auto";
  });

  // Close menu when clicking on links
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  });
}

// Helper functions to generate content
function createEventCards() {
  const events = [
    {
      date: "",
      title: "Capri/Solid Ground/Incognito",
      image:
        "images/evento-1.jpg",
    },
    {
      date: "",
      title: "Black Coffe",
      image:
        "images/evento-2.jpg",
    },
    {
      date: "",
      title: "Ponte",
      image:
        "images/evento-3.jpg",
    },
  ];

  return events
    .map(
      (event) => `
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
  `
    )
    .join("");
}

function createGalleryItems() {
  // Array of sample gallery images
  const images = ["images/galeria-1.jpg",
    "images/galeria-2.jpg",
    "images/galeria-3.jpg",
    "images/galeria-4.jpg",
    "images/galeria-5.jpg",
    "images/galeria-6.jpg",
    "images/galeria-7.jpg",
    "images/galeria-8.jpg",
  ];

  return images
    .map(
      (image) => `
    <div class="aspect-square overflow-hidden rounded-md hover:brightness-75 transition-all duration-300 cursor-pointer">
      <img src="${image}" alt="Capri Club gallery" class="w-full h-full object-cover">
    </div>
  `
    )
    .join("");
}

// Start the loading animation when the page loads
document.addEventListener("DOMContentLoaded", () => {
  startLoadingAnimation();
});

