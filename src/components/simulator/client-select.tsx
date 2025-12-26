import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CustomerType } from "@/lib/discount-logic";
import { Users } from "lucide-react";

interface ClientSelectProps {
  value: CustomerType;
  onChange: (value: CustomerType) => void;
}

export function ClientSelect({ value, onChange }: ClientSelectProps) {
  return (
    <div className="space-y-2">
      <Label>Tipo de Cliente</Label>
      <Select onValueChange={(val) => onChange(val as CustomerType)} value={value}>
        <SelectTrigger>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <SelectValue placeholder="Selecione o tipo..." />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="common">Comum (5%)</SelectItem>
          <SelectItem value="partner">Parceiro (15%)</SelectItem>
          <SelectItem value="vip">VIP (20%)</SelectItem>
          <SelectItem value="employee">Funcionário (30%)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}