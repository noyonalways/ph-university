import { TAcademicSemester } from "../academic-semester/academicSemester.interface";
import User from "./user.model";

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: "student",
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

const generateStudentId = async (payload: TAcademicSemester) => {
  const currentId = (await findLastStudentId()) || (0).toString();
  let incrementalId = (Number(currentId) + 1).toString().padStart(4, "0");
  incrementalId = `${payload.year}${payload.code}${incrementalId}`;
  return incrementalId;
};

export default generateStudentId;
