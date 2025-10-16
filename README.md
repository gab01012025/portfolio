# 🚀 Gabriel Barreto - Portfolio Profissional

Portfolio completo de **Desenvolvedor Frontend Freelancer**, construído com **Next.js 15**, **TypeScript**, **Tailwind CSS v4** e **Framer Motion**.

[![Deploy com Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gab01012025/portfolio)

---

## ✨ Funcionalidades Implementadas

### 🎨 Design & UX
- ⚡ Performance otimizada com Next.js 15 + Turbopack
- 🎨 Design moderno com Tailwind CSS v4
- 📱 100% Responsivo (Mobile-first)
- ✨ Animações suaves com Framer Motion
- 🌙 Tema Escuro/Claro (toggle)
- 🔝 Scroll to Top button
- 🎯 Navegação suave entre seções

### 🌐 Internacionalização
- 🇵🇹 Português / 🇬🇧 English
- 🔄 Troca instantânea de idioma
- 💾 Persistência em localStorage
- 🌍 50+ chaves traduzidas
- 🎯 Context API para gerenciamento global

### 📧 Formulário de Contato
- ✉️ **EmailJS** totalmente integrado
- ⏳ Loading states durante envio
- ✅ Success feedback visual
- ❌ Error handling robusto
- 🎨 Toast notifications (react-hot-toast)
- 🌐 Suporte PT/EN
- 📱 Validação de campos

### 📄 Outras Funcionalidades
- 📥 Download de CV em PDF
- 🎯 5 seções principais (Hero, About, Skills, Projects, Contact)
- 🔗 Links para GitHub, LinkedIn, Email
- 📊 Stats profissionais (experiência, projetos, clientes)
- 🎨 Gradientes e efeitos visuais modernos

---

## 🛠️ Tecnologias

| Categoria | Tecnologia |
|-----------|-----------|
| **Framework** | Next.js 15.5.5 |
| **Linguagem** | TypeScript |
| **Estilização** | Tailwind CSS v4 |
| **Animações** | Framer Motion |
| **Ícones** | Lucide React |
| **Formulário** | EmailJS |
| **Notificações** | React Hot Toast |

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/gab01012025/portfolio.git

# Entre na pasta
cd portfolio

# Instale as dependências
npm install

# Configure as variáveis de ambiente (veja seção abaixo)
cp .env.example .env.local
# Edite .env.local com suas credenciais EmailJS

# Execute o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📧 Configurar EmailJS

### 1. Criar conta no EmailJS
- Acesse: https://www.emailjs.com/
- Crie uma conta gratuita

### 2. Configurar Email Service
1. Dashboard → Email Services → Add Service
2. Escolha **Outlook** (recomendado) ou Gmail
3. Conecte sua conta
4. Copie o **Service ID** (ex: `service_aorwa1q`)

### 3. Criar Email Template
1. Dashboard → Email Templates → Create Template
2. Configure o template:
   ```
   Assunto: Novo contato do Portfolio
   
   De: {{from_name}}
   Email: {{from_email}}
   
   Mensagem:
   {{message}}
   ```
3. Copie o **Template ID** (ex: `template_3wk03g9`)

### 4. Obter Public Key
1. Dashboard → Account → API Keys
2. Copie o **Public Key** (ex: `abNLcfFa_DERmji_J`)

### 5. Configurar .env.local

Crie o arquivo `.env.local` na raiz do projeto:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

⚠️ **Importante**: Nunca commite o arquivo `.env.local`! Ele está no `.gitignore`.

---

## 🌍 Deploy na Vercel

### Método 1: Deploy Rápido

[![Deploy com Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gab01012025/portfolio)

### Método 2: Deploy Manual

1. **Conecte seu repositório GitHub à Vercel**
   - Acesse: https://vercel.com/new
   - Import Git Repository
   - Selecione seu repositório

2. **Configure as variáveis de ambiente**
   - Settings → Environment Variables
   - Adicione as 3 variáveis do EmailJS:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

3. **Configure domínio no EmailJS**
   - EmailJS Dashboard → Settings → Security
   - Allowed Domains → Adicione: `*.vercel.app`
   - Se tiver domínio próprio, adicione também

4. **Deploy!**
   - Click em "Deploy"
   - Aguarde o build (1-2 min)
   - Acesse sua URL: `https://seu-portfolio.vercel.app`

---

## 📞 Contato

- **Email:** gabrielbarreto900@gmail.com
- **Telefone:** +351 969 318 391
- **Localização:** Lisbon, Portugal
- **GitHub:** [@gab01012025](https://github.com/gab01012025)
- **LinkedIn:** [Gabriel Barreto](https://linkedin.com/in/gabriel-barreto-610a72370)

---

<div align="center">

⭐ **Desenvolvido por Gabriel Barreto** | 💼 Freelancer Disponível

**Se este projeto te ajudou, deixe uma ⭐ no repositório!**

</div>
