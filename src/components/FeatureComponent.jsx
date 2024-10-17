import React from "react";
import {features} from '../constants';

const FeatureComponent = () => {
  return (
    <div>
      <div className="relative mt-20 border-b border-neutral-600 min-h-[650px]">
        <div className="text-center">
          <span className="rounded-full bg-slate-900 text-orange-700 border px-3 py-3 h-6 text-sm uppercase">
            Feature
          </span>
          <h2 className="text-3xl sm:text-4xl lg:6xl mt-10 lg:mt-20">
            Easily build{" "}
            <span className=" mt-10 bg-gradient-to-r bg-orange-400 from-orange-800 text-transparent bg-clip-text">
              your code
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((features , index)=>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="flex">
                        <div className="flex justify-center items-center mx-6 h-10 w-10 p-2 bg-neutral-700 rounded-full text-orange-600">
                            {features.icon}
                        </div>
                        <div>
                            <h2 className="mt-1 mb-5 text-2xl">{features.text}</h2>
                            <p className="text-sm text-neutral-600 px-2">{features.description}</p>
                            </div>

                    </div>
                </div>
            ))
            }
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
