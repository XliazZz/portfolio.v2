import Swal from "sweetalert2";
import { successMessage, loadingMessage, errorMessage, warningMessage } from "./notifications.js";
import { sendEmailService } from "../api/emailService.js";

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
      user_phone: form.user_phone?.value.trim() || "",
      project_type: form.project_type?.value || "",
      budget: form.budget?.value || "",
      delivery_time: form.delivery_time?.value || "",
      message: form.message?.value.trim() || ""
    };

    if (formData.user_name.length < 3) {
      warningMessage("El nombre debe tener al menos 3 caracteres.");
      return;
    }

    if (formData.user_email.length <= 7 || !formData.user_email.includes("@")) {
      warningMessage("Por favor ingresa un email válido con más de 7 caracteres.");
      return;
    }

    if (formData.message.length < 25) {
      warningMessage("El mensaje debe contener al menos 25 caracteres.");
      return;
    }

    try {
      await loadingMessage();
      await sendEmailService(form, formData);
      Swal.close();
      await successMessage(formData.user_name, formData.user_email, form);
    } catch (error) {
      console.error("Error al enviar el email:", error);
      errorMessage(error, () => sendForm());
    }
  });
};
