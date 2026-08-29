/* ==========================================================================
   LÓGICA JAVASCRIPT - EVALUACIÓN FULLSTACK II
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Alternar Tema Claro / Oscuro
    const btnTema = document.getElementById('btnTema');
    
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            document.body.classList.toggle('oscuro');
            
            const esOscuro = document.body.classList.contains('oscuro');
            btnTema.innerHTML = esOscuro 
                ? '<i class="fa-solid fa-sun"></i> Modo claro' 
                : '<i class="fa-solid fa-moon"></i> Modo oscuro';
        });
    }

    // 2. Filtrado de Proyectos
    const botonesFiltro = document.querySelectorAll('.filtro-btn');
    const tarjetasProyecto = document.querySelectorAll('.tarjeta-proyecto');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            boton.classList.add('activo');

            const categoriaFiltro = boton.getAttribute('data-filtro');

            tarjetasProyecto.forEach(tarjeta => {
                const categoriaTarjeta = tarjeta.getAttribute('data-categoria');

                if (categoriaFiltro === 'todos' || categoriaTarjeta === categoriaFiltro) {
                    tarjeta.style.display = 'flex';
                } else {
                    tarjeta.style.display = 'none';
                }
            });
        });
    });

    // 3. Validación y Envío del Formulario de Contacto
    const formContacto = document.getElementById('formContacto');
    const mensajeEstado = document.getElementById('mensajeEstado');

    if (formContacto && mensajeEstado) {
        formContacto.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (nombre === '' || email === '' || mensaje === '') {
                mensajeEstado.textContent = 'Por favor completa todos los campos requeridos.';
                mensajeEstado.style.borderColor = 'var(--alerta)';
                mensajeEstado.style.color = 'var(--alerta)';
                mensajeEstado.hidden = false;
                return;
            }

            // Simulación de envío exitoso
            mensajeEstado.textContent = 'Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.';
            mensajeEstado.style.borderColor = 'var(--exito)';
            mensajeEstado.style.color = 'var(--exito)';
            mensajeEstado.hidden = false;

            formContacto.reset();

            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                mensajeEstado.hidden = true;
            }, 5000);
        });
    }

    // 4. Resaltar enlace de navegación activo al hacer scroll
    const secciones = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let actual = '';

        secciones.forEach(seccion => {
            const seccionTop = seccion.offsetTop - 100;
            if (window.scrollY >= seccionTop) {
                actual = seccion.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('activo');
            if (link.getAttribute('href') === `#${actual}`) {
                link.classList.add('activo');
            }
        });
    });

    // 5. Barra de Progreso de Lectura (Opción 1)
    const barraProgreso = document.getElementById('barraProgreso');
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0 && barraProgreso) {
            const porcentaje = (window.scrollY / totalHeight) * 100;
            barraProgreso.style.width = `${porcentaje}%`;
        }
    });

    // 6. Botón Flotante Volver Arriba en Esquina Inferior Derecha (Opción 3)
    const btnVolverArriba = document.getElementById('btnVolverArriba');
    if (btnVolverArriba) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btnVolverArriba.classList.add('visible');
            } else {
                btnVolverArriba.classList.remove('visible');
            }
        });

        btnVolverArriba.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
