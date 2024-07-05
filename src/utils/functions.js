import { updateContent } from "../services/content.service";

import { uploadFile } from "../services/storage.service";

import { setSiteContent } from "../store/actions";

const handleFileUpload = async (file, page, section, siteContent, dispatch) => {
  try {
    const updatedSiteContent = siteContent.map((item) =>
      item.id === page
        ? { ...item, [section]: { ...item[section], src: undefined } }
        : item
    );
    dispatch(setSiteContent(updatedSiteContent));

    const url = await uploadFile(file);

    const result = await updateContent(page, section, "src", url);

    if (result) {
      const finalSiteContent = siteContent.map((item) =>
        item.id === page
          ? { ...item, [section]: { ...item[section], src: url } }
          : item
      );
      dispatch(setSiteContent(finalSiteContent));
    }
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

export { handleFileUpload };
