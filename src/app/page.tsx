'use client'; // Obrigatório para usar useState e interatividade

import { useState } from "react";
import { Calculator } from "lucide-react";

// Importando nossos componentes e lógica
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PriceInput } from "@/components/simulator/price-input";
import { ClientSelect } from "@/components/simulator/client-select";
import { ResultCard } from "@/components/simulator/result-card";
import { calculateDiscount, CalculationResult, CustomerType } from "@/lib/discount-logic";

export default function Home() {
  // --- ESTADOS (A memória do componente) ---
  const [price, setPrice] = useState<number | "">(""); 
  const [customerType, setCustomerType] = useState<CustomerType>("common");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string>("");

  // --- COMPORTAMENTOS (Ações do usuário) ---
  const handleCalculate = () => {
    // 1. Limpa erros anteriores
    setError("");
    setResult(null);

    // 2. Validação (Requisito: Mostrar mensagem se não preencher)
    if (!price || Number(price) <= 0) {
      setError("Por favor, informe um valor de compra válido maior que zero.");
      return;
    }

    // 3. Executa o cálculo (usando nossa lógica pura)
    const calculation = calculateDiscount(Number(price), customerType);
    
    // 4. Atualiza a tela com o resultado
    setResult(calculation);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      
      {/* Container Principal */}
      <div className="w-full max-w-md space-y-6">
        
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-800">Simulador de Descontos</CardTitle>
            <CardDescription>Descubra o valor final da sua compra</CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Inputs */}
            <div className="space-y-4">
              <PriceInput 
                value={price} 
                onChange={setPrice} 
              />
              
              <ClientSelect 
                value={customerType} 
                onChange={setCustomerType} 
              />
            </div>

            {/* Mensagem de Erro (se houver) */}
            {error && (
              <div className="text-red-500 text-sm bg-red-50 p-3 rounded-md border border-red-200 text-center">
                {error}
              </div>
            )}

            {/* Botão de Ação */}
            <Button 
              size="lg" 
              className="w-full font-bold text-md" 
              onClick={handleCalculate}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calcular Desconto
            </Button>
          </CardContent>
        </Card>

        {/* Componente de Resultado (Só aparece se tiver resultado) */}
        <ResultCard result={result} />

      </div>
    </main>
  );
}