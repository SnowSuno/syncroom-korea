import { useNavigate } from "react-router-dom";

/**
 * @deprecated
 */
const useLink = () => {
  const navigate = useNavigate();

  const toExternal = (href: string) => () => {
    window.open(href, "_blank")?.focus();
  };

  const toInternal = (href: string) => () => {
    navigate(href);
  };

  const to = (href: string) =>
    href.startsWith("/") ? toInternal(href) : toExternal(href);

  return { to, toExternal, toInternal };
};

export default useLink;
