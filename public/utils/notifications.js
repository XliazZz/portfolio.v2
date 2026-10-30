import Swal from "sweetalert2";

// Copy for the active page language (the i18n script in Layout sets <html lang>).
export const t = (es, en) => (document.documentElement.lang === "en" ? en : es);

// Visitor input ends up in Swal's html, so escape it.
const esc = (value) => String(value).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

const baseConfig = {
  background: '#1f1f24',
  color: '#e4e1e8',
  confirmButtonColor: '#6d3bd7',
  customClass: {
    popup: 'swal-popup-custom'
  }
};

export const loadingMessage = () => {
  Swal.fire({
    title: t('Enviando mensaje...', 'Sending message...'),
    allowOutsideClick: false,
    ...baseConfig
  });
  // Synchronous on purpose: in didOpen it ran after the open animation and, when sending failed instantly,
  // landed on the error popup instead, hiding its button behind an endless spinner.
  Swal.showLoading();
};

export const successMessage = (userName, userMail, formCurrent) => {
  Swal.fire({
    icon: 'success',
    title: t('¡Mensaje enviado!', 'Message sent!'),
    html: `
      <div style="text-align: left; line-height: 1.5;">
        <p>${t('Gracias por tu mensaje', 'Thanks for your message')}, <strong>${esc(userName)}</strong>.</p>
        <p>${t('Te voy a responder a', "I'll get back to you at")} <strong>${esc(userMail)}</strong> ${t('a la brevedad', 'shortly')}.</p>
      </div>
    `,
    confirmButtonText: t('Aceptar', 'OK'),
    timer: 6000,
    timerProgressBar: true,
    willClose: () => formCurrent.reset(),
    ...baseConfig
  });
};

export const errorMessage = (error = null, retryCallback = null) => {
  let htmlMessage = `
    <div style="text-align: left; line-height: 1.5;">
      <p>${t('No pudimos enviar tu mensaje.', "Your message couldn't be sent.")}</p>
      <p>${t('Por favor intenta nuevamente o contáctame directamente a', 'Please try again or email me directly at')} <strong>eliasdev1912@gmail.com</strong>.</p>
    </div>
  `;

  if (error) {
    console.error("Error detallado:", error);
    htmlMessage += `<p style="margin-top: 5px; font-size: 0.85rem; color: #ccc;">${t('Detalle', 'Details')}: ${esc(error.message || error)}</p>`;
  }

  Swal.fire({
    icon: 'error',
    title: t('Error inesperado', 'Unexpected error'),
    html: htmlMessage,
    confirmButtonText: retryCallback ? t('Reintentar', 'Retry') : t('Entendido', 'Got it'),
    ...baseConfig
  }).then((result) => {
    if (result.isConfirmed && typeof retryCallback === "function") {
      retryCallback();
    }
  });
};

export const warningMessage = (text) => {
  Swal.fire({
    icon: 'warning',
    title: t('Atención', 'Heads up'),
    html: `<p style="text-align: left;">${text}</p>`,
    confirmButtonText: t('Aceptar', 'OK'),
    ...baseConfig
  });
};
