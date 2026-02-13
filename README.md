# README (resumen en párrafos)

Este portafolio se construyó como una página única en **HTML** para organizar el contenido profesional (presentación, perfil, habilidades, experticia y contacto) en secciones claras, conectadas mediante navegación por anclas. La estructura se definió con etiquetas semánticas (`header`, `nav`, `main`, `section`, `footer`) para que el contenido quedara ordenado y fácil de mantener.

El diseño visual se implementó con **CSS embebido** usando variables en `:root` para controlar la paleta (colores, sombras y gradientes) y así mantener consistencia en todo el sitio. Se aplicó un estilo moderno con tipografías de Google Fonts, secciones con tarjetas, bordes redondeados y efectos de sombra, además de un fondo con orbes de gradiente y una capa sutil de “grain” para dar textura.

La distribución se resolvió con **Flexbox y Grid**, permitiendo que el Hero, las tarjetas y las columnas de contenido se adapten bien a escritorio y móvil. Para asegurar el comportamiento responsive, se incluyeron media queries que reacomodan el layout, ajustan tamaños de texto y simplifican elementos (por ejemplo, ocultar el menú en pantallas pequeñas).

Para mejorar la experiencia, se agregó **JavaScript** ligero: se usan `IntersectionObserver` para animar la aparición de secciones al hacer scroll y para activar las barras de progreso de habilidades cuando entran en pantalla. También se programó el scroll suave al hacer clic en enlaces internos y se detecta la sección visible para marcar el enlace activo en la navegación, además de un efecto parallax simple en los orbes del fondo para dar profundidad.
