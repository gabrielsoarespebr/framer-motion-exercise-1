import { useEffect, useState } from "react";
import { CourseCard } from "../CourseCard/CourseCard";

export const CourseCatalog = () => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    const initialCourseList = [
      {
        id: 1,
        title: "Building Enterprise Websites with Liferay",
        level: "Beginner",
      },
      {
        id: 2,
        title: "Mastering Liferay Workspaces and Tooling",
        level: "Intermediate",
      },
      {
        id: 3,
        title: "Foundations of Liferay Client Extensions",
        level: "Beginner",
      },
      {
        id: 4,
        title: "Mastering Liferay Design Elements",
        level: "Intermediate",
      },
      {
        id: 5,
        title: "Leverage Liferay’s Headless APIs and Liferay Objects",
        level: "Beginner",
      },
      {
        id: 6,
        title: "Foundations of Content Management",
        level: "Beginner",
      },
      {
        id: 7,
        title: "Building Enterprise Websites with Liferay",
        level: "Beginner",
      },
      {
        id: 8,
        title: "Mastering Liferay Workspaces and Tooling",
        level: "Intermediate",
      },
      {
        id: 9,
        title: "Foundations of Liferay Client Extensions",
        level: "Beginner",
      },
      {
        id: 10,
        title: "Mastering Liferay Design Elements",
        level: "Intermediate",
      },
      {
        id: 11,
        title: "Leverage Liferay’s Headless APIs and Liferay Objects",
        level: "Beginner",
      },
      {
        id: 12,
        title: "Foundations of Content Management",
        level: "Beginner",
      },
    ];

    setCourseList(initialCourseList);
  }, []);

  return (
    <div>
      <ul className="flex flex-wrap justify-between items-center gap-10 p-5">
        {courseList.map((course) => (
          <li key={course.id} className="w-100">
            <CourseCard course={course} />
          </li>
        ))}
      </ul>
    </div>
  );
};
