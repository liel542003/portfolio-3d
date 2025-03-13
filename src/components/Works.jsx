import { motion } from 'framer-motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => {
  const projects = [
    {
      name: "متجر إلكتروني",
      description: "منصة تجارة إلكترونية متكاملة مع نظام دفع وإدارة مخزون",
      image: "/project1.jpg",
      link: "https://example.com",
      tags: [
        { name: "React", color: "text-blue-500" },
        { name: "Node.js", color: "text-green-500" },
      ],
      source_code_link: "https://github.com/abdal/project1",
    },
    {
      name: "تطبيق تعليمي",
      description: "منصة تعليمية تفاعلية مع دروس ثلاثية الأبعاد",
      image: "/project2.jpg",
      link: "https://example.com",
      tags: [
        { name: "Angular", color: "text-red-500" },
        { name: "MongoDB", color: "text-yellow-500" },
      ],
      source_code_link: "https://github.com/abdal/project2",
    },
    {
      name: "تطبيق الطقس",
      description: "تطبيق طقس مع تأثيرات متحركة وتحديثات مباشرة",
      image: "/project3.jpg",
      link: "https://example.com",
      tags: [
        { name: "Vue.js", color: "text-green-500" },
        { name: "Firebase", color: "text-orange-500" },
      ],
      source_code_link: "https://github.com/abdal/project3",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>مشاريعي</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>المشاريع</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-right mx-auto"
        >
          المشاريع التالية تعرض مهاراتي وخبرتي من خلال أمثلة عملية من عملي. كل مشروع
          موضح بإيجاز مع روابط إلى مستودعات الكود. وهي تعكس قدرتي على حل المشاكل
          المعقدة، والعمل مع تقنيات مختلفة، وإدارة المشاريع بشكل فعال.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Works;
