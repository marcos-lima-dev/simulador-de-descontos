// 1. Definição dos Tipos (O contrato de dados)
// Isso impede que alguém escreva "vipp" ou "Funcionario" errado.
export type CustomerType = "common" | "vip" | "employee" | "partner";

// Interface para o resultado final do cálculo
export interface CalculationResult {
  originalPrice: number;
  finalPrice: number;
  discountAmount: number;    // Valor em R$ economizado
  discountPercentage: number; // 0.20, 0.05, etc.
}

// 2. Função Pura de Cálculo (A Lógica)
export function calculateDiscount(price: number, type: CustomerType): CalculationResult {
  let discountRate = 0;

  // Requisito do projeto: Praticar estrutura SWITCH CASE
  switch (type) {
    case "vip":
      discountRate = 0.20; // 20%
      break;
    case "employee":
      discountRate = 0.30; // 30%
      break;
    case "partner":
      discountRate = 0.15; // 15%
      break;
    case "common":
      discountRate = 0.05; // 5%
      break;
    default:
      discountRate = 0;
      break;
  }

  const discountAmount = price * discountRate;
  const finalPrice = price - discountAmount;

  return {
    originalPrice: price,
    finalPrice: finalPrice,
    discountAmount: discountAmount,
    discountPercentage: discountRate
  };
}

// 3. Helper para formatar moeda (Bônus para a UI ficar bonita depois)
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}