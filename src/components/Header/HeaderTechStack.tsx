import { motion } from 'framer-motion';
import {
  TypeScriptIcon,
  ReactIcon,
  TailwindCssIcon,
  NextJsIcon,
  FigmaIcon,
  VSCodeIcon,
} from '@/components/Icons';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const HeaderTechStack = () => {
  return (
    <div>
      <motion.p
        className="mb-2.5 text-sm text-gray-600 dark:text-slate-400"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        current favorite tech stack/tools:
      </motion.p>
      <motion.ul
        className="flex items-center gap-4 text-gray-500 dark:text-slate-500"
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.04 }}
      >
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#3178C6]">
            <TypeScriptIcon className="h-6 w-6" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#61DAFB]">
            <ReactIcon className="h-6 w-6" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#06B6D4]">
            <TailwindCssIcon className="h-6 w-6" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]">
            <NextJsIcon className="h-6 w-6" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#007ACC]">
            <VSCodeIcon className="h-6 w-6" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#F24E1E]">
            <FigmaIcon className="h-6 w-6" />
          </div>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default HeaderTechStack;
