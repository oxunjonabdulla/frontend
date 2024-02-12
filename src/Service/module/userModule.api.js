import React from "react";
import { privateInstance, privateInstanceForMediaData } from "../client/client";
import { authEndpoints } from "../endpoints";

class UserApi extends React.Component {
  //login
  async login(obj) {
    try {
      const response = await privateInstance.post(authEndpoints.jwtCreate, obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async refreshToken(obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.jwtRefresh,
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getMe() {
    try {
      const response = await privateInstance.get(authEndpoints.autMe);

      return { response };
    } catch (error) {
      return { error };
    }
  }

  // Pto Operatori
  async postCarriage(obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.carriageCreate,
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async ptoCarriageUpdate(id, obj) {
    try {
      const response = await privateInstance.put(
        authEndpoints.ptoUpdate(id),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getCarriage() {
    try {
      const response = await privateInstance.get(authEndpoints.carriageGet);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getCarriagePage(page) {
    try {
      const response = await privateInstance.get(
        authEndpoints.carriagePageGet(page)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteCarriage(id) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.carriageDelete(id)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getCarriageOne(id) {
    try {
      const response = await privateInstance.get(
        authEndpoints.carriageGetOne(id)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getUserSignatureImg() {
    try {
      const response = await privateInstance.get(authEndpoints.authImg);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postCarriageComplectation(id, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.complectationCreate(id),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getCarriageComplectation(carriageId) {
    try {
      const response = await privateInstance.get(
        authEndpoints.complectationGet(carriageId)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  // Statistika uchun
  async postDaily(obj) {
    try {
      const response = await privateInstanceForMediaData.post(
        authEndpoints.dailyCreate,
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getDailyToday() {
    try {
      const response = await privateInstance.get(authEndpoints.dailyGetAll);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getCarriageNumber() {
    try {
      const response = await privateInstance.get(
        authEndpoints.getCarriageNumber
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteDaily(id) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.dailyDelete(id)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async downloadVu23(carriageID) {
    try {
      const response = await privateInstance.get(
        authEndpoints.vu23Dowland(carriageID),
        { responseType: "blob" }
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }

  // Vu 31 model

  async postVu31(id, obj) {
    try {
      const response = await privateInstance.post(authEndpoints.vu31(id), obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu31() {
    try {
      const response = await privateInstance.get(authEndpoints.vu31All);

      return { response };
    } catch (error) {
      return { error };
    }
  }

  // vu 36 model
  async postVu36(id, obj) {
    try {
      const response = await privateInstance.post(authEndpoints.vu36(id), obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu36() {
    try {
      const response = await privateInstance.get(authEndpoints.vu36All);

      return { response };
    } catch (error) {
      return { error };
    }
  }

  // vu 68 model
  async getVu68(page) {
    try {
      const response = await privateInstance.get(authEndpoints.vu68All(page));

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postVu68(id, obj) {
    try {
      const response = await privateInstance.post(authEndpoints.vu68(id), obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  // vu 50 model
  async getVu50(page) {
    try {
      const response = await privateInstance.get(authEndpoints.vu50All(page));

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postVu50(id, obj) {
    try {
      const response = await privateInstance.post(authEndpoints.vu50(id), obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async delVu50(carriageID) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.vu50Delate(carriageID)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  // vu 51 model
  async getVu51All(page) {
    try {
      const response = await privateInstance.get(authEndpoints.vu51All(page));

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postIntiveVu51Api(id, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.postInviteVu51(id),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async delVu51(carriageID) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.vu51Delate(carriageID)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postAcceptedVu51Api(id, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.postAcceptedVu51(id),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  // vu92
  async postVu91(id, obj) {
    try {
      const response = await privateInstance.post(authEndpoints.vu91(id), obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu91(page) {
    try {
      const response = await privateInstance.get(authEndpoints.vu91All(page));

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async delVu91(carriageID) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.vu91Delate(carriageID)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  // vu92

  async postVu92(id, obj) {
    try {
      const response = await privateInstance.post(authEndpoints.vu92(id), obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu92(page) {
    try {
      const response = await privateInstance.get(authEndpoints.vu92All(page));

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async delVu92(carriageID) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.vu92Delate(carriageID)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  // vu93
  async postVu93(id, obj) {
    try {
      const response = await privateInstance.post(authEndpoints.vu93(id), obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async delVu93(id, obj) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.vu93(id),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu93(page) {
    try {
      const response = await privateInstance.get(authEndpoints.vu93All(page));

      return { response };
    } catch (error) {
      return { error };
    }
  }

  // phrase service
  async getPhraseList(page) {
    try {
      const response = await privateInstance.get(
        authEndpoints.phraseList(page)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postPhrase(carriageID, obj) {
    try {
      const response = await privateInstance.put(
        authEndpoints.phraseUpdate(carriageID),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deletePhrase(carriageID) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.phraseDelate(carriageID)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }

  // Phrase for wheel pair
  async getPhraseWheelList(page) {
    try {
      const response = await privateInstance.get(
        authEndpoints.phraseWheelList(page)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getPhraseWheel(carriageID) {
    try {
      const response = await privateInstance.get(
        authEndpoints.phraseWheelGet(carriageID)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postPhraseWheel(carriageID, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.phraseWheelPost(carriageID),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deletePhraseWheel(carriageID) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.phraseWheelDelete(carriageID)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }

  // phrase cart

  async getPhraseCartList(page) {
    try {
      const response = await privateInstance.get(
        authEndpoints.phraseCartList(page)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async downloadPhrase(carriageId) {
    try {
      const response = await privateInstance.get(
        authEndpoints.phraseDownload(carriageId),
        { responseType: "blob" }
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getPhraseCart(carriageID) {
    try {
      const response = await privateInstance.get(
        authEndpoints.phraseCartGet(carriageID)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postPhraseCart(carriageID, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.phraseCartPost(carriageID),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deletePhraseCart(carriageID) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.phraseCartDelete(carriageID)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
}

export default UserApi;
