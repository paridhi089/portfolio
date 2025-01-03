const Education = () => {
  return (
    <div className="w-4/5 lg:w-1/2 itemNeu gap-4 flex-col p-8 mx-auto ">
      <h1 className="text-3xl font-bold text-white text-center">Education</h1>
      <div className="flex-row mt-5">
        <h1 className="text-[#5c4dd6] font-bold ">Feb 2023 - Nov 2024</h1>
        <h1 className="text-white text-l sm:text-2xl font-bold">
          Master of Computer Applications
        </h1>
        <div className="flex flex-row justify-between">
          <p className="text-white italic">Ramaiah Institute Of Technology</p>
          <p className="text-white italic">CGPA: 8.57</p>
        </div>
      </div>
      <div className="flex-row mt-5">
        <h1 className="text-[#5c4dd6] font-bold ">Jun 2018 - Sep 2021</h1>
        <h1 className="text-white text-l sm:text-2xl font-bold">
          Bachelor of Computer Applications
        </h1>
        <div className="flex flex-row justify-between ">
          <p className="text-white italic">Ms Ramaiah College of Arts Science and Commerece</p>
          <p className="text-white italic">CGPA: 7.75</p>
        </div>
      </div>
    </div>
  );
};
export default Education;
