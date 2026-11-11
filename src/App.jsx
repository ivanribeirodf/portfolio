import { useState } from 'react'
import {
  ArrowDown, ArrowUpRight, Terminal, Code2, Cpu, Workflow, Database,
  Github, Linkedin, Mail, Menu, X, Download, ChevronRight, Sparkles,
  Braces, Layers3, Server, Globe2
} from 'lucide-react'
import { profile, skillGroups, projects } from './data'

const navItems = [
  ['Sobre', '#sobre'], ['Stack', '#stack'], ['Projetos', '#projetos'], ['Contato', '#contato'],
]

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="header">
    <a className="brand" href="#inicio" aria-label="Ivan Ribeiro - início"><span className="brand-mark">IR</span><span>ivanribeiro<span className="brand-dot">.</span>dev</span></a>
    <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Abrir menu">{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav nav-open' : 'nav'}>
      {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#contato" onClick={() => setOpen(false)}>Vamos conversar <ArrowUpRight size={15}/></a>
    </nav>
  </header>
}

function Hero() {
  return <section className="hero section-wrap" id="inicio">
    <div className="hero-copy">
      <div className="eyebrow"><span className="pulse" /> {profile.availability}</div>
      <p className="hero-kicker">OLÁ, EU SOU {profile.name.toUpperCase()}</p>
      <h1>Desenvolvedor de software<br/>com <span className="gradient-text">visão de ponta a ponta.</span></h1>
      <p className="hero-lead">{profile.intro}</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projetos">Explorar projetos <ArrowUpRight size={17}/></a>
        <a className="button button-ghost" href="#contato">Entrar em contato <ChevronRight size={17}/></a>
      </div>
      <div className="hero-meta"><span><Globe2 size={14}/> {profile.location}</span><span className="meta-separator"/> <span><Code2 size={14}/> {profile.role}</span></div>
    </div>
    <div className="hero-visual" aria-label="Ilustração abstrata de arquitetura de software">
      <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
      <div className="visual-glow"/>
      <div className="code-window">
        <div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>ivan@workspace:~</span><Terminal size={14}/></div>
        <div className="code-content">
          <div className="code-line"><span className="line-no">01</span><span><b className="code-purple">const</b> <b className="code-blue">developer</b> = {'{'}</span></div>
          <div className="code-line indent"><span className="line-no">02</span><span>mindset: <b className="code-green">'problem-solver'</b>,</span></div>
          <div className="code-line indent"><span className="line-no">03</span><span>focus: <b className="code-green">'automation'</b>,</span></div>
          <div className="code-line indent"><span className="line-no">04</span><span>experience: [</span></div>
          <div className="code-line indent2"><span className="line-no">05</span><span><b className="code-orange">'modern-stack'</b>,</span></div>
          <div className="code-line indent2"><span className="line-no">06</span><span><b className="code-orange">'enterprise-systems'</b></span></div>
          <div className="code-line indent"><span className="line-no">07</span><span>]</span></div>
          <div className="code-line"><span className="line-no">08</span><span>{'}'};</span></div>
          <div className="code-line output"><span className="line-no">09</span><span><b className="code-green">✓</b> Ready to build something great<span className="cursor">_</span></span></div>
        </div>
      </div>
      <div className="float-chip chip-top"><Braces size={15}/> Full Stack</div>
      <div className="float-chip chip-bottom"><Workflow size={15}/> Automation first</div>
      <div className="visual-caption">BUILDING · CONNECTING · AUTOMATING</div>
    </div>
    <a href="#sobre" className="scroll-hint"><ArrowDown size={15}/> Role para explorar</a>
  </section>
}

function SectionHeading({ eyebrow, title, accent, description }) {
  return <div className="section-heading"><p className="section-eyebrow">{eyebrow}</p><h2>{title} <span className="gradient-text">{accent}</span></h2>{description && <p className="section-description">{description}</p>}</div>
}

function About() {
  const highlights = [
    { icon: <Layers3/>, title: 'Visão integrada', text: 'Frontend, backend e integração trabalhando juntos.' },
    { icon: <Server/>, title: 'Mundo enterprise', text: 'Experiência com sistemas corporativos e mainframe.' },
    { icon: <Workflow/>, title: 'Automação', text: 'Menos tarefas repetitivas, mais eficiência operacional.' },
  ]
  return <section className="section-wrap section" id="sobre">
    <SectionHeading eyebrow="01 / SOBRE MIM" title="Tecnologia com" accent="propósito." description="Mais do que escrever código: entender o cenário, conectar as peças e entregar soluções."/>
    <div className="about-grid">
      <div className="about-copy"><p>{profile.about}</p><p>Gosto de explorar diferentes tecnologias e encontrar o equilíbrio entre inovação, confiabilidade e simplicidade. Acredito que boas soluções nascem da combinação entre conhecimento técnico e entendimento do negócio.</p>
        <a className="text-link" href="#contato">Vamos conversar sobre tecnologia <ArrowUpRight size={16}/></a>
      </div>
      <div className="highlight-list">{highlights.map((item, i) => <div className="highlight" key={item.title}><div className="highlight-icon">{item.icon}</div><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="highlight-index">0{i+1}</span></div>)}</div>
    </div>
  </section>
}

function Stack() {
  const icons = [<Code2/>, <Braces/>, <Cpu/>, <Database/>]
  return <section className="section section-alt" id="stack"><div className="section-wrap">
    <SectionHeading eyebrow="02 / TECNOLOGIAS" title="Ferramentas para" accent="construir." description="Um conjunto versátil de tecnologias para desenvolver, integrar e automatizar."/>
    <div className="stack-grid">{skillGroups.map((group, i) => <article className="stack-card" key={group.title}><div className="stack-card-top"><span className="stack-icon">{icons[i]}</span><span className="card-number">0{i+1}</span></div><h3>{group.title}</h3><p>{group.note}</p><div className="tag-list">{group.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div></article>)}</div>
  </div></section>
}

function Projects() {
  return <section className="section section-wrap" id="projetos">
    <SectionHeading eyebrow="03 / PROJETOS EM DESTAQUE" title="Ideias que viram" accent="soluções." description="Uma seleção de frentes de trabalho que representam minha experiência técnica. Atualize os cards com seus repositórios e cases reais."/>
    <div className="project-list">{projects.map(project => <article className="project-card" key={project.number}>
      <div className="project-number">{project.number}</div><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>
      <div className="project-end"><span className="project-status">{project.status}</span>{project.url ? <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Ver ${project.name}`}><ArrowUpRight/></a> : <span className="project-placeholder"><ArrowUpRight/></span>}</div>
    </article>)}</div>
  </section>
}

function Contact() {
  return <section className="section contact-section" id="contato"><div className="section-wrap contact-inner">
    <div><p className="section-eyebrow">04 / CONTATO</p><h2>Tem um desafio?<br/><span className="gradient-text">Vamos construir.</span></h2><p className="contact-description">Estou aberto a trocar ideias, conversar sobre tecnologia e conhecer novos desafios.</p>
      <a className="button button-primary" href={profile.links.email}>Fale comigo <Mail size={17}/></a>
    </div>
    <div className="contact-links">
      <a href={profile.links.linkedin} target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin/></span><span><small>LINKEDIN</small><b>Conecte-se comigo</b></span><ArrowUpRight/></a>
      <a href={profile.links.github} target="_blank" rel="noreferrer"><span className="contact-icon"><Github/></span><span><small>GITHUB</small><b>Veja meus códigos</b></span><ArrowUpRight/></a>
      <a href={profile.links.email}><span className="contact-icon"><Mail/></span><span><small>E-MAIL</small><b>{profile.email}</b></span><ArrowUpRight/></a>
      {profile.links.cv && <a href={profile.links.cv} target="_blank" rel="noreferrer"><span className="contact-icon"><Download/></span><span><small>CURRÍCULO</small><b>Baixar currículo</b></span><ArrowUpRight/></a>}
    </div>
  </div></section>
}

function Footer() {
  return <footer className="footer section-wrap"><a className="brand" href="#inicio"><span className="brand-mark">IR</span><span>ivanribeiro<span className="brand-dot">.</span>dev</span></a><span>© {new Date().getFullYear()} Ivan Ribeiro. Feito com intenção e código.</span><a href="#inicio" className="back-top">Voltar ao topo ↑</a></footer>
}

export default function App() {
  return <><div className="background-grid"/><Header/><main><Hero/><About/><Stack/><Projects/><Contact/></main><Footer/></>
}
