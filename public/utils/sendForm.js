import Swal from "sweetalert2";
import { successMessage, loadingMessage, errorMessage, warningMessage, t } from "./notifications.js";
import { sendEmailService } from "../../src/api/emailService.js";

export const sendForm = () => {
  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("Formulario no encontrado");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      user_name: form.user_name?.value.trim() || "",
      user_email: form.user_email?.value.trim() || "",
      company: form.company?.value.trim() || "",
      message: form.message?.value.trim() || ""
    };

    if (formData.user_name.length < 3) {
      warningMessage(t("El nombre debe tener al menos 3 caracteres.", "Your name must be at least 3 characters long."));
      return;
    }

    if (formData.user_email.length <= 7 || !formData.user_email.includes("@")) {
      warningMessage(t("Por favor ingresa un email válido con más de 7 caracteres.", "Please enter a valid email longer than 7 characters."));
      return;
    }

    if (formData.message.length < 25) {
      warningMessage(t("El mensaje debe contener al menos 25 caracteres.", "Your message must be at least 25 characters long."));
      return;
    }

    try {
      await loadingMessage();
      await sendEmailService(form, formData);
      Swal.close();
      await successMessage(formData.user_name, formData.user_email, form);
    } catch (error) {
      console.error("Error al enviar el email:", error);
      errorMessage(error, () => form.requestSubmit());
    }
  });
};
