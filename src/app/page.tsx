'use client';

import { useState } from "react";
import { Calculator, RotateCcw } from "lucide-react";
// 1. Importamos o framer-motion
import { motion, AnimatePresence } from "framer-motion";

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
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm bg-red-50 p-3 rounded-md border border-red-200 text-center"
              >
                {error}
              </motion.div>
            )}

            <div className="flex gap-3 w-full">
              <Button 
                variant="outline"
                size="icon"
                className="shrink-0 text-slate-500 hover:text-red-500 hover:bg-red-50 border-slate-300 transition-colors duration-300" // Adicionei transition aqui também
                onClick={handleReset}
                title="Limpar campos e começar de novo"
              >
                <RotateCcw className="h-5 w-5" />
                <span className="sr-only">Limpar</span>
              </Button>

              <Button 
                size="lg" 
                className="flex-1 font-bold text-md transition-transform active:scale-95" // Efeito de clique sutil
                onClick={handleCalculate}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calcular Desconto
              </Button>
            </div>

          </CardContent>
        </Card>

        {/* AQUI ACONTECE A MÁGICA DA TRANSIÇÃO
            AnimatePresence: Permite animar a saída (unmount)
        */}
        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              key="result-card" // Identificador único para animação
              initial={{ opacity: 0, y: 20, scale: 0.95 }} // Começa invisível, levemente abaixo e menor
              animate={{ opacity: 1, y: 0, scale: 1 }}     // Fica visível, posição original e tamanho normal
              exit={{ opacity: 0, y: -20, scale: 0.95 }}   // Sai subindo e desaparecendo
              transition={{ duration: 0.4, ease: "easeOut" }} // Duração da animação
            >
              <ResultCard result={result} />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}