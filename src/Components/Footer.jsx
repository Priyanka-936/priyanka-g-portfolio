import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-[#1E1E1E] text-white mt-40 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-8 text-center">

        <h1 className="text-4xl font-bold text-[#D4AF37]">
          Priyanka G
        </h1>

        <p className="mt-4 text-xl tracking-widest">
          THINK • BUILD • TRANSFORM
        </p>

        <p className="mt-8 text-lg text-gray-300">
          Engineering Ideas into Experiences.
        </p>

        <div className="mt-10 space-y-3">

          <p>
            📧 priyankagopi12999@gmail.com
          </p>

          <p>
            💼 LinkedIn | 💻 GitHub | 🧩 LeetCode
          </p>

        </div>

        <div className="mt-10 border-t border-gray-700 pt-6">

          <p className="text-gray-400">
            © 2026 Priyanka G. All Rights Reserved.
          </p>

        </div>

      </div>
    </motion.footer>
  );
}

export default Footer;
