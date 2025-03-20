import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaShieldAlt, FaFileAlt, FaArrowUp, FaExclamationTriangle, FaPlayCircle } from 'react-icons/fa';
// @ts-ignore
import logo from '../Logo.png';
// @ts-ignore
import heroVideo from '../public/hero.mp4';
// @ts-ignore
import safety1 from '../public/images/safety1.svg';
// @ts-ignore
import safety2 from '../public/images/safety2.svg';
// @ts-ignore
import safety3 from '../public/images/safety3.svg';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const isAboutInView = useInView(aboutRef);
  const isServicesInView = useInView(servicesRef);
  const isContactInView = useInView(contactRef);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // כאן יהיה הטיפול בשליחת הטופס
    console.log('Form submitted:', formData);
  };

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

      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E3C72] to-[#2a5298] z-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-20" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white"
          >
            <img src={logo} alt="מ.ו בטיחות ותברואה" className="w-48 md:w-64 mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              המומחים ברישוי
              <br />
              <span className="text-[#E31E24]">מוסדות חינוך</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              25 שנות ניסיון במתן פתרונות רישוי מקיפים למוסדות חינוך.
              אנחנו מטפלים בכל התהליך - אתם מתמקדים בחינוך.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E31E24] text-white px-8 py-4 rounded-lg font-medium text-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                דברו איתנו עכשיו
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium text-xl flex items-center gap-2"
              >
                <FaPlayCircle />
                <span>צפו בסרטון</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* About Section with Parallax Images */}
      <section id="about" ref={aboutRef} className="py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] overflow-hidden rounded-2xl">
              <motion.div
                style={{
                  y: useTransform(scrollYProgress, [0.2, 0.4], [0, -100])
                }}
                className="absolute inset-0"
              >
                <img src={safety1} alt="בטיחות במוסדות חינוך" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            <div>
              <motion.h2
                initial={{ x: 100, opacity: 0 }}
                animate={isAboutInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                className="text-4xl font-bold mb-6"
              >
                25 שנות מצוינות בבטיחות
              </motion.h2>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                animate={isAboutInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                חברת מ.ו בטיחות ותברואה מובילה את תחום בטיחות מוסדות החינוך בישראל.
                אנו מספקים פתרונות מקיפים ומקצועיים, תוך שימת דגש על איכות, אמינות ושירות מעולה.
              </motion.p>
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={isAboutInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="text-4xl font-bold text-[#E31E24] mb-2">+1000</div>
                  <div className="text-gray-600">לקוחות מרוצים</div>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={isAboutInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="text-4xl font-bold text-[#1E3C72] mb-2">100%</div>
                  <div className="text-gray-600">שביעות רצון</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section with Interactive Cards */}
      <section id="services" ref={servicesRef} className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            className="text-4xl font-bold text-center mb-16"
          >
            השירותים שלנו
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "אישור בטיחות",
                description: "בדיקות מקיפות ומקצועיות לפי תקנים",
                icon: FaShieldAlt,
                image: safety1
              },
              {
                title: "אישור תברואן",
                description: "בדיקות תברואה מקיפות",
                icon: FaCheckCircle,
                image: safety2
              },
              {
                title: "חידוש רישיון",
                description: "טיפול מלא בחידוש רישיונות",
                icon: FaFileAlt,
                image: safety3
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="relative p-8 h-[400px] flex flex-col justify-end text-white">
                  <service.icon className="text-4xl mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/80">{service.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300"
                  >
                    למידע נוסף
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-[#1E3C72] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              צרו איתנו קשר
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isContactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-gray-700 mb-2">שם מלא</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1E3C72] focus:ring-2 focus:ring-[#1E3C72]/20 transition-all duration-300"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isContactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-gray-700 mb-2">טלפון</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1E3C72] focus:ring-2 focus:ring-[#1E3C72]/20 transition-all duration-300"
                    required
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-gray-700 mb-2">אימייל</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1E3C72] focus:ring-2 focus:ring-[#1E3C72]/20 transition-all duration-300"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-gray-700 mb-2">הודעה</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1E3C72] focus:ring-2 focus:ring-[#1E3C72]/20 transition-all duration-300"
                  required
                />
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#E31E24] text-white py-4 rounded-lg font-medium text-lg hover:bg-[#ff2b32] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                שליחה
              </motion.button>
            </form>
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