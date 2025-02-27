import { Separator } from "../ui/separator";

export default function AboutHero() {
  return (
    <section className="py-48 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Gestión Inteligente para tu Camping</h1>
        <Separator className="w-24 h-1 mx-auto bg-blue-600 my-6" />
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          SoftCamp es un software especializado para campings pequeños y medianos, validado por expertos del sector. Con un 90% de satisfacción entre gestores, optimizamos tu ocupación y automatizamos tu gestión diaria.
        </p>
      </div>
    </section>
  );
}