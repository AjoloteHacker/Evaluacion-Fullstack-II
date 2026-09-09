//Querido Programador, este codigo fue creado mediante el uso excesivo de cafeina, yo y Dios
//y actualmente solo Dios sabe como funciona este codigo asi que te deseo suerte entendiendo el como funciona
//Horas despericiadas = 23
"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const botonesFiltro = document.querySelectorAll('.filtro-btn');
    const tarjetasProyecto = document.querySelectorAll('.tarjeta-proyecto');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            if (boton.classList.contains('activo')) return;

            botonesFiltro.forEach(b => b.classList.remove('activo'));
            boton.classList.add('activo');

            const categoriaFiltro = boton.getAttribute('data-filtro');

            tarjetasProyecto.forEach(tarjeta => {
                tarjeta.classList.add('filtrado-ocultar');
                tarjeta.classList.remove('filtrado-mostrar');
            });

            setTimeout(() => {
                let indiceVisible = 0;

                tarjetasProyecto.forEach(tarjeta => {
                    const categoriaTarjeta = tarjeta.getAttribute('data-categoria');

                    if (categoriaFiltro === 'todos' || categoriaTarjeta === categoriaFiltro) {
                        tarjeta.style.display = 'flex';
                        tarjeta.classList.remove('filtrado-ocultar');
                        
                        // Aplicar animación con desfase progresivo por tarjeta
                        tarjeta.style.animationDelay = `${indiceVisible * 0.07}s`;
                        tarjeta.classList.add('filtrado-mostrar');
                        indiceVisible++;
                    } else {
                        tarjeta.style.display = 'none';
                        tarjeta.classList.remove('filtrado-ocultar');
                        tarjeta.classList.remove('filtrado-mostrar');
                    }
                });
            }, 220);
        });
    });

    const formulario = document.querySelector("#formularioContacto");
    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const mensaje = document.querySelector("#mensaje");
    const resultado = document.querySelector("#resultado");

    const URL_APPS_SCRIPT = "";

    function mostrarError(campo, texto){
      campo.classList.add("invalido");
      const error = document.querySelector(
        `#error${campo.id.charAt(0).toUpperCase()+ campo.id.slice(1)}`
      );
      if (error) {
        error.textContent = texto;
      }
    }

    function limpiarError(campo){
      campo.classList.remove("invalido");
      const error = document.querySelector(
        `#error${campo.id.charAt(0).toUpperCase()+ campo.id.slice(1)}`
      );
      if (error) {
        error.textContent = "";
      }
    }

    if (formulario) {
      formulario.addEventListener("submit", function(evento){
        const nombreValor = nombre ? nombre.value.trim() : "";
        const emailValor = email ? email.value.trim() : "";
        const mensajeValor = mensaje ? mensaje.value.trim() : "";

        let formularioValido = true;

        if(nombreValor.length < 3){
          mostrarError(nombre, "Ingresa al menos un nombre con 3 caracteres o más.");
          formularioValido = false;
        }else{
          limpiarError(nombre);
        }

        if(mensajeValor.length < 10){
          mostrarError(mensaje, "Ingresa un mensaje con al menos 10 caracteres o más.");
          formularioValido = false;
        }else{
          limpiarError(mensaje);
        }

        if(!formularioValido){
          evento.preventDefault();
          if (resultado) {
            resultado.classList.remove("visible");
          }
          return;
        }

        evento.preventDefault();

        const botonEnviar = formulario.querySelector("button[type='submit']");
        if (botonEnviar) {
          botonEnviar.disabled = true;
          botonEnviar.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        }

        if (resultado) {
          resultado.textContent = "Enviando mensaje, por favor espera...";
          resultado.classList.remove("error");
          resultado.classList.add("visible");
        }

        const datos = {
          nombre: nombreValor,
          email: emailValor,
          mensaje: mensajeValor
        };

        fetch(URL_APPS_SCRIPT, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify(datos)
        })
        .then(() => {
          if (resultado) {
            resultado.textContent = "¡Mensaje enviado con éxito! Te responderé pronto.";
            resultado.classList.remove("error");
            resultado.classList.add("visible");
          }
          formulario.reset();
        })
        .catch(error => {
          console.error("Error al enviar el formulario:", error);
          if (resultado) {
            resultado.textContent = "Hubo un error al enviar el mensaje. Inténtalo nuevamente.";
            resultado.classList.add("error");
            resultado.classList.add("visible");
          }
        })
        .finally(() => {
          if (botonEnviar) {
            botonEnviar.disabled = false;
            botonEnviar.textContent = "Enviar Mensaje";
          }
        });
      });
    }

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

    const barraProgreso = document.getElementById('barraProgreso');
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0 && barraProgreso) {
            const porcentaje = (window.scrollY / totalHeight) * 100;
            barraProgreso.style.width = `${porcentaje}%`;
        }
    });

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
