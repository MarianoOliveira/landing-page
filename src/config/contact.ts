export const contact = {
  email: "marianooliveiradasilva@gmail.com",
  phone: "+55 (21) 99393-7690",
  whatsapp: {
    number: '5521993937690',
    messages: {
      budget: 'Olá! Vim pelo site e gostaria de solicitar um orçamento.',
      info: 'Olá! Vim pelo site e gostaria de saber mais sobre seus serviços.',
      start: 'Olá! Vim pelo site e gostaria de iniciar um projeto com você.'
    }
  },
  social: {
    github: "https://github.com/MarianoOliveira",
    linkedin: "https://www.linkedin.com/in/mariano-oliveira-ba60b5204/",
    instagram: "https://instagram.com/mariano.eu"
  },
  address: {
    city: "Rio de Janeiro",
    state: "RJ",
    country: "Brasil"
  }
};

export const getWhatsAppLink = (message: keyof typeof contact.whatsapp.messages) => {
  const baseUrl = 'https://wa.me';
  const text = encodeURIComponent(contact.whatsapp.messages[message]);
  return `${baseUrl}/${contact.whatsapp.number}?text=${text}`;
};
