const fetchCardDetails = async (id, role) => {
  console.log(`/api/${role}/exams/${id}`);
  let response = await fetch(`/api/${role}/exams/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

const fetchQuesDetails = async () => {
  let response = await fetch(`/api/questions/objective/fetchQuestions`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

const fetchCpQuesDetails = async () => {
  let response = await fetch(`/api/questions/coding/fetchCpQuestions`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

const fetchStudentDetails = async()=>{
  let res = await fetch("/api/faculty/result/:facultyId",{
  method:"GET",
  headers: {
    Accept:"application/json",
    "Content-Type":"application/json"
  }
});
return await res.json();
}

const fetchResultByStudentId = async (id) => {
  console.log(id);
  let response = await fetch(`/api/student/result/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  // console.log(response);

  return await response.json();
};
const fetchExamById = async (id) => {
  let response = await fetch(`/api/exam`, {
    method: "GET",
    headers: {
      id: id,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
export {
  fetchCardDetails,
  fetchQuesDetails,
  fetchCpQuesDetails,
  fetchResultByStudentId,
  fetchExamById,
  fetchStudentDetails
};
