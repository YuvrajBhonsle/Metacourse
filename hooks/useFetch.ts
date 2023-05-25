const useFetch = () => {
  const fetchData = async (sem: number, branch: string) => {
    try {
      const rawBody = {
        sem: sem,
        branch: branch,
      };
      const apiResponse = await fetch("/api/getCourses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rawBody),
      });
      if (apiResponse.ok) {
        const jsonData = await apiResponse.json();
        console.log(jsonData);
        return jsonData;
      }
    } catch (error) {
      throw new Error("Server Error");
    }
  };
  return fetchData;
};
export default useFetch;
