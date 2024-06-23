import { useState } from "react";

import { useSelector } from "react-redux";

import { updateSettings } from "../services/settings.service";

import {
  SettingsInfoLoader,
  SettingsMetaLoader,
} from "../components/loaders/settings.loader";

import { InformationCircleIcon } from "@heroicons/react/24/solid";

const Settings = () => {
  const siteSettings = useSelector((state) => state.siteSettings);

  const [settings, setSettings] = useState(siteSettings);

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(undefined);

  const handleMetaChange = (index, field, value) => {
    const newData = { ...settings };
    newData.metaDetails.metaInfo[index][field] = value;
    setSettings(newData);
  };

  const handleContactChange = (field, value) => {
    const newData = { ...settings };
    newData.contactInfo[field] = value;
    setSettings(newData);
  };

  const handleSave = async () => {
    try {
      setError(undefined);
      setProcessing(true);

      await updateSettings(settings);
      setProcessing(false);
      window.location.reload();
    } catch (error) {
      setError("Error saving settings:", error);
    }
  };

  return (
    <div id="settingsPage">
      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className="container col-xl-7 my-xl-5 my-4 text-box">
          <h2>Meta Information</h2>

          <div className="table-responsive my-3">
            {settings.metaDetails.metaInfo.length === 0 ? (
              <SettingsMetaLoader />
            ) : (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Page Name</th>
                    <th scope="col">Meta Title</th>
                    <th scope="col">Meta Description</th>
                  </tr>
                </thead>
                <tbody>
                  {settings.metaDetails.metaInfo.map((page, index) => (
                    <tr key={index}>
                      <td>{page.pagename}</td>
                      <td>
                        <input
                          type="text"
                          value={page.metaTitle}
                          onChange={(e) =>
                            handleMetaChange(index, "metaTitle", e.target.value)
                          }
                          className="form-control shadow-none"
                          placeholder={`Set meta title for the ${page.pagename} page`}
                        />
                      </td>
                      <td>
                        <textarea
                          value={page.metaDescription}
                          onChange={(e) =>
                            handleMetaChange(
                              index,
                              "metaDescription",
                              e.target.value
                            )
                          }
                          className="form-control shadow-none"
                          placeholder={`Set meta description for the ${page.pagename} page`}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="hstack gap-1 mb-4 opacity-50">
            <InformationCircleIcon width={20} />
            <small>
              It might take atleast 7 days for these changes to get indexed in
              google.
            </small>
          </div>
          <h2>Your Information</h2>
          {settings.contactInfo.email === "" ||
          settings.contactInfo.phone === "" ? (
            <SettingsInfoLoader />
          ) : (
            <div className="d-flex gap-3 my-3">
              <div className="form-group">
                <label htmlFor="infoEmail">Displayed Email</label>
                <input
                  type="text"
                  value={settings.contactInfo.email}
                  onChange={(e) => handleContactChange("email", e.target.value)}
                  className="form-control shadow-none"
                  id="infoEmail"
                  placeholder="Your email address visible in the site"
                />
              </div>
              <div className="form-group">
                <label htmlFor="infoPhone">Displayed Phone Number</label>
                <input
                  type="text"
                  value={settings.contactInfo.phone}
                  onChange={(e) => handleContactChange("phone", e.target.value)}
                  className="form-control shadow-none"
                  id="infoPhone"
                  placeholder="Your phone number visible in the site"
                />
              </div>
            </div>
          )}
          <hr className="mt-4" />
          <div className="d-flex gap-3 justify-content-end align-items-center mt-4">
            {error && (
              <div className="alert alert-danger py-2 px-3 m-0">{error}</div>
            )}
            <button
              onClick={handleSave}
              className="btn btn-primary py-3"
              disabled={processing}
            >
              {processing ? (
                <div className="spinner-border spinner-border-sm"></div>
              ) : (
                "Apply & Save Changes"
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
