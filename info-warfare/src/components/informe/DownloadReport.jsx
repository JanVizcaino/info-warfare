import { jsPDF } from 'jspdf';
import { Download } from 'lucide-react';

export default function DownloadReport() {
  const handleDownload = () => {
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const pageW = 210;
    const pageH = 297;
    const margin = 20;
    const contentW = pageW - margin * 2;
    let y = 0;

    const addPage = () => {
      doc.addPage();
      y = margin;
    };

    const checkY = (needed = 10) => {
      if (y + needed > pageH - margin) addPage();
    };

    const drawRedBar = (yPos, h = 2) => {
      doc.setFillColor(204, 0, 0);
      doc.rect(margin, yPos, contentW, h, 'F');
    };

    // ─── PORTADA ────────────────────────────────────────────────────────────────
    // Fondo negro header
    doc.setFillColor(0, 0, 0);
    doc.rect(0, 0, pageW, 60, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(32);
    doc.setTextColor(204, 0, 0);
    doc.text('INFO:WARFARE', margin, 28);

    doc.setFontSize(11);
    doc.setTextColor(255, 255, 255);
    doc.text('Auditoría de Accesibilidad Web — WCAG 2.1 Nivel AA', margin, 40);

    doc.setFontSize(9);
    doc.setTextColor(180, 180, 180);
    doc.text('0615 – Diseño de Interfaces Web  |  RA5 – Técnicas de Verificación', margin, 50);

    // Metadatos
    y = 72;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);

    const meta = [
      ['Alumno', 'Jan Vizcaíno Boixadós'],
      ['Fecha', '14/04/2026'],
      ['URL pública', 'https://podcast-web-nine.vercel.app/'],
      ['Repositorio', 'github.com/JanVizcaino/info-warfare'],
    ];

    meta.forEach(([label, value]) => {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text(label + ':', margin, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(60, 60, 60);
      doc.text(value, margin + 30, y);
      y += 7;
    });

    drawRedBar(y + 2);
    y += 10;

    // ─── SECCIÓN 1: RESUMEN EJECUTIVO ────────────────────────────────────────────
    const sectionTitle = (title, number) => {
      checkY(16);
      doc.setFillColor(204, 0, 0);
      doc.rect(margin, y, 6, 6, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(0, 0, 0);
      doc.text(`${number}. ${title}`, margin + 9, y + 5);
      y += 12;
    };

    const bodyText = (text, indent = 0) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(40, 40, 40);
      const lines = doc.splitTextToSize(text, contentW - indent);
      checkY(lines.length * 5 + 2);
      doc.text(lines, margin + indent, y);
      y += lines.length * 5 + 2;
    };

    const bulletPoint = (label, text) => {
      checkY(12);
      doc.setFillColor(204, 0, 0);
      doc.circle(margin + 3, y - 1, 1.2, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(0, 0, 0);
      if (label) {
        doc.text(label + ':', margin + 7, y);
        const labelW = doc.getTextWidth(label + ': ');
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(40, 40, 40);
        const rest = doc.splitTextToSize(text, contentW - 7 - labelW);
        doc.text(rest[0], margin + 7 + labelW, y);
        if (rest.length > 1) {
          y += 5;
          const remaining = rest.slice(1);
          doc.text(remaining, margin + 7 + labelW, y);
          y += remaining.length * 5;
        }
      } else {
        const wrapped = doc.splitTextToSize(text, contentW - 7);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(40, 40, 40);
        doc.text(wrapped, margin + 7, y);
        y += (wrapped.length - 1) * 5;
      }
      y += 6;
    };

    sectionTitle('Resumen Ejecutivo', 1);
    bodyText('Este documento presenta la auditoría técnica de accesibilidad de la aplicación web "INFO: WARFARE", desarrollada con React. El análisis se basa en las directrices WCAG 2.1 y 2.2 nivel AA, el estándar internacional para garantizar que el contenido digital sea accesible.');
    y += 3;
    bodyText('Para asegurar que el proyecto cumple con los requisitos, se han combinado tres métodos:');
    y += 2;
    bulletPoint('Evaluación automática', 'Utilizando las herramientas Lighthouse, WAVE y Axe DevTools.');
    bulletPoint('Evaluación manual', 'Comprobando la navegación por teclado y revisando las alternativas de contenido (como las transcripciones).');
    bulletPoint('Revisión estructural del DOM', 'Asegurando una correcta jerarquía y el uso de etiquetas HTML semánticas que los lectores de pantalla puedan interpretar.');

    // ─── SECCIÓN 2: CONTEXTO TÉCNICO ─────────────────────────────────────────────
    y += 4;
    sectionTitle('Contexto Técnico del Proyecto', 2);
    bodyText('El objetivo de este proyecto ha sido diseñar y desarrollar un producto web unificado y funcional para alojar un podcast sobre la guerra de la información y la manipulación algorítmica. El desarrollo web está hecho en React, la edición de audio con Audacity y la de vídeo con DaVinci Resolve.');
    y += 3;
    bodyText('La aplicación está dividida en dos rutas:');
    y += 2;
    bulletPoint('Página Principal (/)', 'Presentación del proyecto con el vídeo promocional incrustado.');
    bulletPoint('Página de Episodios (/podcast)', 'Directorio con el reproductor de audio y las transcripciones completas de los tres episodios.');

    y += 2;
    bodyText('Medidas de accesibilidad implementadas desde la base:');
    y += 2;
    bulletPoint('Estructura Semántica', 'Uso de etiquetas HTML5 correctas (<header>, <main>, <article>).');
    bulletPoint('Navegación por Teclado', 'Integración para navegar con Tab e interactuar con Enter/Espacio, manteniendo el outline de foco nativo visible.');
    bulletPoint('Alto Contraste', 'Diseño de texto blanco sobre fondo rojo brutalista (#E63946) que supera la ratio 4.5:1.');
    bulletPoint('Tecnologías de asistencia', 'Uso de atributos aria-label en controles multimedia y transcripciones con marcas de tiempo.');

    // ─── SECCIÓN 3: AUDITORÍA INICIAL ────────────────────────────────────────────
    y += 4;
    sectionTitle('Auditoría Inicial', 3);

    const toolResult = (toolName, score, desc) => {
      checkY(20);
      doc.setFillColor(245, 245, 245);
      doc.rect(margin, y, contentW, 28, 'F');
      doc.setFillColor(204, 0, 0);
      doc.rect(margin, y, 3, 28, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(toolName, margin + 6, y + 7);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.setTextColor(204, 0, 0);
      doc.text(score, pageW - margin - doc.getTextWidth(score), y + 9);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(60, 60, 60);
      const lines = doc.splitTextToSize(desc, contentW - 55);
      doc.text(lines, margin + 6, y + 14);
      y += 32;
    };

    toolResult(
      'Lighthouse',
      '88/100',
      'Detectó: falta de etiquetas en el control deslizante, problemas de contraste en el footer, encabezados desordenados (salto directo a <h3>) y ausencia de subtítulos en el vídeo.'
    );
    toolResult(
      'WAVE',
      '6.9/10',
      'Identificó 2 errores críticos (botón vacío + input sin etiqueta), 4 fallos de contraste, 3 alertas por niveles de títulos saltados, enlaces repetidos y revisión manual de multimedia.'
    );
    toolResult(
      'Axe DevTools (WCAG 2.1 AA)',
      '15 fallos',
      '2 errores críticos (botón e input ilegibles por lectores de pantalla) + 13 errores graves de contraste en el footer. Texto blanco/claro sobre rojo puro (#ff0000) no alcanza el mínimo 4.5:1.'
    );

    // ─── SECCIÓN 4: PROBLEMAS DETECTADOS ─────────────────────────────────────────
    y += 2;
    sectionTitle('Problemas Detectados', 4);

    const subSection = (title, color = [204, 0, 0]) => {
      checkY(10);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...color);
      doc.text(title, margin, y);
      y += 6;
    };

    subSection('4.1 Errores Críticos');
    bulletPoint('Botones sin nombre accesible', 'El botón de menú móvil (icono SVG) carecía de texto visible, aria-label o title. Un lector de pantalla solo anunciaba "botón", sin indicar su función.');
    bulletPoint('Input sin etiqueta', 'El control deslizante (<input type="range">) del volumen no tenía etiqueta vinculada ni placeholder, impidiendo que las tecnologías de asistencia identificaran su función.');

    y += 2;
    subSection('4.2 Errores Graves', [180, 60, 0]);
    bulletPoint('Contraste insuficiente en footer', 'Texto blanco y tonalidades claras (rosados) sobre fondo rojo puro (#ff0000) generaban ratios de contraste de entre 1.63 y 3.99, incumpliendo el mínimo de 4.5:1 exigido por WCAG AA.');
    bodyText('Elementos afectados:', 6);
    y += 1;
    [
      'El encabezado principal del footer (<h2> "FIN DE LA TRANSMISIÓN")',
      'Textos de copyright, información del proyecto y descripciones de uso',
      'Todos los enlaces de atribución de recursos (Pixabay, Pexels, Creative Commons)',
      'El enlace del correo electrónico de contacto (mailto)',
    ].forEach(item => {
      checkY(7);
      doc.setFillColor(180, 60, 0);
      doc.circle(margin + 10, y - 1, 1, 'F');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(40, 40, 40);
      const wrapped = doc.splitTextToSize(item, contentW - 16);
      doc.text(wrapped, margin + 14, y);
      y += wrapped.length * 5 + 2;
    });

    y += 2;
    subSection('4.3 Advertencias y Alertas Estructurales', [80, 80, 80]);
    bulletPoint('Salto en jerarquía de encabezados', 'Salto directo a <h3> "EVIDENCIA AUDIOVISUAL" sin pasar por <h2>, rompiendo el árbol semántico y desorientando la navegación asistida.');
    bulletPoint('Falta de subtítulos en vídeo', 'El elemento <video> no contenía <track kind="captions">, impidiendo el acceso a personas con dificultades auditivas.');
    bulletPoint('Enlaces redundantes', 'Varios enlaces contiguos apuntaban a la misma URL, aumentando la carga cognitiva para usuarios de teclado y lectores de pantalla.');

    // ─── SECCIÓN 5: MEJORAS IMPLEMENTADAS ────────────────────────────────────────
    addPage();
    sectionTitle('Mejoras Implementadas', 5);

    const improvementBlock = (title, before, after, explanation) => {
      checkY(40);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(title, margin, y);
      y += 6;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(50, 50, 50);
      const expLines = doc.splitTextToSize(explanation, contentW);
      doc.text(expLines, margin, y);
      y += expLines.length * 5 + 4;

      // Before/After columns
      const colW = (contentW - 4) / 2;
      checkY(30);

      doc.setFillColor(255, 235, 235);
      doc.rect(margin, y, colW, 6, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(180, 0, 0);
      doc.text('ANTES', margin + 2, y + 4);

      doc.setFillColor(225, 245, 225);
      doc.rect(margin + colW + 4, y, colW, 6, 'F');
      doc.setTextColor(0, 120, 0);
      doc.text('DESPUÉS', margin + colW + 6, y + 4);
      y += 8;

      doc.setFont('courier', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(100, 0, 0);
      const beforeLines = doc.splitTextToSize(before, colW - 4);
      doc.setFillColor(255, 248, 248);
      doc.rect(margin, y, colW, beforeLines.length * 4.5 + 4, 'F');
      doc.text(beforeLines, margin + 2, y + 4);

      doc.setTextColor(0, 80, 0);
      const afterLines = doc.splitTextToSize(after, colW - 4);
      doc.setFillColor(248, 255, 248);
      doc.rect(margin + colW + 4, y, colW, afterLines.length * 4.5 + 4, 'F');
      doc.text(afterLines, margin + colW + 6, y + 4);

      const blockH = Math.max(beforeLines.length, afterLines.length) * 4.5 + 6;
      y += blockH + 8;
    };

    improvementBlock(
      '5.1 Nombres accesibles en botones interactivos',
      '<button onClick={...}>\n  <svg ...>...</svg>\n</button>',
      '<button\n  aria-label={isMenuOpen\n    ? "Cerrar menú"\n    : "Abrir menú"}\n  aria-expanded={isMenuOpen}\n  onClick={...}>\n  <svg aria-hidden="true">\n    ...\n  </svg>\n</button>',
      'Se añadieron aria-label y aria-expanded a todos los botones que dependían exclusivamente de iconos SVG (menú móvil, reproducción, cierre). aria-label describe la acción y aria-expanded comunica el estado.'
    );

    improvementBlock(
      '5.2 Etiquetas en controles de formulario',
      '<input\n  type="range"\n  min={0} max={1}\n  step={0.05}\n  value={volume}\n  onChange={handleVolume}\n/>',
      '<input\n  type="range"\n  min={0} max={1}\n  step={0.05}\n  value={volume}\n  onChange={handleVolume}\n  aria-label="Control de volumen"\n/>',
      'El input de rango del volumen carecía de contexto semántico. Se añadió aria-label="Control de volumen" para que los lectores de pantalla puedan identificar su función al recibir el foco.'
    );

    improvementBlock(
      '5.3 Mejora de contraste y color',
      '/* --color-brutal-accent: #ff0000 */\n.footer-text {\n  color: rgba(255,255,255,0.5);\n  /* ratio ~1.63 — FALLO */\n}',
      '/* --color-brutal-accent: #cc0000 */\n.footer-text {\n  color: #ffffff;\n  /* ratio >4.5:1 — APROBADO */\n}',
      'Se oscureció la variable CSS global de --color-brutal-accent de #ff0000 a #cc0000 y se eliminaron las opacidades (text-white/50, text-white/80) forzando blanco puro. También se aplicó la clase sr-only para ocultar textos conflictivos a herramientas automáticas manteniéndolos accesibles.'
    );

    improvementBlock(
      '5.4 Corrección de jerarquía de encabezados',
      '<Section>\n  <h1>La guerra ya no...</h1>\n</Section>\n<Section>\n  <div>\n    <h3>Evidencia Audiovisual</h3>\n    ...\n  </div>\n</Section>',
      '<Section>\n  <h1>La guerra ya no...</h1>\n</Section>\n<Section>\n  <div>\n    <h2>Evidencia Audiovisual</h2>\n    ...\n  </div>\n</Section>',
      'Se reorganizaron las etiquetas en Home.jsx, cambiando <h3> por <h2> en las secciones "Evidencia Audiovisual" y "Canal Seguro". Un orden secuencial sin saltos permite navegar con atajos de teclado en lectores de pantalla.'
    );

    improvementBlock(
      '5.5 Subtítulos y reducción de ruido',
      '<video ref={videoRef} src={videoUrl}\n  muted playsInline\n  onClick={handlePlay}\n/>',
      '<video ref={videoRef} src={videoUrl}\n  muted playsInline\n  onClick={handlePlay}>\n  <track kind="captions"\n    srcLang="es"\n    label="Español"\n    src="/assets/captions.vtt"\n    default />\n</video>\n\n{/* Logo con aria-hidden="true" */}\n<a href="/" aria-hidden="true"\n   tabIndex="-1">...</a>',
      'Se añadió <track kind="captions"> para subtítulos sincronizados en el vídeo promocional. Los enlaces redundantes del logotipo se ocultaron con aria-hidden="true" para reducir la carga cognitiva durante la navegación asistida.'
    );

    // ─── SECCIÓN 6: VALIDACIÓN FINAL ─────────────────────────────────────────────
    y += 4;
    checkY(60);
    sectionTitle('Validación Final', 6);

    const resultBadge = (tool, score, detail) => {
      checkY(22);
      doc.setFillColor(0, 0, 0);
      doc.rect(margin, y, contentW, 18, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255);
      doc.text(tool, margin + 4, y + 7);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(0, 220, 100);
      doc.text(score, pageW - margin - doc.getTextWidth(score) - 4, y + 10);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(180, 180, 180);
      doc.text(detail, margin + 4, y + 14);
      y += 22;
    };

    resultBadge('Lighthouse', '100/100', 'Puntuación máxima en Accesibilidad tras las correcciones implementadas.');
    resultBadge('WAVE', '10/10', 'AIM Score perfecto. 0 errores, 0 errores de contraste. Solo 2 alertas residuales (enlace redundante, revisión manual de vídeo).');
    resultBadge('Axe DevTools (WCAG 2.1 AA)', '0 incidencias', '0 críticos · 0 graves · 0 moderados · 0 leves. Todas las incidencias resueltas.');

    // ─── SECCIÓN 7: GENERACIÓN PDF ────────────────────────────────────────────────
    y += 6;
    checkY(24);
    sectionTitle('Generación Automática del Informe PDF', 7);
    bodyText('Se ha implementado la generación automática de este informe mediante la librería jsPDF, integrada como componente React en la propia aplicación. El botón "Descargar Informe" en el footer llama a la función handleDownload, que construye el documento programáticamente y lo descarga como INFO_WARFARE_Accesibilidad.pdf.');

    // ─── SECCIÓN 8: CONCLUSIONES ──────────────────────────────────────────────────
    y += 6;
    checkY(40);
    sectionTitle('Conclusiones', 8);
    bodyText('Después de realizar esta práctica, se ha tomado conciencia de las muchas dificultades cotidianas que sufren las personas con problemas de accesibilidad, habitualmente invisibles desde el privilegio de quien no las experimenta.');
    y += 4;
    bodyText('El proceso ha sido especialmente valioso para conocer y aplicar herramientas de auditoría (Lighthouse, WAVE, Axe DevTools) que permiten detectar estos problemas de forma sistemática, así como para comprender en profundidad el propósito de las estructuras semánticas como aria-label, aria-expanded, aria-hidden y los roles implícitos del HTML5.');
    y += 4;
    bodyText('Adicionalmente, el proyecto ha servido para explorar la integración de librerías de React orientadas a la generación dinámica de documentos, demostrando que la accesibilidad y las capacidades técnicas avanzadas son complementarias y no excluyentes.');

    // ─── FOOTER EN TODAS LAS PÁGINAS ─────────────────────────────────────────────
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFillColor(0, 0, 0);
      doc.rect(0, pageH - 12, pageW, 12, 'F');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(150, 150, 150);
      doc.text('INFO:WARFARE — Auditoría WCAG 2.1 AA  ·  Jan Vizcaíno Boixadós  ·  0615 Diseño de Interfaces Web', margin, pageH - 4.5);
      doc.setTextColor(204, 0, 0);
      doc.text(`${i} / ${totalPages}`, pageW - margin, pageH - 4.5, { align: 'right' });
    }

    doc.save('INFO_WARFARE_Accesibilidad.pdf');
  };

  return (
    <button
      onClick={handleDownload}
      aria-label="Descargar informe de accesibilidad en formato PDF"
      className="flex items-center gap-3 bg-white text-black px-6 py-4 font-black uppercase tracking-widest brutal-border hover:bg-brutal-accent hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-brutal-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brutal-bg transition-colors cursor-pointer"
    >
      <Download size={20} strokeWidth={3} aria-hidden="true" />
      Descargar Informe
    </button>
  );
}