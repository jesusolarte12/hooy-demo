import { User, Settings, CreditCard, MapPin, HelpCircle, LogOut } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const menuItems = [
  { icon: User, label: "Mis datos", description: "Edita tu información personal" },
  { icon: MapPin, label: "Direcciones", description: "Gestiona tus direcciones de entrega" },
  { icon: CreditCard, label: "Métodos de pago", description: "Agrega o edita tus tarjetas" },
  { icon: Settings, label: "Configuración", description: "Notificaciones y preferencias" },
  { icon: HelpCircle, label: "Ayuda", description: "Centro de ayuda y soporte" },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="bg-primary text-primary-foreground px-4 py-6">
        <h1 className="text-xl font-bold">Mi Perfil</h1>
      </header>

      {/* User Info Card */}
      <div className="px-4 -mt-4">
        <div className="bg-card rounded-2xl p-4 shadow-sm border border-border flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold text-lg text-foreground">Juan Pérez</h2>
            <p className="text-sm text-muted-foreground">juan.perez@email.com</p>
            <p className="text-sm text-muted-foreground">+57 300 123 4567</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 mt-6 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:bg-muted transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          </button>
        ))}

        {/* Logout */}
        <button className="w-full flex items-center gap-4 p-4 bg-card rounded-xl border border-destructive/20 hover:bg-destructive/5 transition-colors mt-4">
          <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
            <LogOut className="w-5 h-5 text-destructive" />
          </div>
          <div className="flex-1 text-left">
            <p className="font-medium text-destructive">Cerrar sesión</p>
          </div>
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
