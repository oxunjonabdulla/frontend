import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  variants: {
    outline: {
      position: "relative",
      border: "1px solid #37BEB0 !important",
      bgColor: "#fff",
      padding: "24px 25px",
      transition: "0.2s ease-in-out",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.125)",
      _hover: {
        bg: "#37BEB0",
        color: "#ffff !important",
        border: "1px solid #10B981",
        _before: {
          width: "100%",
        },
      },
    },
    outline_red: {
      position: "relative",
      border: "1px solid red",
      bgColor: "#fff",
      padding: "24px 25px",
      transition: "0.2s ease-in-out",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.125)",
      color: "red !important",
      _hover: {
        bg: "red",
        color: "#ffff !important",
        border: "1px solid red",
        _before: {
          width: "100%",
        },
      },
    },
    outline_active: {
      bg: "#37BEB0",
      padding: "24px 25px",
      border: "1px solid #37BEB0",
      color: "#ffff !important",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.125)",
    },

    solid: {
      bg: "#37BEB0",
      color: "#fff",
      transition: "0.2s ease-in-out",
      padding: "24px 25px",
      border: "1px solid #10B981",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.125)",
      _hover: {
        bg: "#37BEB0",
        color: "#fff",
        border: "1px solid #10B981",
        opacity: "0.82",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.125)",
      },
    },

    outline_blue: {
      position: "relative",
      border: "3px solid var(--blue)",
      transition: "0.3s ease-in-out",
      borderColor: "none",
      color: "var(--blue)",
      _before: {
        content: `""`,
        position: "absolute",
        bg: "var(--blue-gradient)",
        width: "0",
        height: "100%",
        transition: "0.3s ease-in-out",
        zIndex: "-1",
      },
      _hover: {
        bg: "inherit",
        boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.25)",
        color: "#ffff !important",
        _before: {
          width: "100%",
        },
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});
