import ContentLoader from "react-content-loader";

const SettingsMetaLoader = () => {
  return (
    <ContentLoader
      style={{ width: "75%" }}
      speed={2}
      viewBox="0 0 370 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="245" y="16" rx="0" ry="0" width="121" height="23" />
      <rect x="125" y="15" rx="0" ry="0" width="102" height="24" />
      <rect x="5" y="16" rx="0" ry="0" width="102" height="23" />
      <rect x="246" y="56" rx="0" ry="0" width="121" height="23" />
      <rect x="126" y="55" rx="0" ry="0" width="102" height="24" />
      <rect x="6" y="56" rx="0" ry="0" width="102" height="23" />
      <rect x="246" y="96" rx="0" ry="0" width="121" height="23" />
      <rect x="126" y="95" rx="0" ry="0" width="102" height="24" />
      <rect x="6" y="96" rx="0" ry="0" width="102" height="23" />
    </ContentLoader>
  );
};

const SettingsInfoLoader = () => {
  return (
    <ContentLoader
      style={{ width: "75%" }}
      speed={2}
      viewBox="0 0 370 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="125" y="15" rx="0" ry="0" width="102" height="24" />
      <rect x="5" y="16" rx="0" ry="0" width="102" height="23" />
    </ContentLoader>
  );
};

export { SettingsMetaLoader, SettingsInfoLoader };
