import React from 'react';

const Table = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <div className="container mx-auto px-5 py-8">
        <h1 className="font-bold text-xl text-blue text-center pb-6">
          Portfolio
        </h1>
        <div className="overflow-x-auto shadow-sm ">
          <table className="table w-full  ">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-center ">Sr.no</th>
                <th>Company Name</th>
                <th>Company Website</th>
              </tr>
            </thead>
            <tbody className="bg-gray-50">
              <tr className="hover">
                <th className="text-center ">1.</th>
                <td>Company 1</td>
                <td class="text-blue ">Link 1</td>
              </tr>

              <tr className="hover">
                <th className="text-center ">2.</th>
                <td>Company 2</td>
                <td class="text-blue ">Link 2</td>
              </tr>

              <tr className="hover">
                <th className="text-center ">3.</th>
                <td>Company 3</td>
                <td class="text-blue ">Link 3</td>
              </tr>

              <tr className="hover">
                <th className="text-center ">4.</th>
                <td className=" ">Company 4</td>
                <td class="text-blue ">Link 4</td>
              </tr>

              <tr className="hover">
                <th className="text-center ">5.</th>
                <td>Company 5</td>
                <td class="text-blue ">Link 5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center pt-8 pb-8">
          <button className="inline-block bg-blue text-white px-8 py-3 rounded-[20px] font-medium">
            Submit Pitch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
