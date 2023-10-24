import React from "react";
import { getEventAll } from "../../services/admin.service";

function Events() {
  const [dataRow, setDataRow] = React.useState([]);
  const fetchData = async () => {
    const data = await getEventAll();
    console.log(data);
    setDataRow(data.data.Events);
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div class="flex justify-center place-items-center p-3  sm:p-8 flex-col gap-6">
        {dataRow.map((item) => {
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-6  border border-0966BB w-3/4">
              <div className="flex justify-center  rounded-xl p-6 ">
                <img src={item.img} alt="" className="w-70 ml-5 mt-7" />
              </div>
              <div className="flex justify-center text-black flex-col  rounded-xl p-6 ">
                <h3 className="mb-2 font-bold">{item.name}</h3>
                <p className="mb-2">Location: {item.location}</p>
                <p>Date: {item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Events;
