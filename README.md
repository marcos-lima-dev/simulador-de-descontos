# 💰 Simulador de Descontos

Aplicação web interativa para cálculo de descontos baseados em categorias de clientes, desenvolvida para praticar conceitos modernos de Front-end.

## 🚀 Tecnologias

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Componentes:** ShadCN UI + Lucide React
- **Ícones:** Lucide Icons

## 📋 Funcionalidades

O sistema permite:
1. Inserir o **valor da compra**.
2. Selecionar a **categoria do cliente**.
3. Calcular o desconto automaticamente com validação de dados.
4. Visualizar o valor economizado e o total a pagar.

## 📊 Regras de Negócio

Os descontos são aplicados conforme a tabela abaixo:

| Tipo de Cliente | Desconto |
| :--- | :--- |
| **VIP** | 20% |
| **Funcionário** | 30% |
| **Parceiro** | 15% |
| **Comum** | 5% |

## 🏗️ Estrutura do Projeto

```bash
src/
├── app/            # Páginas e Layout (Next.js App Router)
├── components/
│   ├── ui/         # Componentes reutilizáveis (ShadCN)
│   └── simulator/  # Componentes de negócio (Lógica do simulador)
└── lib/            # Utilitários