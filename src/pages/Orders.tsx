import { ClipboardList } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const Orders = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-primary text-primary-foreground px-4 py-6">
        <h1 className="text-xl font-bold">Mis Pedidos</h1>
      </header>

      <div className="flex flex-col items-center justify-center h-[60vh] px-4">
        <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-4">
          <ClipboardList className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-lg font-semibold text-foreground mb-2">
          No tienes pedidos aún
        </h2>
        <p className="text-muted-foreground text-center">
          Cuando hagas tu primer pedido, aparecerá aquí
        </p>
      </div>

      <BottomNav />
    </div>
  );
};

export default Orders;
