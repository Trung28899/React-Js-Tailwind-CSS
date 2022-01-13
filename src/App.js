import React from "react";

const App = () => {
  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <TailWindCSSButton>Test Button</TailWindCSSButton>
    </div>
  );
};

function TailWindCSSButton(props) {
  return (
    <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue inline-block">
      {props.children}
    </button>
  );
}

export default App;
