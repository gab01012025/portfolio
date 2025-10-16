# 🚀 GUIA COMPLETO: DEPLOY NA VERCEL

## 📋 Pré-requisitos

✅ Portfolio funcionando localmente  
✅ Build local sem erros (`npm run build`)  
✅ EmailJS configurado e testado  
✅ Conta GitHub criada  
✅ Repositório criado no GitHub

---

## 🔥 PASSO A PASSO

### 1️⃣ Preparar Repositório GitHub

```bash
# Inicializar Git (se ainda não foi)
cd "/home/gabifran/Área de trabalho/projetos"
git init

# Adicionar todos os arquivos
git add .

# Primeiro commit
git commit -m "🎉 Portfolio completo com EmailJS"

# Adicionar remote (substitua seu-usuario)
git remote add origin https://github.com/gab01012025/portfolio.git

# Push para GitHub
git push -u origin main
```

⚠️ **Importante**: O arquivo `.env.local` NÃO será commitado (está no `.gitignore`)

---

### 2️⃣ Criar Conta Vercel

1. Acesse: **https://vercel.com/signup**
2. Clique em **"Continue with GitHub"**
3. Autorize a Vercel a acessar seus repositórios

---

### 3️⃣ Importar Projeto

1. No Dashboard da Vercel, clique em **"Add New..." → Project**
2. Selecione o repositório **"portfolio"**
3. Clique em **"Import"**

---

### 4️⃣ Configurar Projeto

#### Framework Preset
- ✅ **Framework**: Next.js (detectado automaticamente)
- ✅ **Root Directory**: `./`
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `.next`

#### Environment Variables

Clique em **"Environment Variables"** e adicione:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | `service_aorwa1q` |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `template_3wk03g9` |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `abNLcfFa_DERmji_J` |

⚠️ **Importante**: 
- Use os valores REAIS do seu `.env.local`
- Selecione **Production**, **Preview** e **Development**
- Clique em **"Add"** para cada variável

---

### 5️⃣ Deploy!

1. Clique em **"Deploy"**
2. Aguarde o build (1-3 minutos)
3. ✅ **Deploy completo!**

Você verá:
```
✅ Build successful
✅ Deployment ready
🌐 Your project is live at: https://portfolio-xxx.vercel.app
```

---

### 6️⃣ Configurar Domínio no EmailJS

**MUITO IMPORTANTE** - Sem isso, o formulário não funcionará em produção!

1. Acesse: **https://dashboard.emailjs.com/admin**
2. Vá em **Account → Security**
3. Na seção **"Allowed Domains"**, adicione:
   ```
   *.vercel.app
   ```
4. Se tiver domínio personalizado, adicione também:
   ```
   seu-dominio.com
   ```
5. Clique em **"Save"**

---

### 7️⃣ Testar em Produção

1. Acesse sua URL: `https://portfolio-xxx.vercel.app`
2. Navegue até a seção **"Contato"**
3. Preencha o formulário de teste
4. Clique em **"Enviar Mensagem"**
5. ✅ Verifique se o email chegou

---

## 🎯 Configurar Domínio Personalizado (Opcional)

### Se você tem um domínio próprio:

1. **Na Vercel:**
   - Settings → Domains
   - Adicione seu domínio: `gabrielbarreto.com`
   - Siga as instruções de configuração DNS

2. **No seu provedor de domínio:**
   - Adicione registro CNAME:
     - **Name**: `www` ou `@`
     - **Value**: `cname.vercel-dns.com`

3. **No EmailJS:**
   - Adicione o domínio em Allowed Domains

---

## 🔄 Atualizações Futuras

Sempre que fizer mudanças no código:

```bash
# Adicionar mudanças
git add .

# Commitar
git commit -m "📝 Descrição da mudança"

# Push
git push origin main
```

A Vercel fará **deploy automático** a cada push! 🚀

---

## 🐛 Troubleshooting

### ❌ Build falha na Vercel

**Solução:**
1. Verifique os logs de erro na Vercel
2. Execute `npm run build` localmente
3. Corrija erros de TypeScript/ESLint
4. Push novamente

---

### ❌ Formulário não envia em produção

**Solução:**
1. ✅ Verifique se as 3 variáveis de ambiente estão na Vercel
2. ✅ Confirme que `*.vercel.app` está em Allowed Domains (EmailJS)
3. ✅ Abra DevTools (F12) e veja o Console para erros
4. ✅ Teste localmente com as mesmas credenciais

---

### ❌ Página 404

**Solução:**
- Aguarde 1-2 minutos após o deploy
- Force refresh: `Ctrl + Shift + R`
- Limpe cache do navegador

---

### ❌ CSS não carrega

**Solução:**
- Verifique se `globals.css` está em `/src/app/`
- Confirme que `tailwind.config.ts` está correto
- Redeploy: Vercel Dashboard → Deployments → Redeploy

---

## 📊 Monitoramento

### Analytics (Opcional)

**Vercel Analytics:**
1. Project Settings → Analytics
2. Enable Analytics
3. Veja estatísticas de visitantes

**Google Analytics:**
1. Crie propriedade no Google Analytics
2. Adicione tracking code em `layout.tsx`

---

## 🎉 Checklist Final

✅ Build local sem erros  
✅ Repositório no GitHub  
✅ Deploy na Vercel completo  
✅ Variáveis de ambiente configuradas  
✅ Domínio autorizado no EmailJS  
✅ Formulário testado em produção  
✅ Site acessível publicamente  
✅ Links sociais funcionando  
✅ CV baixando corretamente  
✅ Traduções PT/EN funcionando  

---

## 🆘 Precisa de Ajuda?

- 📧 Email Vercel: support@vercel.com
- 📧 Email EmailJS: support@emailjs.com
- 📚 Docs Vercel: https://vercel.com/docs
- 📚 Docs Next.js: https://nextjs.org/docs

---

<div align="center">

**🎉 PARABÉNS! Seu portfolio está online! 🚀**

Compartilhe sua URL:
`https://portfolio-xxx.vercel.app`

</div>
