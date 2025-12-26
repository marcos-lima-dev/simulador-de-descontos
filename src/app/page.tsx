'use client';

import { useState } from "react";
import { Calculator, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PriceInput } from "@/components/simulator/price-input";
import { ClientSelect } from "@/components/simulator/client-select";
import { ResultCard } from "@/components/simulator/result-card";
import { calculateDiscount, CalculationResult, CustomerType } from "@/lib/discount-logic";

export default function Home() {
  const [price, setPrice] = useState<number | "">(""); 
  const [customerType, setCustomerType] = useState<CustomerType>("common");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string>("");

  const handleCalculate = () => {
    setError("");
    setResult(null);

    if (!price || Number(price) <= 0) {
      setError("Por favor, informe um valor de compra válido maior que zero.");
      return;
    }

    const calculation = calculateDiscount(Number(price), customerType);
    setResult(calculation);
  };

  // Função para limpar tudo
  const handleReset = () => {
    setPrice("");              
    setCustomerType("common"); 
    setResult(null);           
    setError("");              
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      
      <div className="w-full max-w-md space-y-6">
        
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-800">Simulador de Descontos</CardTitle>
            <CardDescription>Descubra o valor final da sua compra</CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
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

            {error && (
              <div className="text-red-500 text-sm bg-red-50 p-3 rounded-md border border-red-200 text-center">
                {error}
              </div>
            )}

            {/* CORREÇÃO AQUI:
              1. 'w-full' na div pai para garantir que o conjunto ocupe a largura toda.
              2. 'flex-1' no botão de calcular para ele preencher o espaço restante sem estourar.
            */}
            <div className="flex gap-3 w-full">
              <Button 
                variant="outline"
                size="icon"
                className="shrink-0 text-slate-500 hover:text-red-500 hover:bg-red-50 border-slate-300"
                onClick={handleReset}
                title="Limpar campos e começar de novo"
              >
                <RotateCcw className="h-5 w-5" />
                <span className="sr-only">Limpar</span>
              </Button>

              <Button 
                size="lg" 
                className="flex-1 font-bold text-md" 
                onClick={handleCalculate}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calcular Desconto
              </Button>
            </div>

          </CardContent>
        </Card>

        <ResultCard result={result} />

      </div>
    </main>
  );
}