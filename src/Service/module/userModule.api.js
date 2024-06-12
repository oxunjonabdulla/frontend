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
  async postExitImage(id, obj) {
    try {
      const response = await privateInstanceForMediaData.patch(
        authEndpoints.dailyExitImage(id),
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
  async getDailyAll(paramObj) {
    try {
      const response = await privateInstance.get(authEndpoints.dailyAll, {
        params: paramObj,
      });

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
  async updateVu31(id, obj) {
    try {
      const response = await privateInstance.patch(authEndpoints.vu31(id), obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteVu31(id) {
    try {
      const response = await privateInstance.delete(authEndpoints.vu31(id));

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu31(page) {
    try {
      const response = await privateInstance.get(authEndpoints.vu31All(page));

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
  async getVu36(page) {
    try {
      const response = await privateInstance.get(authEndpoints.vu36All(page));

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

  //vu-47
  async getVu47(page) {
    try {
      const response = await privateInstance.get(authEndpoints.vu47All, {
        params: page,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postVu47(id, obj) {
    try {
      const response = await privateInstance.post(authEndpoints.vu47(id), obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteVu47(id) {
    try {
      const response = await privateInstance.delete(authEndpoints.vu47(id));

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
  async getAvtoRejimList(paramObj) {
    try {
      const response = await privateInstance.get(authEndpoints.avtoRejim, {
        params: paramObj,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postAvtoRejim(carriageId, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.avtoRejimPost(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteAvtoRejim(carriageId) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.avtoRejimPost(carriageId)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }

  // rzobkran
  async getRazobkran(paramObj) {
    try {
      const response = await privateInstance.get(authEndpoints.razobKranGet, {
        params: paramObj,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postRazobKran(carriageId, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.razobKranPost(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteRazobKran(carriageId) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.razobKranPost(carriageId)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }

  // rezuvuar
  async getRezervuar(paramObj) {
    try {
      const response = await privateInstance.get(authEndpoints.rezervuarGet, {
        params: paramObj,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postRezervuar(carriageId, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.rezervuarPost(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async updateRezervuar(carriageId, obj) {
    try {
      const response = await privateInstance.put(
        authEndpoints.rezervuarPost(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteRezervuar(carriageId) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.rezervuarPost(carriageId)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  //Rukva
  // rezuvuar
  async getRukva(paramObj) {
    try {
      const response = await privateInstance.get(authEndpoints.rukvaGet, {
        params: paramObj,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postRukva(carriageId, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.rukvaPost(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteRukva(carriageId) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.rukvaPost(carriageId)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  // Regular
  async getRegulyator(paramObj) {
    try {
      const response = await privateInstance.get(authEndpoints.regularGet, {
        params: paramObj,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postRegulyator(carriageId, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.regularPost(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteRegulyator(carriageId) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.regularPost(carriageId)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  // dalolatnoma

  async postAravaActFront(carriageId, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.aravaActPostFront(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getALlAravaAct(pageObject) {
    try {
      const response = await privateInstance.get(authEndpoints.aravaActGetAll, {
        params: pageObject,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postAravaActBack(carriageId, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.aravaActPostBack(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postBirikmaActFront(carriageId, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.birikmaActPostFront(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getALlBirikmaAct(pageObject) {
    try {
      const response = await privateInstance.get(
        authEndpoints.birikmaActGetAll,
        {
          params: pageObject,
        }
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postBirikmaActBack(carriageId, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.birikmaActPostBack(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postCollectActFront(carriageId, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.collectActPostFront(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getALlCollectAct(pageObject) {
    try {
      const response = await privateInstance.get(
        authEndpoints.collectActGetAll,
        {
          params: pageObject,
        }
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postCollectActBack(carriageId, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.collectActPostBack(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
}

export default UserApi;
