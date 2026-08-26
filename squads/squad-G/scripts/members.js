const socialImages = [
  'styles/img/instagrampng.png',
  'styles/img/linkedinpng.png',
  'styles/img/mailpng.png'
];

const members = [
  {
    id: 'amanda',
    name: 'Amanda',
    fullName: 'Amanda Gabrielly',
    image: 'styles/img/amanda.JPG'
  },
  {
    id: 'aylton',
    name: 'Aylton',
    fullName: 'Aylton Oliveira',
    image: 'styles/img/aylton.jpeg'
  },
  {
    id: 'diogenes',
    name: 'Diógenes',
    fullName: 'Diógenes José',
    image: 'styles/img/diogenes.jpeg'
  },
  {
    id: 'guilherme',
    name: 'Guilherme',
    fullName: 'Guilherme Henrique',
    image: 'styles/img/guilherme.jpeg'
  }
];

/**
 * Cria os cartões de membros e os adiciona ao container informado.
 *
 * @param {Array<Object>} members Lista de membros com nome e imagem disponíveis.
 * @param {HTMLElement} container Elemento que receberá os cartões.
 * @returns {void} Não retorna valor; atualiza o DOM. Com lista vazia, limpa o container.
 */
function renderMembers(members, container) {
  if (!container) {
    return;
  }

  container.replaceChildren();

  if (!Array.isArray(members) || members.length === 0) {
    return;
  }

  members.forEach(member => {
    const card = document.createElement('div');
    card.className = 'fotos';

    const profileImage = document.createElement('img');
    profileImage.src = member.image;
    profileImage.alt = `Foto perfil ${member.name}`;
    card.append(profileImage);

    const name = document.createElement('h2');
    name.textContent = member.name;
    card.append(name);

    const socialIcons = document.createElement('div');
    socialIcons.className = 'contato-icones';

    const instagramIcon = document.createElement('img');
    instagramIcon.src = socialImages[0];
    instagramIcon.alt = 'Ícone de contato';
    socialIcons.append(instagramIcon);

    const linkedinIcon = document.createElement('img');
    linkedinIcon.src = socialImages[1];
    linkedinIcon.alt = 'Ícone de contato';
    socialIcons.append(linkedinIcon);

    const emailIcon = document.createElement('img');
    emailIcon.src = socialImages[2];
    emailIcon.alt = 'Ícone de contato';
    socialIcons.append(emailIcon);

    card.append(socialIcons);
    container.append(card);
  });
}

const membersContainer = document.querySelector('[data-members]');

if (membersContainer) {
  renderMembers(members, membersContainer);
}
