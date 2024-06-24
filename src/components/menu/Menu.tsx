import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Menu = () => {
  const { t } = useTranslation();
  return (
      <div className="mx-auto w-full px-2 mb-14 max-w-screen-2l">
        <div className="flex items-center gap-3 text-xs sm:text-sm lg:text-lg lg:font-bold w-full justify-between sm:font-bold">
          <NavLink
              to="/home"
              className={({ isActive }) =>
                  `hover:underline ${isActive ? "underline text-blue-600" : "text-black"}`
              }
          >
            <p>{t("menu.home")}</p>
          </NavLink>

          <NavLink
              to="/organisation"
              className={({ isActive }) =>
                  `hover:underline ${isActive ? "underline text-blue-600" : "text-black"}`
              }
          >
            <p>{t("menu.organisation")}</p>
          </NavLink>

          <NavLink
              to="/mitglieder"
              className={({ isActive }) =>
                  `hover:underline ${isActive ? "underline text-blue-600" : "text-black"}`
              }
          >
            <p>{t("menu.members")}</p>
          </NavLink>

          <NavLink
              to="/kontakt"
              className={({ isActive }) =>
                  `hover:underline ${isActive ? "underline text-blue-600" : "text-black"}`
              }
          >
            <p>{t("menu.contact")}</p>
          </NavLink>
        </div>
      </div>
  );
};

export default Menu;
