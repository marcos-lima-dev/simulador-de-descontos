import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DollarSign } from "lucide-react";

interface PriceInputProps {
  value: number | "";
  onChange: (newValue: number) => void;
}

export function PriceInput({ value, onChange }: PriceInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="price">Valor da Compra</Label>
      <div className="relative">
        <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        <Input
          id="price"
          type="number"
          placeholder="0.00"
          className="pl-10" // Padding left para não ficar em cima do ícone
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        />
      </div>
    </div>
  );
}