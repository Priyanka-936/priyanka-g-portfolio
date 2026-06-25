import { motion } from "framer-motion";

function Certifications() {
  const certifications = [
    {
      provider: "PrepInsta",
      items: [
        "AWS Data Analytics",
        "Operating Systems",
        "Cloud Computing",
        "DSA in Java",
        "Data Science"
      ]
    },
    {
      provider: "IBM SkillsBuild",
      items: [
        "Enterprise Design Thinking Practitioner",
        "Enterprise Design Thinking Co-Creator",
        "Enterprise Design Thinking Team Essentials"
      ]
    },
    {
      provider: "Microsoft",
      items: [
        "Microsoft Azure AI Fundamentals (AI-900)"
      ]
    },
    {
      provider: "Oracle",
      items: [
        "Oracle Cloud Infrastructure Foundations",
        "Oracle Database Foundations"
      ]
    }
  ];

  return (
    <motion.section
      id="certifications"
      className="max-w-6xl mx-auto mt-40 px-8 scroll-mt-32"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {certifications.map((group, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 30px rgba(212,175,55,0.3)"
            }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-3xl shadow-lg"
          >
            <h3 className="text-3xl font-bold text-yellow-600 mb-6">
              {group.provider}
            </h3>

            <ul className="space-y-4 text-lg">
              {group.items.map((cert, idx) => (
                <li key={idx}>
                  🏆 {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

      </div>
    </motion.section>
  );
}

export default Certifications;