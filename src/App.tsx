import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaWhatsapp, FaEnvelope, FaCheckCircle, FaShieldAlt, FaClock, FaFileAlt, FaArrowUp } from 'react-icons/fa';
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#1E3C72] to-[#E31E24] animate-gradient"
          style={{ opacity }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4 max-w-4xl mx-auto"
        >
          <motion.img
            src={logo}
            alt="מ.ו בטיחות ותברואה"
            className="w-48 md:w-64 mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white relative">
              רישוי מעונות 2025 – דחוף!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              מוסדות חינוך? רישיון מעון? אל תחכו לרגע האחרון!
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-warning/20 text-white p-4 rounded-lg mb-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
              <p className="text-lg font-semibold relative">חובה לחדש את הרישיון לפני שנת הלימודים החדשה!</p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg bg-white text-primary hover:bg-white/90 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">צרו קשר עכשיו</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-4 space-x-reverse"
          >
            {[
              { icon: FaShieldAlt, text: "פיקוח חיצוני מלא" },
              { icon: FaClock, text: "25+ שנות ניסיון" },
              { icon: FaFileAlt, text: "תהליך מהיר וקל" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 group hover:bg-white/20 transition-all duration-300"
              >
                <item.icon className="text-2xl text-white mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-white text-sm">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1 group">
            <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto group-hover:scale-110 transition-transform" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-gray-50 to-white opacity-50" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              כל הבדיקות | כל האישורים | הכל במקום אחד!
            </h2>
            <p className="text-xl text-gray-600">אנחנו דואגים לכל הניירת, אתם בראש שקט</p>
          </motion.div>

          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "אישור בטיחות חובה למשרד החינוך",
                description: "בדיקות מקיפות ומקצועיות לפי תקנים"
              },
              {
                title: "אישור תברואן מומחה",
                description: "בדיקות תברואה מקיפות ומקצועיות"
              },
              {
                title: "בדיקות חשמל ומבנה",
                description: "סככות, תקרות, יציבות ועוד"
              },
              {
                title: "בדיקות ציוד כיבוי אש",
                description: "מערכות מים ומתקני משחק"
              },
              {
                title: "חידוש רישיון מעון",
                description: "טיפול מלא ללא מאמץ מצדכם"
              },
              {
                title: "תיעוד מלא",
                description: "אישורי אדריכל ויועץ נגישות"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card group hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start space-x-4 space-x-reverse relative">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <FaCheckCircle className="text-primary text-2xl group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-conic from-primary/5 via-secondary/5 to-primary/5 animate-gradient" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">למה לבחור בנו?</h2>
            <p className="text-xl text-gray-600">אנחנו דואגים להכול – אתם מתמקדים בחינוך!</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-bold mb-4 text-primary relative">בלי דוחות. בלי עיכובים.</h3>
              <p className="text-gray-600 mb-6 relative">אנחנו מטפלים בכל הניירת והבירוקרטיה, כך שתוכלו להתמקד במה שחשוב באמת - החינוך.</p>
              <ul className="space-y-3 relative">
                <li className="flex items-center space-x-2 space-x-reverse group/item">
                  <FaCheckCircle className="text-success group-hover/item:scale-110 transition-transform" />
                  <span>תהליך מהיר ויעיל</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse group/item">
                  <FaCheckCircle className="text-success group-hover/item:scale-110 transition-transform" />
                  <span>ליווי מקצועי צמוד</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse group/item">
                  <FaCheckCircle className="text-success group-hover/item:scale-110 transition-transform" />
                  <span>שקט נפשי מלא</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white rounded-2xl p-8 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-bold mb-4 relative">רישוי בטוח = שקט נפשי!</h3>
              <p className="mb-6 relative">אל תחכו לרגע האחרון. צרו איתנו קשר עכשיו ונוכל לעזור לכם בכל התהליך.</p>
              <div className="space-y-4 relative">
                <a
                  href="https://wa.me/972509150665"
                  className="flex items-center justify-center space-x-2 space-x-reverse bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors group/btn"
                >
                  <FaWhatsapp className="text-xl group-hover/btn:scale-110 transition-transform" />
                  <span>צור קשר בוואטסאפ</span>
                </a>
                <a
                  href="tel:046451113"
                  className="flex items-center justify-center space-x-2 space-x-reverse bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors group/btn"
                >
                  <FaPhone className="text-xl group-hover/btn:scale-110 transition-transform" />
                  <span>התקשר עכשיו</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-gray-50 to-white opacity-50" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-warning/10 rounded-2xl p-8 mb-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="section-title text-warning relative">צרו קשר עכשיו – לפני שיהיה מאוחר מדי!</h2>
            <p className="text-xl text-gray-600 mb-8 relative">אנחנו כאן בשבילכם 24/7</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: FaWhatsapp,
                title: "וואטסאפ",
                text: "+972 50‑915‑0665",
                color: "text-success",
                href: "https://wa.me/972509150665"
              },
              {
                icon: FaPhone,
                title: "טלפון",
                text: "04-6451113",
                color: "text-primary",
                href: "tel:046451113"
              },
              {
                icon: FaEnvelope,
                title: "אימייל",
                text: "info@mwtav.com",
                color: "text-accent",
                href: "mailto:info@mwtav.com"
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className={`text-3xl ${item.color} mb-4 group-hover:scale-110 transition-transform relative`} />
                <span className="text-lg font-medium relative">{item.title}</span>
                <span className="text-gray-600 relative">{item.text}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section - NEW */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-gray-50 to-white opacity-50" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-[#1E3C72] to-[#E31E24]">
              אודות מ.ו בטיחות ותברואה
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E3C72]/5 to-[#E31E24]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="md:w-1/3">
                  <img src={logo} alt="מ.ו בטיחות ותברואה" className="w-full h-auto" />
                </div>
                <div className="md:w-2/3 text-right">
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    חברת מ.ו בטיחות ותברואה הינה חברה מובילה וותיקה עם מעל 25 שנים של ניסיון ומוניטין המספקת את כל מבדקי הבטיחות השנתיים למוסדות חינוכיים ולעסקים.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    מ.ו הנה החברה המובילה בישראל שמתמחה ברישוי מקיף עבור מוסדות חינוך בפריסה ארצית.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl group/card hover:bg-gray-100 transition-colors">
                  <div className="text-[#1E3C72] text-4xl font-bold mb-2">25+</div>
                  <div className="text-gray-600">שנות ניסיון</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl group/card hover:bg-gray-100 transition-colors">
                  <div className="text-[#E31E24] text-4xl font-bold mb-2">1000+</div>
                  <div className="text-gray-600">לקוחות מרוצים</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl group/card hover:bg-gray-100 transition-colors">
                  <div className="text-[#1E3C72] text-4xl font-bold mb-2">100%</div>
                  <div className="text-gray-600">שביעות רצון</div>
                </div>
              </div>
            </div>
          </motion.div>
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
            className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors group z-50"
          >
            <FaArrowUp className="text-xl group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Update colors in other sections to match logo */}
      <style>
        {`
          .btn-primary {
            background-color: #1E3C72;
          }
          .text-primary {
            color: #1E3C72;
          }
          .text-secondary {
            color: #E31E24;
          }
          .from-primary {
            --tw-gradient-from: #1E3C72;
          }
          .to-secondary {
            --tw-gradient-to: #E31E24;
          }
        `}
      </style>
    </div>
  );
}

export default App; 