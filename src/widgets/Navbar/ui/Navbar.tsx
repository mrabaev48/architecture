import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = "" }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher className={""} />
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={cls.mainLink}
        >
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          About
        </AppLink>
      </div>
    </div>
  );
};
