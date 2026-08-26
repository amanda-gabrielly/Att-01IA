const members = [
  {
    id: 'daniel',
    homeName: 'Daniel',
    homeRole: 'Desenvolvedor Front-end',
    aboutName: 'Daniel Augusto',
    aboutRole: 'Front-end Lead',
    image: 'styles/membro1.jpeg',
    imageAlt: 'Foto do Desenvolvedor Front-end.'
  },
  {
    id: 'edson',
    homeName: 'Edson',
    homeRole: 'Desenvolvedor Back-end',
    aboutName: 'Membro 2',
    aboutRole: 'Back-end Developer',
    image: 'styles/membro2.jpeg',
    imageAlt: 'Foto do Desenvolvedor Back-end.'
  },
  {
    id: 'felipe',
    homeName: 'Felipe',
    homeRole: 'Designer UI/UX',
    aboutName: 'Membro 3',
    aboutRole: 'QA Engineer',
    image: 'styles/membro3.jpeg',
    imageAlt: 'Foto do Especialista em QA.'
  },
  {
    id: 'elisson',
    homeName: 'Elisson',
    homeRole: 'Gerente de Projetos',
    aboutName: 'Membro 4',
    aboutRole: 'UI/UX Designer',
    image: 'styles/membro4.jpeg',
    imageAlt: 'Foto do Designer/UX.'
  }
];

/**
 * Gera cartões de membros para a Home ou para a seção Sobre.
 *
 * @param {Array<Object>} members Lista de membros com os dados de cada visualização.
 * @param {HTMLElement} container Elemento que receberá os cartões.
 * @returns {void} Limpa o container e adiciona um cartão por membro; sem membros ou container, não faz nada.
 * @complexity Tempo O(n), pois cada membro é processado uma vez; espaço O(n), pelos elementos gerados.
 */
function renderMembers(members, container) {
  if (!container) {
    return;
  }

  container.replaceChildren();

  if (!Array.isArray(members) || members.length === 0) {
    return;
  }

  const isAboutView = container.dataset.view === 'about';

  members.forEach(member => {
    const card = document.createElement('article');
    card.className = isAboutView ? 'member-card' : 'member';

    if (isAboutView) {
      const image = document.createElement('img');
      image.src = member.image;
      image.alt = member.imageAlt;
      card.append(image);
    }

    const name = document.createElement('h3');
    name.textContent = isAboutView ? member.aboutName : member.homeName;
    card.append(name);

    const role = document.createElement('p');
    role.className = isAboutView ? 'role' : '';
    role.textContent = isAboutView ? member.aboutRole : member.homeRole;
    card.append(role);

    container.append(card);
  });
}

const membersContainer = document.querySelector('[data-members]');

if (membersContainer) {
  renderMembers(members, membersContainer);
}
