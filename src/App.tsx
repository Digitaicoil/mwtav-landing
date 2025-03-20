import { motion, useScroll, useTransform } from 'framer-motion';
import { FaShieldAlt, FaFileAlt, FaCheckCircle, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import logo from './Logo.png';

const App = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  const services = [
    {
      title: 'אישורי בטיחות',
      icon: FaShieldAlt,
      description: 'אישורי בטיחות מקיפים לעסקים ומוסדות'
    },
    {
      title: 'רישוי עסקים',
      icon: FaFileAlt,
      description: 'ליווי מלא בתהליך רישוי העסק'
    },
    {
      title: 'בטחון ואבטחה',
      icon: FaCheckCircle,
      description: 'פתרונות אבטחה מתקדמים'
    }
  ];

  const contactMethods = [
    {
      type: 'phone',
      icon: FaPhone,
      value: '054-123-4567',
      action: 'tel:054-123-4567'
    },
    {
      type: 'whatsapp',
      icon: FaWhatsapp,
      value: 'WhatsApp',
      action: 'https://wa.me/972541234567'
    },
    {
      type: 'email',
      icon: FaEnvelope,
      value: 'contact@mwtav.co.il',
      action: 'mailto:contact@mwtav.co.il'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary text-white">
      {/* Hero Section */}
      <motion.div 
        className="relative h-screen flex items-center justify-center"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <img src={logo} alt="MWTAV Logo" className="mx-auto w-48 mb-8" />
            <h1 className="text-5xl font-bold mb-6">המומחים בריכוז אישורי בטיחות</h1>
            <p className="text-xl mb-12">25 שנות ניסיון בתחום • מעל 1000+ לקוחות מרוצים</p>
            
            <div className="flex justify-center gap-6">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.type}
                  href={method.action}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  <method.icon className="w-12 h-12 mb-2" />
                  <span className="mt-2">{method.value}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="py-20 bg-gradient-to-b from-secondary/90 to-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">השירותים שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <service.icon className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-center mb-4">{service.title}</h3>
                <p className="text-center text-gray-200">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%] animate-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 p-8 rounded-3xl backdrop-blur-md"
          >
            <h2 className="text-4xl font-bold mb-6">צריכים עזרה עם אישורי בטיחות?</h2>
            <p className="text-xl mb-8">צוות המומחים שלנו כאן בשבילכם</p>
            <motion.a
              href="tel:054-123-4567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              התקשרו עכשיו
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default App; 