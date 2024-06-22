import { useEffect } from "react";

import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { Tooltip } from "react-tooltip";

import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import Article from "./article.page";

import { ptsVerified2 } from "../utils/images";

import { routes } from "./routes";

import { deleteUser, onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../config/fb";

import {
  setAuthError,
  setAuthLoading,
  setCurrentUser,
  setSiteSettings,
} from "../store/actions";

import Loader from "../components/loader.component";

import { isUserWhitelisted } from "../services/admin.service";
import { getSettings } from "../services/settings.service";

const Main = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authLoading = useSelector((state) => state.authLoading);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      dispatch(setAuthLoading(true));
      if (user) {
        const isWhitelisted = await isUserWhitelisted(user.email);

        if (!isWhitelisted) {
          if (auth.currentUser !== null) {
            deleteUser(auth.currentUser);
            signOut(auth);
          }
          dispatch(setAuthError("Access is denied for your account!"));
          navigate("/admin");
        } else {
          dispatch(
            setCurrentUser({ name: user.displayName, email: user.email })
          );
        }
      }

      const settings = await getSettings();

      if (settings) {
        const contactInfo = settings.find((item) => item.id === "contactInfo");
        const metaDetails = settings.find((item) => item.id === "metaDetails");

        dispatch(setSiteSettings({ contactInfo, metaDetails }));
      }

      dispatch(setAuthLoading(false));
    });
  }, []);

  return authLoading ? (
    <Loader />
  ) : (
    <>
      {!location.pathname.includes("admin") && (
        <a
          href="https://www.psychologytoday.com/profile/1035259"
          className="sx-verified-seal"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ptsVerified2} alt="pts-verified2" />
        </a>
      )}
      {!location.pathname.includes("admin") && <Navbar />}
      <Tooltip id="main-tooltip" place="bottom" />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
        <Route exact path="/blog/:slug" element={<Article />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!location.pathname.includes("admin") && <Footer />}
    </>
  );
};

export default Main;
