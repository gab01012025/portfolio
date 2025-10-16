# 📧 Configuração do EmailJS

Para ativar o formulário de contato funcional, siga estas etapas:

## 1. Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita (100 emails/mês grátis)
3. Verifique seu email

## 2. Configurar Serviço de Email

1. No dashboard, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor (Gmail, Outlook, etc.)
4. Conecte sua conta de email
5. Copie o **Service ID** gerado

## 3. Criar Template de Email

1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Use este template:

```
Subject: 🎯 Novo Contato do Portfolio - {{from_name}}

Mensagem:
------
Nome: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}
------

Enviado via Portfolio
```

4. Copie o **Template ID** gerado

## 4. Obter Public Key

1. Vá em **Account** > **General**
2. Copie sua **Public Key**

## 5. Configurar no Projeto

1. Abra o arquivo `/src/components/Contact.tsx`
2. Na linha 28-31, substitua:
   - `'YOUR_SERVICE_ID'` pelo seu Service ID
   - `'YOUR_TEMPLATE_ID'` pelo seu Template ID
   - `'YOUR_PUBLIC_KEY'` pela sua Public Key

## 6. Testar

1. Inicie o servidor: `npm run dev`
2. Acesse o formulário de contato
3. Envie uma mensagem de teste
4. Verifique se recebeu o email

## 📝 Exemplo de Configuração

```typescript
await emailjs.send(
  'service_abc123',     // Seu Service ID
  'template_xyz456',    // Seu Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_name: 'Gabriel Barreto',
  },
  'user_789def'        // Sua Public Key
)
```

## 🎨 Recursos Adicionais

- ✅ Loading state (botão desabilitado durante envio)
- ✅ Success state (ícone de check verde)
- ✅ Toast notifications (feedback visual)
- ✅ Form reset automático
- ✅ Validação HTML5
- ✅ Suporte PT/EN

## 🚀 Modo Demo (Sem EmailJS)

Se quiser testar sem configurar EmailJS, o formulário já mostra:
- Estados de loading
- Animações
- Notificações
- Validação

Apenas não enviará emails reais até configurar as credenciais.
