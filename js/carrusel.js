

// Carrusel universal para todas las secciones
(function() {
  // Detectar sección por el título del h1
  const h1 = document.querySelector('main h1, nav h1');
  if (!h1) return;
  // Unificar saltos de línea, espacios y <br> para detectar títulos en varias líneas
  let titulo = h1.innerText || h1.textContent;
  titulo = titulo.replace(/\s+/g, ' ').replace(/\s*\n\s*/g, ' ').replace(/<br\s*\/?>/gi, ' ').trim().toUpperCase();
  let imagenes = [];
  if (titulo === 'CEMETERIES') {
    imagenes = [
      "fotos_sueltas_varias/cementerio(s)/_MG_5361_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/_MG_5364_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/_MG_5367_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/_MG_5371_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/_MG_5378_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/_MG_5400_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/_MG_5403_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/_MG_5404_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/_MG_5412_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/_MG_5417_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/_MG_540523_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/7W9A7264_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/7W9A7265_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/7W9A7293_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/7W9A7298_resultado.webp",
      "fotos_sueltas_varias/cementerio(s)/7W9A7304_resultado.webp"
    ];
  } else if (titulo === 'TEXTURES') {
    imagenes = [
      "fotos_sueltas_varias/texturas/_MG_4490_resultado.webp",
      "fotos_sueltas_varias/texturas/_MG_4492_resultado.webp",
      "fotos_sueltas_varias/texturas/_MG_4493_resultado.webp",
      "fotos_sueltas_varias/texturas/_MG_4525_resultado.webp",
      "fotos_sueltas_varias/texturas/_MG_4715_resultado.webp"
    ];
  } else if (titulo === 'DATES') {
    imagenes = [
      "fotos_sueltas_varias/fechas/_MG_1044_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_1063_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_1496-2_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_1517_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_1518_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_1534bn_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_1540_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_1845_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_4819_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_4829_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_4830_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_5017_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_5033_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_5045_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_5068_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_5132_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_5135_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_5814-Edit_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_5867-Edit_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_7544-Enhanced-NR-Edit baja ig_resultado.webp",
      "fotos_sueltas_varias/fechas/_MG_8426_resultado.webp",
      "fotos_sueltas_varias/fechas/7W9A3456-Enhanced-NR-Edit baja ig_resultado.webp",
      "fotos_sueltas_varias/fechas/7W9A9273-Mejorado-NR_resultado.webp",
      "fotos_sueltas_varias/fechas/20240728225607__MG_0045-2-Edit_resultado.webp",
      "fotos_sueltas_varias/fechas/Copia de 7W9A9275-Mejorado-NR_resultado.webp",
      "fotos_sueltas_varias/fechas/impulso fm7_resultado.webp"
    ];
  } else if (titulo === 'FLOWERS') {
    imagenes = [
      "fotos_sueltas_varias/flores/_MG_1325_resultado.webp",
      "fotos_sueltas_varias/flores/7W9A7164-Mejorado-NR_resultado.webp",
      "fotos_sueltas_varias/flores/7W9A7168-Mejorado-NR_resultado.webp",
      "fotos_sueltas_varias/flores/7W9A7186-Mejorado-NR_resultado.webp",
      "fotos_sueltas_varias/flores/7W9A7188-Mejorado-NR_resultado.webp",
      "fotos_sueltas_varias/flores/7W9A9932_resultado.webp",
      "fotos_sueltas_varias/flores/f1122_resultado.webp",
      "fotos_sueltas_varias/flores/f1123_resultado.webp",
      "fotos_sueltas_varias/flores/f1124_resultado.webp",
      "fotos_sueltas_varias/flores/f1125_resultado.webp"
    ];
  } else if (titulo === 'PROD.' || titulo === 'PROD') {
    imagenes = [
      "fotos_sueltas_varias/producción/_MG_4358_resultado.webp",
      "fotos_sueltas_varias/producción/_MG_4361_resultado.webp",
      "fotos_sueltas_varias/producción/_MG_4376_resultado.webp",
      "fotos_sueltas_varias/producción/_MG_4381_resultado.webp",
      "fotos_sueltas_varias/producción/_MG_4389_resultado.webp",
      "fotos_sueltas_varias/producción/_MG_4392_resultado.webp",
      "fotos_sueltas_varias/producción/_MG_4400_resultado.webp",
      "fotos_sueltas_varias/producción/_MG_4407_resultado.webp",
      "fotos_sueltas_varias/producción/_MG_4408_resultado.webp"
    ];
  } else if (titulo.includes('THE PROCESS')) {
    imagenes = [
      "fotos_sueltas_varias/el_proceso/_MG_4553_resultado.webp",
      "fotos_sueltas_varias/el_proceso/_MG_4557_resultado.webp",
      "fotos_sueltas_varias/el_proceso/agrelo_agrelo_finalFCA_1_resultado.webp",
      "fotos_sueltas_varias/el_proceso/agrelo_agrelo_finalFCA_2_resultado.webp",
      "fotos_sueltas_varias/el_proceso/agrelo_emma_finalFCA_3_resultado.webp",
      "fotos_sueltas_varias/el_proceso/agrelo_emma_finalFCA_4_resultado.webp"
    ];
  }
  if (!imagenes.length) return;
  let actual = 0;
  window.mover = function(dir) {
    const prev = actual;
    actual = (actual + dir + imagenes.length) % imagenes.length;
    mostrarImagen(actual, dir);
  };
  window.seleccionar = function(idx) {
    const dir = idx > actual ? 1 : -1;
    actual = idx;
    mostrarImagen(actual, dir);
  };
  function mostrarImagen(idx, dir = 0) {
    const img = document.getElementById('carrusel-imagen');
    if (!img) return;
    const isMobile = window.innerWidth <= 700;
    if (isMobile && dir !== 0) {
      const outClass = dir > 0 ? 'slide-left' : 'slide-right';
      const inClass = 'slide-in';
      img.classList.remove('slide-in');
      img.classList.add(outClass);
      setTimeout(() => {
        img.classList.remove(outClass);
        img.src = imagenes[idx];
        img.classList.add(inClass);
        setTimeout(() => img.classList.remove(inClass), 350);
      }, 350);
    } else {
      img.src = imagenes[idx];
    }
    document.querySelectorAll('.miniaturas-carrusel img').forEach((el, i) => {
      if (i === idx) {
        el.classList.add('selected');
      } else {
        el.classList.remove('selected');
      }
    });
  }

  // Permite deslizar un elemento y llama a los callbacks para izquierda/derecha
  function enableSwipe(element, onLeft, onRight) {
    let startX = null;
    let moved = false;
    element.addEventListener('touchstart', function(e) {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX;
        moved = false;
      }
    });
    element.addEventListener('touchmove', function(e) {
      moved = true;
    });
    element.addEventListener('touchend', function(e) {
      if (!moved || startX === null) return;
      const endX = e.changedTouches[0].clientX;
      const diff = endX - startX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          onLeft && onLeft();
        } else {
          onRight && onRight();
        }
      }
      startX = null;
      moved = false;
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('carrusel-imagen')) {
      mostrarImagen(actual);
      // Swipe universal reutilizable
      const carrusel = document.getElementById('carrusel-imagen');
      if (carrusel) {
        enableSwipe(carrusel, () => window.mover(1), () => window.mover(-1));
      }
    }
  });
})();
