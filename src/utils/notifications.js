import Swal from "sweetalert2";

const baseConfig = {
  background: '#030712',
  color: '#fff',
  confirmButtonColor: '#6A64F1',
  customClass: {
    popup: 'swal-popup-custom'
  }
};

export const loadingMessage = () => {
  Swal.fire({
    title: 'Enviando mensaje...',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading(),
    ...baseConfig
  });
};

export const successMessage = (userName, userMail, formCurrent) => {
  Swal.fire({
    icon: 'success',
    title: '¡Mensaje enviado!',
    html: `
      <div style="text-align: left; line-height: 1.5;">
        <p>Gracias por contactarnos, <strong>${userName}</strong>.</p>
        <p>Nos pondremos en contacto con <strong>${userMail}</strong> pronto.</p>
      </div>
    `,
    confirmButtonText: 'Aceptar',
    timer: 6000,
    timerProgressBar: true,
    willClose: () => formCurrent.reset(),
    ...baseConfig
  });
};

export const errorMessage = (error = null, retryCallback = null) => {
  let htmlMessage = `
    <div style="text-align: left; line-height: 1.5;">
      <p>No pudimos enviar tu mensaje.</p>
      <p>Por favor intenta nuevamente o contáctame directamente a <strong>eliasdev1912@gmail.com</strong>.</p>
    </div>
  `;

  if (error) {
    console.error("Error detallado:", error);
    htmlMessage += `<p style="margin-top: 5px; font-size: 0.85rem; color: #ccc;">Detalle: ${error.message || error}</p>`;
  }

  Swal.fire({
    icon: 'error',
    title: 'Error inesperado',
    html: htmlMessage,
    confirmButtonText: retryCallback ? 'Reintentar' : 'Entendido',
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
    title: 'Atención',
    html: `<p style="text-align: left;">${text}</p>`,
    confirmButtonText: 'Aceptar',
    ...baseConfig
  });
};
