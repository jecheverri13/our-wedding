# Plan y prompt para Antigravity

## Objetivo

Ajustar exclusivamente la transición inicial de la invitación para que reproduzca con la mayor fidelidad posible el video de referencia ubicado en:

`C:\Users\JuniorEcheverri\OneDrive - CONSENSUS SAS\Escritorio\Video\Intro Invitación.mp4`

El video es la fuente visual de verdad. No se busca una animación de sobre genérica ni una interpretación libre del concepto. La apertura actual se parece en intención, pero no reproduce con precisión el ritmo, el orden, la escala, la cámara ni la sensación de la referencia.

## Análisis del video ya realizado

El archivo es un video vertical de aproximadamente `6.318 s`, con proporción `392 x 850` (aproximadamente 9:19.5). Las interfaces de red social visibles en la grabación son parte de la captura y deben ignorarse: no deben formar parte de la aplicación.

### Secuencia visual observada

| Tiempo aproximado | Estado que debe reproducirse |
| --- | --- |
| `0.00-0.35 s` | Pantalla casi negra de entrada, con una aparición muy breve del contenido. No mostrar todavía la invitación principal. |
| `0.35-0.80 s` | Aparece un sobre vertical verde oliva/gris, de textura mate y relieve botánico dorado. Está cerrado, centrado y ocupa prácticamente todo el viewport móvil. |
| `0.80-2.00 s` | El sobre permanece cerrado o inicia una separación muy sutil. El sello central es dorado, grande, con forma de cera y una mariposa grabada. No hay texto de invitación visible. |
| `2.00-2.70 s` | Comienza la apertura física: las piezas del sobre se separan diagonalmente hacia arriba, abajo, izquierda y derecha. Se descubre el papel claro interior. El movimiento es orgánico y con profundidad, no un fade independiente de cuatro triángulos. |
| `2.50-3.20 s` | El sello se desplaza hacia la derecha y gira hasta quedar casi vertical, acompañando la solapa derecha. No desaparece de golpe ni se mueve hacia arriba. La mariposa deja de ser solo un grabado y aparece como elemento físico sobre el papel interior. |
| `3.00-3.80 s` | El interior ya ocupa casi todo el encuadre. La mariposa queda cerca del centro, con sombra suave debajo y aleteo delicado. Las solapas verdes todavía se alcanzan a ver en los bordes, especialmente arriba y abajo. |
| `3.60-4.70 s` | Las solapas terminan de salir del encuadre. La escena transiciona a un fondo de papel marfil claro mediante un acercamiento/expansión suave, no mediante un corte duro. El contenido tipográfico comienza a revelarse desenfocado. |
| `4.70-5.80 s` | Se lee progresivamente el texto centrado `YOU'RE` / `CORDIALLY` / `INVITED`, en mayúsculas finas de estilo editorial. La mariposa permanece arriba del texto, aproximadamente en el tercio superior. |
| `5.80-6.318 s` | Estado final estable: fondo marfil, mariposa arriba y texto completamente legible. La imagen no debe seguir haciendo zoom ni desaparecer antes de tiempo. |

### Rasgos visuales obligatorios

- El sobre de referencia es verde oliva/gris, no terracota ni marrón rojizo.
- Tiene relieve botánico fino en las cuatro zonas exteriores y un acabado de papelería física.
- El sello es circular/ondulado, dorado, grande y con una mariposa grabada; su trayectoria durante la apertura es hacia la derecha con giro.
- La tarjeta interior es clara, casi marfil, y ocupa el viewport después de abrirse.
- La mariposa final es grande, naturalista, translúcida y con sombra proyectada. No debe parecer un dibujo geométrico pequeño generado con dos formas CSS.
- El texto aparece después de abrir el sobre y se revela suavemente; no debe estar visible en el estado cerrado.
- La cámara se siente como un plano vertical centrado que se acerca al papel. No hay una tarjeta pequeña flotando dentro de una pantalla oscura.
- No agregar destellos, partículas, brillos pulsantes, mariposas volando hacia arriba ni efectos decorativos que no estén en esta descripción.

## Prompt para Antigravity

```text
Necesito que ajustes la transición inicial de esta aplicación React para que sea visualmente equivalente a la especificación analizada del video de referencia:

C:\Users\JuniorEcheverri\OneDrive - CONSENSUS SAS\Escritorio\Video\Intro Invitación.mp4

No necesitas abrir el video: ya fue analizado. Usa como especificación obligatoria la duración, la tabla temporal y los rasgos visuales descritos arriba. Si alguna decisión de implementación entra en conflicto con esa descripción, prevalece la descripción del video, no los comentarios actuales del código.

Después inspecciona la implementación actual, especialmente:

- src/components/EnvelopeScreen.jsx
- src/App.css
- src/App.jsx

La lógica actual usa las clases y estados relacionados con `isOpening`, `flap-open-*`, `card-zoom-in`, `seal-opening-anim` y `content-visible`. Reutiliza esa estructura si es compatible con el video, pero cambia la coreografía completa cuando sea necesario. La referencia visual tiene prioridad sobre los comentarios existentes en el código. En particular, revisa si el asset terracota actual y la mariposa geométrica CSS son incompatibles con el aspecto verde oliva, el sello grabado y la mariposa naturalista descritos arriba.

### Requisitos de implementación

- La transición debe comenzar únicamente al pulsar el sello o el control existente para abrir.
- La duración total de la coreografía debe ser aproximadamente `6.3 s`; no ocultes el overlay en `1.2 s` si eso impide ver la apertura completa.
- La secuencia debe conservar un estado final visible equivalente al último segundo del referente: papel marfil, mariposa arriba y texto editorial centrado.
- El clic debe quedar bloqueado durante la animación para evitar dobles ejecuciones.
- La secuencia debe tener una única línea temporal coherente. No uses duraciones arbitrarias independientes que produzcan desincronización.
- Coordina React y CSS para que el contenido principal aparezca exactamente cuando corresponde en el video.
- Conserva el comportamiento actual de `onOpenEnvelope`, el inicio del audio y la posibilidad de volver a abrir el sobre.
- Mantén el diseño responsive, especialmente en móvil y en pantallas con distintas relaciones de aspecto.
- Respeta `prefers-reduced-motion`: en ese caso ofrece una transición breve y funcional sin animaciones intensas.
- No cambies secciones de la invitación, textos, imágenes, tipografías ni estilos que no pertenezcan a la transición inicial.
- No introduzcas una librería de animación si CSS y React son suficientes.
- Evita depender de rutas absolutas del sistema para los assets de la aplicación. La ruta absoluta del video se usa únicamente como referencia local durante el análisis.
- No reemplaces una diferencia visual real con una explicación textual. Debes corregir el comportamiento en código.

### Criterios visuales de aceptación

La solución solo se considera terminada si, al comparar la aplicación y el video lado a lado:

- El primer estado coincide en composición y jerarquía visual.
- El movimiento ocurre en el mismo orden que en el video.
- Las solapas o piezas del sobre recorren la misma dirección y llegan a una posición equivalente.
- El sello desaparece, se desplaza o permanece exactamente según la referencia.
- La tarjeta o contenido interior tiene el mismo tipo de revelación: no sustituyas un desplazamiento por un simple fade, ni un zoom por una escala imperceptible.
- El ritmo general coincide: entrada, pausa, apertura y salida deben sentirse sincronizadas.
- No aparece un destello, mariposa, salto, parpadeo o pantalla intermedia que no exista en el video.
- No queda visible un overlay transparente bloqueando la página después de abrir.
- No hay scroll inesperado, salto de layout, contenido visible antes de tiempo ni parpadeo entre estados.
- El resultado funciona en móvil y escritorio sin deformar el sobre ni cortar elementos importantes.

### Flujo de trabajo obligatorio

1. Usa la tabla temporal y la descripción visual de este documento como contrato de implementación.
2. Identifica qué parte del código controla cada etapa.
3. Implementa el ajuste mínimo en `EnvelopeScreen.jsx` y/o `App.css`.
4. Ejecuta `npm run lint` y `npm run build`.
5. Levanta la aplicación con `npm run dev` o el comando disponible.
6. Prueba la apertura en móvil y escritorio. Verifica también volver a abrir el sobre.
7. Comprueba que el resultado respeta cada intervalo temporal, especialmente el desplazamiento del sello a la derecha, la mariposa sobre el papel y la aparición tardía del texto.
8. En la respuesta final reporta los archivos modificados, la duración final de la secuencia, las decisiones implementadas a partir de esta especificación y los comandos de validación ejecutados.

No cierres la tarea diciendo que la animación es “similar”. Debes comprobar la implementación contra esta especificación y corregir las diferencias de orden, color, escala, trayectoria o ritmo. No inventes una transición distinta.
```

## Alcance técnico sugerido

### Archivos permitidos

- `src/components/EnvelopeScreen.jsx`
- `src/App.css`
- `src/App.jsx`, solo si hace falta corregir el momento en que se muestra el contenido principal.

### Archivos que no deben tocarse sin necesidad

- Componentes internos de la invitación.
- Imágenes y assets existentes.
- Configuración de Vite, Docker o despliegue.
- Tipografías, textos y secciones posteriores a la apertura.

## Checklist de entrega

- [ ] Video analizado antes de editar.
- [ ] Secuencia temporal definida a partir del video.
- [ ] Apertura ejecutada una sola vez por interacción.
- [ ] Sobre, sello, tarjeta y contenido sincronizados.
- [ ] Sin efectos visuales inventados que no estén en la referencia.
- [ ] Responsive en móvil y escritorio.
- [ ] Soporte para `prefers-reduced-motion`.
- [ ] `npm run lint` ejecutado correctamente.
- [ ] `npm run build` ejecutado correctamente.
- [ ] Reapertura del sobre verificada.
- [ ] Comparación visual final realizada contra el video.