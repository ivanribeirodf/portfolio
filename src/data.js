// Edite este arquivo para personalizar textos, links e projetos.
export const profile = {
  name: 'Ivan Ribeiro',
  role: 'Software Developer',
  location: 'Brasil',
  email: 'ivandf@gmail.com',
  intro: 'Conectando sistemas, automatizando processos e construindo software que resolve problemas reais.',
  about: 'Sou profissional de tecnologia com experiência em desenvolvimento de software, integração de sistemas e automação. Minha trajetória combina tecnologias modernas com plataformas corporativas robustas — do frontend e APIs ao universo mainframe.',
  availability: 'Aberto a conversas e oportunidades',
  links: {
    github: 'https://github.com/ivanribeirodf',
    linkedin: 'https://www.linkedin.com/in/ivanribeirodf/',
    email: 'mailto:ivandf@gmail.com',
    cv: '', // Informe aqui o caminho do currículo, por exemplo: /ivan-ribeiro-cv.pdf
  },
}

export const skillGroups = [
  { title: 'Backend & APIs', note: 'Lógica, serviços e integrações', skills: ['Java', 'Python', 'Groovy', 'Node.js', 'REST APIs'] },
  { title: 'Frontend', note: 'Interfaces e experiências web', skills: ['React', 'Vue.js', 'JavaScript', 'HTML & CSS'] },
  { title: 'Mainframe', note: 'Ambientes corporativos', skills: ['COBOL', 'JCL', 'REXX', 'z/OS'] },
  { title: 'Automation & Data', note: 'Operação e persistência', skills: ['Rundeck', 'PostgreSQL', 'Gradle', 'Git', 'CI/CD'] },
]

export const projects = [
  {
    number: '01',
    name: 'Automation & Rundeck',
    type: 'AUTOMAÇÃO · INTEGRAÇÃO',
    description: 'Desenvolvimento de extensões e experiências personalizadas para automatizar rotinas e facilitar operações em ambientes corporativos.',
    stack: ['Java', 'Groovy', 'Vue.js', 'Rundeck'],
    url: '',
    status: 'Projeto demonstrativo',
  },
  {
    number: '02',
    name: 'Enterprise Reporting',
    type: 'BACKEND · OBSERVABILIDADE',
    description: 'Construção de relatórios e consultas para acompanhar execuções, SLAs e previsões de processamento de jobs.',
    stack: ['Groovy', 'PostgreSQL', 'REST'],
    url: '',
    status: 'Projeto demonstrativo',
  },
  {
    number: '03',
    name: 'Modern APIs',
    type: 'BACKEND · ARQUITETURA',
    description: 'APIs organizadas em camadas, com CRUD, validações, DTOs, documentação e persistência relacional.',
    stack: ['Java', 'Python', 'Node.js', 'PostgreSQL'],
    url: '',
    status: 'Projeto demonstrativo',
  },
]
