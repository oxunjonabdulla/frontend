import PropTypes from "prop-types";
import { useEffect } from "react";
import { SimpleLoader } from "../components";

export const SliderMock = ({ setIsLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <SimpleLoader />;
};

SliderMock.propTypes = {
  setIsLoading: PropTypes.func,
};
