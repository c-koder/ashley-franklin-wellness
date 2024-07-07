import { useState } from "react";

import { deleteArticle } from "../../services/article.service";

const DeleteDialog = ({ item }) => {
  const [error, setError] = useState(undefined);
  const [processing, setProcessing] = useState(false);

  const handleDelete = async () => {
    try {
      setProcessing(true);
      const result = await deleteArticle(item.id);
      if (result) {
        window.location.reload();
      }
    } catch (error) {
      setError("Failed to delete this item, try again later!");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div
      id="deleteModal"
      className="modal fade"
      tabIndex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="card">
              <div className="card-header p-3 pb-2 px-4 bg-white ">
                <p className="font-weight-bold mb-1">
                  Are you sure you wanna delete this item?
                  <br />
                  <strong>{item?.name}</strong>
                </p>
                <p className="text-muted" style={{ fontSize: 14 }}>
                  *This change will reflect in your website immediately.
                </p>
              </div>
              <div className="hstack gap-3 justify-content-end p-4">
                {error && (
                  <div className="alert alert-danger p-2 px-3 m-0">{error}</div>
                )}
                <button
                  type="button"
                  className="btn btn-light"
                  data-bs-dismiss="modal"
                  disabled={processing}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger px-4"
                  onClick={handleDelete}
                  disabled={processing}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
