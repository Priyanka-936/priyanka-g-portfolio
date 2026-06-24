import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="connect"
      className="max-w-6xl mx-auto mt-40 px-8"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Connect
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Email */}
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(212,175,55,0.3)"
          }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-3xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-yellow-600">
            📧 Email
          </h3>

          <p className="mt-4 text-lg">
            priyankagopi12999@gmail.com
          </p>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(212,175,55,0.3)"
          }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-3xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-yellow-600">
            💼 LinkedIn
          </h3>

          <a
            href="https://www.linkedin.com/in/priyanka-g-ece"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-blue-600 hover:underline"
          >
            linkedin.com/in/priyanka-g-ece
          </a>
        </motion.div>

        {/* GitHub */}
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(212,175,55,0.3)"
          }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-3xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-yellow-600">
            💻 GitHub
          </h3>

          <a
            href="https://github.com/Priyanka-936"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-blue-600 hover:underline"
          >
            github.com/Priyanka-936
          </a>
        </motion.div>

        {/* LeetCode */}
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(212,175,55,0.3)"
          }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-3xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-yellow-600">
            🧩 LeetCode
          </h3>

          <a
            href="https://leetcode.com/u/Priyanka___G/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-blue-600 hover:underline"
          >
            leetcode.com/u/Priyanka___G/
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Contact;

