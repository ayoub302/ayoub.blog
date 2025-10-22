import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const services = [
  {
    title: "Página Web Básica",
    price: "100€",
    paymentLink: import.meta.env.VITE_STRIPE_BASIC_PAYMENT_LINK,
    duration: "2 semanas",
    features: [
      "Diseño web moderno y responsive",
      "Optimizada para Google y móviles",
      "Integración con Google Maps",
      "Galería de fotos de tu negocio",
      "Formulario de contacto",
      "Soporte técnico por 30 días",
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Tienda Online Profesional",
    price: "300€",
    paymentLink: import.meta.env.VITE_STRIPE_PROFESSIONAL_PAYMENT_LINK,
    duration: "4 semanas",
    features: [
      "Desarrollo con React.js moderna",
      "Base de datos MongoDB/Prisma",
      "Carrito de compras completo",
      "Gestión de productos fácil",
      "Pasarela de pagos segura",
      "Soporte mensual: 10€ (opcional)",
    ],
    popular: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Plataforma Completa",
    price: "500€",
    paymentLink: import.meta.env.VITE_STRIPE_PREMIUM_PAYMENT_LINK,
    duration: "6 semanas",
    features: [
      "Sistema Fullstack avanzado",
      "Panel de admin profesional",
      "Autenticación segura (NextAuth)",
      "Sistema de usuarios y roles",
      "API REST personalizada",
      "Logs de actividad y seguridad",
      "Dashboard con analytics",
    ],
    popular: false,
    color: "from-orange-500 to-red-500",
  },
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ${
      service.popular ? "transform scale-105" : ""
    }`}
  >
    <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[450px] w-full flex flex-col">
      {service.popular && (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-4 self-start">
          ⭐ MÁS POPULAR
        </div>
      )}

      <h3
        className={`text-white text-[24px] font-bold ${
          service.popular ? "text-[28px]" : ""
        }`}
      >
        {service.title}
      </h3>

      <div className="mt-4">
        <span className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-yellow-400 to-orange-400">
          {service.price}
        </span>
        <span className="text-white-100 ml-2">• {service.duration}</span>
      </div>

      <ul className="mt-6 space-y-3 flex-grow">
        {service.features.map((feature, idx) => (
          <li
            key={idx}
            className="text-white-100 text-[14px] pl-2 border-l-2 border-white/20"
          >
            ✅ {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => (window.location.href = service.paymentLink)}
        className="w-full bg-gradient-to-r from-green-500 to-blue-500 py-3 px-6 rounded-xl text-white font-bold hover:scale-105 transition-transform duration-300 mt-auto"
      >
        ¡Comprar Ahora!
      </button>

      {service.popular && (
        <div className="mt-4 text-center">
          <span className="text-green-400 text-sm">
            🔥 15 clientes satisfechos este mes
          </span>
        </div>
      )}
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Lo que ofrezco</p>
        <h2 className={styles.sectionHeadText}>Servicios de Desarrollo.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Transformo tu visión en realidad digital. Desde páginas web simples
        hasta plataformas complejas, cada proyecto recibe atención personalizada
        y soluciones innovadoras.
        <span className="text-white font-bold">
          {" "}
          ¡Tu éxito es mi prioridad!
        </span>
      </motion.p>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <div key={service.title} className="w-full max-w-[400px]">
            <ServiceCard index={index} service={service} />
          </div>
        ))}
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="mt-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-white/10"
      >
        <h3 className="text-white text-2xl font-bold text-center mb-6">
          🛡️ Garantías Incluidas en Todos los Planes
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="text-white">
            <div className="text-3xl mb-2">💎</div>
            <h4 className="font-bold mb-2">Calidad Premium</h4>
            <p className="text-white-100 text-sm">Código limpio y mantenible</p>
          </div>
          <div className="text-white">
            <div className="text-3xl mb-2">🚀</div>
            <h4 className="font-bold mb-2">Entrega Rápida</h4>
            <p className="text-white-100 text-sm">
              Cumplimos los plazos prometidos
            </p>
          </div>
          <div className="text-white">
            <div className="text-3xl mb-2">📞</div>
            <h4 className="font-bold mb-2">Soporte Continuo</h4>
            <p className="text-white-100 text-sm">Estamos aquí para ayudarte</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Services, "services");
