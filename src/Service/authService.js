import UserApi from "./module/userModule.api";

function setToken(response) {
  localStorage.setItem("accessToken", JSON.stringify(response.access));
  localStorage.setItem("refreshToken", JSON.stringify(response.refresh));
}

function getToken() {
  const token = localStorage.getItem("accessToken");
  return token;
}

function isAuth() {
  return !!getToken();
}

async function login(params) {
  const { response, error } = await new UserApi().login(params);
  if (response) {
    setToken(response.data);
    return { response };
  }

  if (error) return { error };
}

async function logout() {
  try {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  } catch (error) {
    alert("Please refresh page");
    console.warn(error);
  }
}

export { getToken, isAuth, login, logout };
