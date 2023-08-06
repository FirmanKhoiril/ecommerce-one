"use client";

import { ColorRing } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperClass="blocks-wrapper" colors={["#4E30FA", "#2A40DE", "#3B82F6", "#2A9EDE", "#30E8FA"]} />
    </div>
  );
};

export default loading;
