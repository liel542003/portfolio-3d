import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');

  const navLinks = [
    {
      id: "about",
      title: "عني",
    },
    {
      id: "work",
      title: "أعمالي",
    },
    {
      id: "contact",
      title: "تواصل",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary bg-opacity-90 backdrop-blur-sm"
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            عبدالله &nbsp;
            <span className="sm:block hidden text-[#915EFF]"> | مطور واجهات</span>
          </p>
        </motion.div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              whileHover={{ scale: 1.1 }}
              className={`${
                active === nav.title ? "text-[#915EFF]" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
