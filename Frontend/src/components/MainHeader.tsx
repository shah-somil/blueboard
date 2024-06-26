import { Link } from "react-router-dom";
import logo from "../assets/img/logo-fullwidth.png";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/slices/user-slice";
import { useTranslation } from "react-i18next";
import { UserProfile } from "./UserProfile";

const MainHeader = (): JSX.Element => {
  const { t } = useTranslation("common");
  const currentUser = useSelector(selectCurrentUser);
  return (
    <header className="relative z-10 flex w-full items-center justify-between bg-white py-2 px-5 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)] dark:bg-dark-200">
      <div className="hover:bg-primary-100 rounded">
        <Link
          to="/projects"
          className="flex cursor-pointer items-center rounded py-2 px-3 hover:bg-primary-light dark:hover:bg-dark-100"
        >
          <img src={logo} width={140} height={40} alt="Logo" />
        </Link>
      </div>
      <div>
        <UserProfile />
      </div>
    </header>
  );
};

export default MainHeader;
