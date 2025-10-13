import emailjs from '@emailjs/browser';

export const sendEmailService = async (formElement, formData) => {
  const { user_name, user_email, project_type, budget = '', delivery_time, message } = formData;

  return emailjs.sendForm(
  import.meta.env.PUBLIC_SERVICEID,
  import.meta.env.PUBLIC_TEMPLATEID,
  formElement,
  import.meta.env.PUBLIC_KEY,
    {
      reply_to: user_email,
      from_name: user_name,
      user_name,
      user_email,
      project_type,
      budget,
      delivery_time: delivery_time,
      message,
    }
  );
};
