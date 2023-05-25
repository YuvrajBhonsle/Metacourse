import React from "react";

function adddata() {
  const addTODb = async () => {
    try {
      const apiRes = await fetch("/api/addCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //   sem: sem,
          //   branch: branch,
          //   course_name,
          //   course_link,
        }),
      });
    } catch (error) {}
  };
  return <div></div>;
}

export default adddata;
