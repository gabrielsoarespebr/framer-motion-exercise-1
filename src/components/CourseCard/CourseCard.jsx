import { motion } from "framer-motion";

export const CourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="border rounded">
        <img
          src="https://www.hiberus.com/sites/default/files/2025-06/Liferay%20%281%29.jpg"
          alt="Liferay course default image"
          className="w-full"
        />
        <div className="p-4">
          <p>{course.title}</p>
          <p className="text-gray-500 line-clamp-3">{course.description}</p>
        </div>
      </div>
    </motion.div>
  );
};
