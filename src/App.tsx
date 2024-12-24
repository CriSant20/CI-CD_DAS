import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

// Navbar
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <h2>Practica DAs</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  )
}

// Header
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Christopher Santamaria Marquez de Software</h1>
        <p>Pagina principal descriptiva de la practica de Das sobre CI/CD.</p>
      </div>
    </header>
  )
}

// Main Content
function MainContent() {
  return (
    <main>
      <section id="about" className="about">
        <h2>Acerca de mí</h2>
        <p>Soy un desarrollador web apasionado por la tecnología y la creación de soluciones innovadoras. Exploro nuevas herramientas y tecnologías para construir productos eficientes.</p>
      </section>

      <section id="projects" className="projects">
        <h2>Mis Proyectos</h2>
        <div className="project-cards">
          <div className="card">
            <h3>GourmetGO</h3>
            <p>Descripción                          .</p>
          </div>
          <div className="card">
            <h3>Vinculación</h3>
            <p>Descripción </p>
          </div>
          <div className="card">
            <h3>Ecommerce</h3>
            <p>Descripción</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contacto</h2>
        <p>Para más información, puedes contactarme a través de las redes sociales o enviándome un correo.</p>
      </section>
    </main>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Christopher Santamaria Marquez. Todos los derechos reservados.</p>
      <div className="social-links">
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}

export default App
