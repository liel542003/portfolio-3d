import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/share/15jjDm67fo/?mibextid=wwXIfr',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/abdullah_amr54?igsh=MTFpeGRxdWN5MGN0dg%3D%3D&utm_source=qr',
      color: 'hover:text-pink-500'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/201550453728',
      color: 'hover:text-green-500'
    }
  ]

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="flex gap-6 mt-8"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 text-2xl transition-all duration-300 ${social.color} transform hover:scale-125`}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 + index * 0.2 }}
        >
          <social.icon />
        </motion.a>
      ))}
    </motion.div>
  )
}

export default SocialIcons
