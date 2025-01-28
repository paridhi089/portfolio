const Experience = () => {
  return (
    <div className="w-4/5 lg:w-1/2 itemNeu gap-4 flex-col p-8 mx-auto ">
        <h1 className="text-3xl font-bold text-white text-center">Experience</h1>
      <div className="flex-row mt-5">
        <h1 className="text-[#5c4dd6] font-bold ">April 2024 - June 2024</h1>
        <h1 className="text-white text-l sm:text-2xl font-bold">
          Adithya Systems and Services
        </h1>
        <p className="text-white italic">Operations Manager Intern</p>
        <ul className="list-disc">
          <li className="text-white pt-2">
            Applied fundamental networking concepts like IP addressing,
            subnetting, routing, and switching in projects focused on enterprise
            network monitoring and switch configuration using Cisco Web Admin
            and D-Link Web Admin tools a
          </li>
          <li className="text-white pt-2">
            Configured access points, switches, and other network devices.
          </li>
          <li className="text-white pt-2">
            Designed network topologies, security (firewalls, VPNs), and
            performed intrusion detection/prevention.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Experience;
