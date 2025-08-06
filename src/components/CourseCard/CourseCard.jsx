import { motion } from "framer-motion";
import { Signal, SignalHigh, SignalMedium } from "lucide-react";

export const CourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200, scale: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
    >
      <div className="border border-gray-300 rounded relative shadow-md hover:shadow-lg">
        <img
          src="https://www.hiberus.com/sites/default/files/2025-06/Liferay%20%281%29.jpg"
          alt="Liferay course default image"
          className="w-full"
        />
        <div className="p-4">
          <p>{course.title}</p>
          <p className="text-gray-500 line-clamp-3">{course.description}</p>
        </div>
        <div className="w-50 absolute top-85 left-47 px-5 py-3 flex justify-center items-center gap-5 rounded bg-white">
          {(course.level.toLowerCase() == "beginner" && <SignalMedium />) ||
            (course.level.toLowerCase() == "intermediate" && <SignalHigh />) ||
            (course.level.toLowerCase() == "expert" && <Signal />)}
          <p>{course.level}</p>
        </div>
      </div>
    </motion.div>
  );
};
