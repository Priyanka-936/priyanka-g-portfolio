import { motion } from "framer-motion";
function Education() {
  return (
    <motion.section
  id="education"
  className="max-w-6xl mx-auto mt-40 px-8"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

      <h2 className="text-5xl font-bold text-center mb-20">
        Education
      </h2>

      <div className="relative border-l-4 border-yellow-600 ml-8 space-y-16">

        {/* College */}
        <div className="relative pl-12">
          <div className="absolute -left-5 w-8 h-8 bg-yellow-600 rounded-full"></div>

          <h3 className="text-3xl font-bold text-yellow-600">
            2023 - 2027
          </h3>

          <h4 className="text-2xl mt-2 font-semibold">
            SNS College of Technology
          </h4>

          <p className="text-lg mt-2">
            Bachelor of Engineering in Electronics and Communication Engineering
          </p>

          <p className="text-lg mt-2">
            CGPA : <span className="font-semibold">8.88</span>
          </p>
        </div>

        {/* HSC */}
        <div className="relative pl-12">
          <div className="absolute -left-5 w-8 h-8 bg-yellow-600 rounded-full"></div>

          <h3 className="text-3xl font-bold text-yellow-600">
            2023
          </h3>

          <h4 className="text-2xl mt-2 font-semibold">
            Higher Secondary Education (HSC)
          </h4>

          <p className="text-lg mt-2">
            Percentage : <span className="font-semibold">87%</span>
          </p>
        </div>

        {/* SSLC */}
        <div className="relative pl-12">
          <div className="absolute -left-5 w-8 h-8 bg-yellow-600 rounded-full"></div>

          <h3 className="text-3xl font-bold text-yellow-600">
            2021
          </h3>

          <h4 className="text-2xl mt-2 font-semibold">
            Secondary School Education (SSLC)
          </h4>

          <p className="text-lg mt-2">
            Percentage : <span className="font-semibold">90%</span>
          </p>
        </div>

      </div>

    </motion.section>
  );
}

export default Education;