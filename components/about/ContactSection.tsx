import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Contacto</h2>
        <Separator className="w-24 h-1 mx-auto bg-blue-600 mb-12" />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">Información de Contacto</h3>
            <Separator className="w-16 h-0.5 bg-blue-600 mb-4" />
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>Sevilla, España</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span>
                <span>info@softcamp.eu</span>
              </p>
              <p className="flex items-center gap-2">
                <span>🌐</span>
                <span className="hover:text-primary-700"><a href="https://softcamp.eu">softcamp.eu</a></span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>+34 900 123 456</span>
              </p>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <Input 
                  type="text"
                  placeholder="Su Nombre"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Su Email"
                />
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Ventas</SelectItem>
                    <SelectItem value="support">Soporte Técnico</SelectItem>
                    <SelectItem value="demo">Solicitar Demo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Textarea
                  placeholder="Su Mensaje"
                  className="h-32"
                />
              </div>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}