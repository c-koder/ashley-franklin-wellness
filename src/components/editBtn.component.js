import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { setEditOptions } from "../store/actions";

const EditButton = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  return currentUser !== null ? (
    <button
      className="btn btn-plus btn-edit"
      data-bs-toggle="modal"
      data-bs-target="#editorModal"
      style={props.style}
      onClick={() =>
        dispatch(
          setEditOptions({
            page: props.page,
            section: props.section,
            field: props.field,
            content: props.content,
            isEditor: props.isEditor,
          })
        )
      }
    >
      <PencilSquareIcon />
    </button>
  ) : null;
};

export default EditButton;
