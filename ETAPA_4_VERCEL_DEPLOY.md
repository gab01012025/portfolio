# 🚀 ETAPA 4 - VERCEL DEPLOY

## 📋 Checklist Pré-Deploy

### 1️⃣ Preparação Local
- [ ] Build local sem erros
- [ ] Testar localhost:3000 final
- [ ] Remover console.logs (opcional)
- [ ] Verificar .gitignore

### 2️⃣ Configurar EmailJS para Produção
- [ ] Adicionar domínio Vercel no EmailJS
- [ ] Criar variáveis de ambiente

### 3️⃣ Deploy Vercel
- [ ] Conectar repositório GitHub
- [ ] Configurar variáveis de ambiente
- [ ] Fazer primeiro deploy
- [ ] Testar site em produção

---

## 🛠️ Passo a Passo

### 1. Build Local
```bash
npm run build
```

✅ **Objetivo**: Verificar se não há erros de build.

---

### 2. Configurar Domínio no EmailJS

**a) Acessar EmailJS Dashboard**
- https://dashboard.emailjs.com/admin
- Login com Outlook

**b) Adicionar Domínio Autorizado**
1. Settings → Security
2. Allowed Domains
3. Adicionar: `*.vercel.app`
4. Salvar

---

### 3. Variáveis de Ambiente (Opcional)

**Criar arquivo `.env.local`:**
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_aorwa1q
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_3wk03g9
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abNLcfFa_DERmji_J
```

**Atualizar Contact.tsx para usar variáveis:**
```typescript
const response = await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  // ...
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
)
```

---

### 4. Deploy Vercel

**a) Criar conta Vercel**
- https://vercel.com/signup
- Login com GitHub

**b) Import Git Repository**
1. New Project → Import Git Repository
2. Selecionar repositório do portfolio
3. Configure Project:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

**c) Environment Variables (se usar .env.local)**
1. Settings → Environment Variables
2. Adicionar:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `service_aorwa1q`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `template_3wk03g9`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `abNLcfFa_DERmji_J`

**d) Deploy**
- Click "Deploy"
- Aguardar build (1-2 min)

---

### 5. Teste em Produção

**URL Gerada:**
- `https://seu-portfolio.vercel.app`

**Testar:**
- [ ] Navegação completa
- [ ] Traduções PT/EN
- [ ] Formulário de contato
- [ ] Download CV
- [ ] Responsividade mobile
- [ ] Performance (Lighthouse)

---

## 🎯 Domínio Personalizado (Opcional)

**Configurar domínio próprio:**
1. Vercel → Settings → Domains
2. Add Domain: `gabrielbarreto.com`
3. Configurar DNS conforme instruções

---

## 🐛 Troubleshooting

### Erro de Build
```bash
npm run build
# Ver logs de erro
```

### EmailJS não funciona em produção
1. Verificar domínio `*.vercel.app` em EmailJS
2. Verificar variáveis de ambiente
3. Testar console no DevTools do navegador

### Erro 500
- Verificar se variáveis de ambiente estão corretas
- Rebuild: Settings → Deployments → Redeploy

---

## ✅ Checklist Final

- [ ] Site online em Vercel
- [ ] Formulário enviando emails
- [ ] Traduções funcionando
- [ ] CV baixando corretamente
- [ ] Mobile 100% responsivo
- [ ] Performance >90 (Lighthouse)

---

## 🔥 Próximos Passos (ETAPA 5-7)

- **ETAPA 5**: SEO Básico (meta tags, sitemap)
- **ETAPA 6**: Google Analytics
- **ETAPA 7**: Melhorias Visuais

---

**Quer que eu execute o build e prepare o deploy agora?** 🚀
