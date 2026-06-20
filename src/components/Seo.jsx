import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const APP_NAME = "میم - مشارکت یکپارچه مالی";

export const Seo = (props) => {
  const { title } = props;

  const fullTitle = title ? `${title} | ${APP_NAME}` : APP_NAME;

  return (
    <Helmet>
      <title>{fullTitle}</title>
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
};
