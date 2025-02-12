import React from "react";
import CreateForm from "./_components/CreateForm";
import FormList from "./_components/FormList";

function page() {
  return (
    <div>
    <div className="sm:p-10 p-5">
      <h2 className="font-bold sm:text-3xl text-xl flex items-center justify-between">
        Dashboard
        <CreateForm />
      </h2>
      <FormList />
    </div>
    </div>
  );
}

export default page;
