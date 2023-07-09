import React from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../store/slices/UserDetails";

function ClearAll() {
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      <button className="btn-delete" onClick={() => handleClear()}>
        Clear All{" "}
      </button>
    </div>
  );
}

export default ClearAll;
