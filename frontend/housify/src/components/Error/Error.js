import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="text-center bg-slate-200 h-screen justify-center">
      <h1 className="text-5xl pt-24 font-black">Error 404</h1>
      <p className="my-6">Page not found</p>
      <Link className="text-violet-900" to="/">
        Back Home
      </Link>
    </div>
  );
}

export default Error;
