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
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in id quae repellat ipsum nulla est impedit, adipisci laborum delectus corporis modi at officia cumque, numquam tenetur accusantium rerum dolor?",
      },
      {
        id: 2,
        title: "Mastering Liferay Workspaces and Tooling",
        level: "Intermediate",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in id quae repellat ipsum nulla est impedit, adipisci laborum delectus corporis modi at officia cumque, numquam tenetur accusantium rerum dolor?",
      },
      {
        id: 3,
        title: "Foundations of Liferay Client Extensions",
        level: "Beginner",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in id quae repellat ipsum nulla est impedit, adipisci laborum delectus corporis modi at officia cumque, numquam tenetur accusantium rerum dolor?",
      },
      {
        id: 4,
        title: "Mastering Liferay Design Elements",
        level: "Intermediate",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in id quae repellat ipsum nulla est impedit, adipisci laborum delectus corporis modi at officia cumque, numquam tenetur accusantium rerum dolor?",
      },
      {
        id: 5,
        title: "Leverage Liferay’s Headless APIs and Liferay Objects",
        level: "Beginner",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in id quae repellat ipsum nulla est impedit, adipisci laborum delectus corporis modi at officia cumque, numquam tenetur accusantium rerum dolor?",
      },
      {
        id: 6,
        title: "Foundations of Content Management",
        level: "Beginner",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in id quae repellat ipsum nulla est impedit, adipisci laborum delectus corporis modi at officia cumque, numquam tenetur accusantium rerum dolor?",
      },
      {
        id: 7,
        title: "Building Enterprise Websites with Liferay",
        level: "Beginner",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in id quae repellat ipsum nulla est impedit, adipisci laborum delectus corporis modi at officia cumque, numquam tenetur accusantium rerum dolor?",
      },
      {
        id: 8,
        title: "Mastering Liferay Workspaces and Tooling",
        level: "Intermediate",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in id quae repellat ipsum nulla est impedit, adipisci laborum delectus corporis modi at officia cumque, numquam tenetur accusantium rerum dolor?",
      },
      {
        id: 9,
        title: "Foundations of Liferay Client Extensions",
        level: "Beginner",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in id quae repellat ipsum nulla est impedit, adipisci laborum delectus corporis modi at officia cumque, numquam tenetur accusantium rerum dolor?",
      },
      {
        id: 10,
        title: "Mastering Liferay Design Elements",
        level: "Intermediate",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in id quae repellat ipsum nulla est impedit, adipisci laborum delectus corporis modi at officia cumque, numquam tenetur accusantium rerum dolor?",
      },
      {
        id: 11,
        title: "Leverage Liferay’s Headless APIs and Liferay Objects",
        level: "Beginner",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in id quae repellat ipsum nulla est impedit, adipisci laborum delectus corporis modi at officia cumque, numquam tenetur accusantium rerum dolor?",
      },
      {
        id: 12,
        title: "Foundations of Content Management",
        level: "Beginner",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus in id quae repellat ipsum nulla est impedit, adipisci laborum delectus corporis modi at officia cumque, numquam tenetur accusantium rerum dolor?",
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
