import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaStar, FaFilter } from 'react-icons/fa'
import Stars from './canvas/Stars'

const ConceptGallery = () => {
  const [selectedConcept, setSelectedConcept] = useState(null)
  const [filter, setFilter] = useState('all')
  
  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'web', name: 'مواقع ويب' },
    { id: 'mobile', name: 'تطبيقات موبايل' },
    { id: 'design', name: 'تصميم' }
  ]

  const concepts = [
    {
      id: 1,
      title: 'كافيه عصري',
      category: 'web',
      rating: 4.8,
      skills: [
        { name: 'تصميم واجهة المستخدم', progress: 95 },
        { name: 'تجربة المستخدم', progress: 90 },
        { name: 'الأداء', progress: 85 }
      ],
      description: 'تجربة رقمية فريدة لكافيه عصري، تجمع بين السرعة والأناقة. موقع يتميز بأداء فائق وواجهة سلسة تضمن تجربة حجز وطلب مميزة لكل زائر',
      features: [
        'حجز فوري للطاولات مع تأكيد لحظي',
        'قائمة طعام ذكية مع توصيات شخصية',
        'نظام طلب سريع مع تتبع مباشر',
        'برنامج ولاء متطور مع مكافآت فورية',
        'دعم فني على مدار الساعة',
        'تحديثات مستمرة للمحتوى والعروض'
      ],
      performance: [
        'تحميل فائق السرعة للصفحات',
        'تجربة سلسة على جميع الأجهزة',
        'تحديثات فورية للمعلومات'
      ],
      mockupPreview: 'تصميم عصري يركز على تجربة المستخدم',
      color: 'from-purple-900 to-indigo-900',
      icon: '☕',
      timeline: '1-2 أسابيع'
    },
    {
      id: 2,
      title: 'شركة تقنية',
      category: 'web',
      rating: 4.9,
      skills: [
        { name: 'برمجة متقدمة', progress: 95 },
        { name: 'تحسين محركات البحث', progress: 90 },
        { name: 'أمان المواقع', progress: 95 }
      ],
      description: 'منصة تقنية متطورة تقدم تجربة مستخدم استثنائية. نركز على الأداء العالي والتفاعل السلس مع ضمان دعم فني متميز على مدار الساعة',
      features: [
        'عرض مشاريع تفاعلي مع تأثيرات سلسة',
        'نظام تواصل مباشر مع الفريق',
        'منصة خدمات متكاملة وسريعة',
        'نظام حجز مواعيد ذكي',
        'تحديثات مستمرة للمحتوى',
        'دعم فني متخصص 24/7'
      ],
      performance: [
        'أداء عالي على جميع المتصفحات',
        'تحميل سريع للمحتوى التفاعلي',
        'استجابة فورية لطلبات المستخدم'
      ],
      mockupPreview: 'واجهة متطورة مع أداء فائق',
      color: 'from-blue-900 to-violet-900',
      icon: '💻',
      timeline: '2-3 أسابيع'
    },
    {
      id: 3,
      title: 'متجر إلكتروني',
      category: 'web',
      rating: 4.7,
      skills: [
        { name: 'تطوير المتاجر', progress: 90 },
        { name: 'أنظمة الدفع', progress: 95 },
        { name: 'تحسين الأداء', progress: 85 }
      ],
      description: 'منصة تسوق متطورة تقدم تجربة شراء سريعة وآمنة. نضمن أداءً عالياً وسرعة تحميل فائقة مع دعم فني متواصل لضمان تجربة تسوق مثالية',
      features: [
        'تصفح سريع مع فلترة ذكية',
        'سلة تسوق متطورة مع حفظ تلقائي',
        'نظام دفع آمن ومتعدد الخيارات',
        'متابعة مباشرة للطلبات',
        'نظام توصيات ذكي',
        'دعم فني متواصل للمساعدة'
      ],
      performance: [
        'تحميل فوري لصور المنتجات',
        'بحث سريع مع نتائج فورية',
        'معالجة آمنة وسريعة للمدفوعات'
      ],
      mockupPreview: 'تصميم عصري يركز على سهولة التسوق',
      color: 'from-indigo-900 to-purple-900',
      icon: '🛍️',
      timeline: '2 أسابيع'
    }
  ]

  const filteredConcepts = filter === 'all' ? concepts : concepts.filter(c => c.category === filter)

  const CircularProgress = ({ progress, size = 60 }) => (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={(size - 10) / 2}
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          className="text-gray-700"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={(size - 10) / 2}
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={((size - 10) / 2) * Math.PI * 2}
          strokeDashoffset={((100 - progress) / 100) * ((size - 10) / 2) * Math.PI * 2}
          className="text-blue-500 transition-all duration-1000 ease-out"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
        {progress}%
      </span>
    </div>
  )

  const StarRating = ({ rating }) => (
    <div className="flex items-center space-x-1 flex-row-reverse">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`${
            i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-400'
          } ${i === Math.floor(rating) && rating % 1 > 0 ? 'text-yellow-400 opacity-50' : ''}`}
        />
      ))}
      <span className="mr-2 text-gray-300">{rating}</span>
    </div>
  )

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0a0f] text-white py-16 px-4 md:px-8 relative overflow-hidden"
    >
      <Stars />
      
      <motion.h1 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
      >
        معرض التصاميم المستقبلية
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-center mb-8 max-w-2xl mx-auto"
      >
        نقدم تجربة رقمية فريدة تجمع بين الأداء العالي والتصميم المتميز
      </motion.p>

      <div className="flex justify-center mb-8 space-x-4 flex-row-reverse">
        {categories.map(category => (
          <motion.button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${
              filter === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFilter className="ml-2" />
            <span>{category.name}</span>
          </motion.button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredConcepts.map((concept, index) => (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div 
                className={`p-6 rounded-xl bg-gradient-to-br ${concept.color} bg-opacity-20 backdrop-blur-sm
                           border border-gray-800 hover:border-gray-600 transition-all duration-300
                           transform hover:scale-105 cursor-pointer h-full shadow-xl`}
                onClick={() => setSelectedConcept(concept)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl">{concept.icon}</div>
                  <StarRating rating={concept.rating} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{concept.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{concept.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 mb-2">المميزات الرئيسية</h4>
                    <ul className="space-y-2">
                      {concept.features.slice(0, 3).map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <span className="mr-2">•</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 text-sm text-gray-400">
                    مدة التنفيذ: {concept.timeline}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedConcept && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedConcept(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`bg-gradient-to-br ${selectedConcept.color} bg-opacity-20 backdrop-blur-lg
                        p-8 rounded-2xl max-w-4xl w-full border border-gray-800 max-h-[90vh] overflow-y-auto
                        shadow-2xl`}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="text-6xl mr-4">{selectedConcept.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedConcept.title}</h2>
                    <p className="text-gray-400">{selectedConcept.mockupPreview}</p>
                  </div>
                </div>
                <StarRating rating={selectedConcept.rating} />
              </div>
              
              <p className="text-gray-300 mb-8 text-lg">{selectedConcept.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-200">المميزات</h3>
                  <ul className="space-y-3">
                    {selectedConcept.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <span className="mr-3 text-xl">•</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-200">المهارات والكفاءات</h3>
                  <div className="space-y-6">
                    {selectedConcept.skills.map((skill, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-gray-300 ml-4">{skill.name}</span>
                        <CircularProgress progress={skill.progress} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">الأداء والسرعة</h3>
                <ul className="space-y-3">
                  {selectedConcept.performance.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <span className="mr-3 text-xl">⚡</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">مدة التنفيذ: {selectedConcept.timeline}</span>
                  <button
                    className="px-6 py-2 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300"
                    onClick={() => setSelectedConcept(null)}
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ConceptGallery
