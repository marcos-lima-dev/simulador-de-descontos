import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalculationResult, formatCurrency } from "@/lib/discount-logic";
import { CheckCheck } from "lucide-react";

interface ResultCardProps {
  result: CalculationResult | null;
}

export function ResultCard({ result }: ResultCardProps) {
  // Se não houver resultado (null), não renderiza nada.
  if (!result) return null;

  return (
    <Card className="w-full bg-slate-50 border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold text-slate-700">
          Resumo do Pedido
        </CardTitle>
        <CheckCheck className="h-5 w-5 text-green-600" />
      </CardHeader>
      <CardContent className="space-y-3">
        
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Valor Original:</span>
          <span>{formatCurrency(result.originalPrice)}</span>
        </div>

        <div className="flex justify-between text-sm text-green-600 font-medium">
          <span>Desconto Aplicado:</span>
          <span>- {formatCurrency(result.discountAmount)}</span>
        </div>

        <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
          <span className="font-bold text-slate-900">Total a Pagar:</span>
          <span className="text-2xl font-bold text-slate-900">
            {formatCurrency(result.finalPrice)}
          </span>
        </div>

      </CardContent>
    </Card>
  );
}