# Ivan Ribeiro — Portfolio

Portfólio profissional em React + Vite, com identidade dark tecnológica azul/ciano.

## Requisitos
- Node.js 18 ou superior
- npm

## Rodar localmente
```bash
npm install
npm run dev
```
Abra o endereço local mostrado pelo Vite.

## Gerar versão de produção
```bash
npm run build
npm run preview
```
Os arquivos prontos para publicação ficam na pasta `dist/`.

## Personalização obrigatória antes de publicar
Edite `src/data.js`:
- `profile.email`: seu e-mail profissional.
- `profile.links.github`: endereço real do GitHub.
- `profile.links.linkedin`: endereço real do LinkedIn.
- `profile.links.cv`: caminho público do PDF do currículo (opcional).
- `projects`: substitua os cases demonstrativos por projetos reais e preencha `url` com links públicos.

Os cards iniciais de projetos são exemplos editoriais baseados em áreas de atuação, não devem ser apresentados como cases publicados sem revisão.

## Publicação no domínio
Faça o build com `npm run build` e envie **o conteúdo da pasta `dist/`** para a raiz pública do domínio (por exemplo, `public_html/` em hospedagem cPanel).

Se o site for publicado em uma subpasta, ajuste `base` em `vite.config.js` para o caminho dessa subpasta e gere o build novamente.

## Estrutura
```text
src/
  App.jsx       # componentes e estrutura da página
  data.js       # conteúdo editável do perfil, stack e projetos
  main.jsx      # inicialização React
  styles.css    # tema, layout e responsividade
```

## Observações
- O formulário de contato foi intencionalmente substituído por links diretos para e-mail e redes profissionais; não depende de backend.
- A fonte Manrope/DM Mono é carregada do Google Fonts. Se preferir não depender de serviço externo, remova os imports e use fontes locais/sistema.
- Revise links, e-mail, currículo, textos e projetos antes de colocar o site no ar.
