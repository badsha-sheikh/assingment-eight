import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getDataFromLS } from "../../utilities/utilities";
import AllApps from "../../Components/AllApps/AllApps";

const Installation = () => {
  const appsData = useLoaderData();
  const [installed, setInstalled] = useState([]);

  useEffect(() => {
    const storedData = getDataFromLS();
    // console.log(storedData)
    const storedDataParse = storedData.map((id) => parseInt(id));
    // console.log(storedDataParse);
    const installApp = appsData.filter((data) =>
      storedDataParse.includes(data.id),
    );
    setInstalled(installApp);
  }, []);
  //Handle remove button
  const handleRemoveBtn = (id) => {
const storedData = getDataFromLS();
const remainingData = storedData.filter((data) => parseInt(data) != id);
localStorage.setItem('installed', JSON.stringify(remainingData))
const remainingApps =installed.filter(data=>data.id !=id);
console.log(remainingApps);
setInstalled(remainingApps)
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
        {installed.map((app) => (
          <AllApps
            data={app}
            handleRemoveBtn={handleRemoveBtn}
            setButton={true}
          ></AllApps>
        ))}
      </div>
    </div>
  );
};

export default Installation;
