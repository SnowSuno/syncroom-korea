import { useHistory } from "react-router-dom";

const useLink = () => {
  const history = useHistory();

  const toExternal = (href: string) => () => {
    window.open(href, "_blank")?.focus();
  };

  const toInternal = (href: string) => () => {
    history.push(href);
  };

  const to = (href: string) =>
    href.startsWith("/") ? toInternal(href) : toExternal(href);

  return { to, toExternal, toInternal };
};

export default useLink;
