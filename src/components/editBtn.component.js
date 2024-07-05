import { PencilSquareIcon } from "@heroicons/react/24/solid";

import { useSelector } from "react-redux";

const EditButton = ({ setOptions, ...props }) => {
  const currentUser = useSelector((state) => state.currentUser);

  return currentUser !== null ? (
    <button
      className="btn btn-plus btn-edit"
      data-bs-toggle="modal"
      data-bs-target="#editorModal"
      style={props.style}
      onClick={() =>
        setOptions({
          ...props,
        })
      }
    >
      <PencilSquareIcon />
    </button>
  ) : null;
};

export default EditButton;
