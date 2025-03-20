import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaWhatsapp, FaEnvelope, FaCheckCircle, FaShieldAlt, FaClock, FaFileAlt, FaArrowUp, FaExclamationTriangle } from 'react-icons/fa';
// @ts-ignore
import logo from '../Logo.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Emergency Banner */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-[#E31E24] text-white py-2 px-4 text-center sticky top-0 z-50 shadow-lg"
      >
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <FaExclamationTriangle className="animate-pulse" />
          <span>חובה לחדש רישיון עד 2025 - צרו קשר עוד היום!</span>
          <a href="tel:046451113" className="underline hover:no-underline">04-6451113</a>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="min-h-[90vh] relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1E3C72] to-[#2a5298]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E3C72]/50 to-[#1E3C72]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-right"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <img src={logo} alt="מ.ו בטיחות ותברואה" className="w-48 md:w-64" />
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                המומחים ברישוי <br />
                <span className="text-[#E31E24]">מוסדות חינוך</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                חברה מובילה עם מעל 25 שנות ניסיון במתן פתרונות רישוי מקיפים למוסדות חינוך.
                אנחנו מטפלים בכל התהליך - אתם מתמקדים בחינוך.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://wa.me/972509150665"
                  className="bg-[#E31E24] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#ff2b32] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>דברו איתנו בוואטסאפ</span>
                </a>
                <a
                  href="tel:046451113"
                  className="bg-white text-[#1E3C72] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FaPhone className="text-xl" />
                  <span>04-6451113</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">למה לבחור בנו?</h2>
                <p className="text-white/80">החברה המובילה בישראל לרישוי מוסדות חינוך</p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    icon: FaShieldAlt,
                    title: "מקצועיות ואמינות",
                    description: "צוות מומחים מנוסה עם ידע נרחב"
                  },
                  {
                    icon: FaClock,
                    title: "25+ שנות ניסיון",
                    description: "אלפי פרויקטים מוצלחים"
                  },
                  {
                    icon: FaFileAlt,
                    title: "ליווי מלא ומקיף",
                    description: "מהשלב הראשון ועד לקבלת הרישיון"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-[#E31E24] p-3 rounded-lg">
                        <item.icon className="text-2xl text-white" />
                      </div>
                      <div className="text-right">
                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-white/70">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3C72] to-transparent opacity-10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1E3C72] to-[#E31E24]">
              אודות מ.ו בטיחות ותברואה
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              חברת מ.ו בטיחות ותברואה הינה חברה מובילה וותיקה עם מעל 25 שנים של ניסיון ומוניטין המספקת את כל מבדקי הבטיחות השנתיים למוסדות חינוכיים ולעסקים.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-[#1E3C72] text-5xl font-bold mb-4">25+</div>
              <h3 className="text-xl font-semibold mb-2">שנות ניסיון</h3>
              <p className="text-gray-600">ניסיון עשיר בתחום הבטיחות והתברואה</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-[#E31E24] text-5xl font-bold mb-4">1000+</div>
              <h3 className="text-xl font-semibold mb-2">לקוחות מרוצים</h3>
              <p className="text-gray-600">מוסדות חינוך ועסקים ברחבי הארץ</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-[#1E3C72] text-5xl font-bold mb-4">100%</div>
              <h3 className="text-xl font-semibold mb-2">הצלחה</h3>
              <p className="text-gray-600">מחויבות מלאה להצלחת הלקוחות שלנו</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">השירותים שלנו</h2>
            <p className="text-xl text-gray-600">פתרון מקיף לכל צרכי הרישוי והבטיחות</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "אישור בטיחות למשרד החינוך",
                description: "בדיקות מקיפות ומקצועיות לפי תקנים",
                icon: FaShieldAlt
              },
              {
                title: "אישור תברואן מומחה",
                description: "בדיקות תברואה מקיפות ומקצועיות",
                icon: FaCheckCircle
              },
              {
                title: "בדיקות חשמל ומבנה",
                description: "סככות, תקרות, יציבות ועוד",
                icon: FaFileAlt
              },
              {
                title: "בדיקות ציוד כיבוי אש",
                description: "מערכות מים ומתקני משחק",
                icon: FaShieldAlt
              },
              {
                title: "חידוש רישיון מעון",
                description: "טיפול מלא ללא מאמץ מצדכם",
                icon: FaFileAlt
              },
              {
                title: "תיעוד ואישורים",
                description: "אישורי אדריכל ויועץ נגישות",
                icon: FaCheckCircle
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="bg-gradient-to-r from-[#1E3C72] to-[#E31E24] p-3 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E3C72] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                צריכים עזרה עם רישוי המוסד?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                צוות המומחים שלנו כאן בשבילכם 24/7. צרו קשר עוד היום!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/972509150665"
                  className="bg-[#E31E24] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#ff2b32] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>וואטסאפ</span>
                </a>
                <a
                  href="tel:046451113"
                  className="bg-white text-[#1E3C72] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FaPhone className="text-xl" />
                  <span>התקשרו עכשיו</span>
                </a>
                <a
                  href="mailto:info@mwtav.com"
                  className="bg-white/10 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                >
                  <FaEnvelope className="text-xl" />
                  <span>שלחו מייל</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaWhatsapp className="text-3xl text-[#E31E24] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">וואטסאפ</h3>
              <a href="https://wa.me/972509150665" className="text-gray-600 hover:text-[#E31E24]">
                050-915-0665
              </a>
            </div>
            <div className="text-center">
              <FaPhone className="text-3xl text-[#1E3C72] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">טלפון</h3>
              <a href="tel:046451113" className="text-gray-600 hover:text-[#1E3C72]">
                04-6451113
              </a>
            </div>
            <div className="text-center">
              <FaEnvelope className="text-3xl text-[#E31E24] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">אימייל</h3>
              <a href="mailto:info@mwtav.com" className="text-gray-600 hover:text-[#E31E24]">
                info@mwtav.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#E31E24] text-white p-4 rounded-full shadow-lg hover:bg-[#ff2b32] transition-all duration-300 transform hover:-translate-y-1 z-50"
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App; 