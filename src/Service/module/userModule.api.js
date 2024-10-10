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

  // Vu22

  async postVu22(id, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.vu22WithId(id),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteVu22(id) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.vu22WithId(id)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu22(params) {
    try {
      const response = await privateInstance.get(authEndpoints.vu22get, {
        params,
      });

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
        authEndpoints.carriagePageGet,
        { params: page }
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
  async postVu31TOVu10(id) {
    try {
      const response = await privateInstance.post(authEndpoints.vu31TOVu10(id));

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
      const response = await privateInstance.get(authEndpoints.vu31All, {
        params: page,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu10(page) {
    try {
      const response = await privateInstance.get(authEndpoints.vu10, {
        params: page,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async updateVu10(id, obj) {
    try {
      const response = await privateInstance.patch(
        authEndpoints.vu10 + `${id}/update/`,
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu31ID(id) {
    try {
      const response = await privateInstance.get(authEndpoints.vu31(id));

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
  async updateVu36(id, obj) {
    try {
      const response = await privateInstance.patch(authEndpoints.vu36(id), obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteVu36(id) {
    try {
      const response = await privateInstance.delete(authEndpoints.vu36(id));

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu36(page) {
    try {
      const response = await privateInstance.get(authEndpoints.vu36All, {
        params: page,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }

  // vu 68 model
  async getVu68(page) {
    try {
      const response = await privateInstance.get(authEndpoints.vu68All, {
        params: page,
      });

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
  async deleteVu68(id) {
    try {
      const response = await privateInstance.delete(authEndpoints.vu68(id));

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
  async postVu47(obj) {
    try {
      const response = await privateInstance.post(authEndpoints.vu47Post, obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async patchBackVu47(uuid, obj) {
    try {
      const response = await privateInstance.patch(
        authEndpoints.vu47Back(uuid),
        obj
      );

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
  async postVu50(obj) {
    try {
      const response = await privateInstance.post(authEndpoints.vu50, obj);

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
  async postIntiveVu51Api(obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.createVu51,
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
  async postAcceptedVu51Api(uuid, obj) {
    try {
      const response = await privateInstance.patch(
        authEndpoints.postAcceptedVu51(uuid),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  // vu90
  async postVu90(obj) {
    try {
      const response = await privateInstance.post(authEndpoints.vu90, obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu90(paramsData) {
    try {
      const response = await privateInstance.get(authEndpoints.vu90All, {
        params: paramsData,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteVu90(id) {
    try {
      const response = await privateInstance.delete(authEndpoints.vu90Id(id));

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async updateVu90(id, obj) {
    try {
      const response = await privateInstance.patch(
        authEndpoints.vu90Id(id),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  // vu92
  async postVu91(obj) {
    try {
      const response = await privateInstance.post(authEndpoints.vu91, obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu91(params) {
    try {
      const response = await privateInstance.get(authEndpoints.vu91All, {
        params,
      });

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
  async postVu93(obj) {
    try {
      const response = await privateInstance.post(authEndpoints.vu93, obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async delVu93(id) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.vu93Delate(id)
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
      const response = await privateInstance.get(authEndpoints.phraseList, {
        params: page,
      });

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
        authEndpoints.phraseWheelList,
        { params: page }
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
      const response = await privateInstance.get(authEndpoints.phraseCartList, {
        params: page,
      });

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
  async postAvtoRejim(obj) {
    try {
      const response = await privateInstance.post(authEndpoints.avtoRejim, obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteAvtoRejim(carriageId) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.avtoRejimId(carriageId)
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
  async deleteAct(carriageId) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.aravaActPostFrontID(carriageId)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteAravaAct(carriageId) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.aravaActDelete(carriageId)
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
  async deleteBirikmaAct(carriageId) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.birikmaActdelete(carriageId)
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
  async updateCollectActFront(carriageId, obj) {
    try {
      const response = await privateInstance.patch(
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
  async updateCollectActBack(carriageId, obj) {
    try {
      const response = await privateInstance.patch(
        authEndpoints.collectActPostBack(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postWheelActBack(carriageId, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.wheelActPostBack(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postWheelActFront(carriageId, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.wheelActPostFront(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getWheelAll(params) {
    try {
      const response = await privateInstance.get(authEndpoints.wheelActGetAll, {
        params,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteWheelAct(carriageID) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.deleteActWheel(carriageID)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }

  // defestoskop
  async getDefestoskop(page) {
    try {
      const response = await privateInstance.get(
        authEndpoints.defestoskopList,
        { params: page }
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postDefestoskop(obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.postDefectoscope,
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteDefestoskop(carriageId) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.defestoskopId(carriageId)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async updateDefestoskop(carriageId, obj) {
    try {
      const response = await privateInstance.put(
        authEndpoints.defestoskopId(carriageId),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }

  // vu 53

  async getVu53All(params) {
    try {
      const response = await privateInstance.get(authEndpoints.getVu53All, {
        params,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postVu53Prihod(obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.postVu53Prihod,
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteVu53Prihod(id) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.vu53IDPrihod(id)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async updateVu53Prihod(id, obj) {
    try {
      const response = await privateInstance.put(
        authEndpoints.vu53IDPrihod(id),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu32All(params) {
    try {
      const response = await privateInstance.get(authEndpoints.vu32List, {
        params,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postVu32(id, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.vu32Id(id),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteVu32(id) {
    try {
      const response = await privateInstance.delete(authEndpoints.vu32Id(id));

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getAlSsignatures(params) {
    try {
      const response = await privateInstance.get(authEndpoints.signature, {
        params,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postSignsSignature(signatureSigns) {
    try {
      const response = await privateInstance.patch(
        authEndpoints.signatureSigns(signatureSigns)
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }

  async getVu54All(params) {
    try {
      const response = await privateInstance.get(authEndpoints.vu54All, {
        params,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async postVu54(obj) {
    try {
      const response = await privateInstance.post(authEndpoints.vu54All, obj);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteVu54(id) {
    try {
      const response = await privateInstance.delete(authEndpoints.vu54ById(id));

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async updateVu54(id, obj) {
    try {
      const response = await privateInstance.patch(
        authEndpoints.vu54ById(id),
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getReportData() {
    try {
      const response = await privateInstance.get(authEndpoints.generalReport);

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async createGeneralReport(obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.generalReportCreate,
        obj
      );

      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getUniqGeneralReport(id) {
    try {
      const response = await privateInstance.get(
        authEndpoints.generalReportCreate + `${id}/`
      );
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu31_Current(page) {
    try {
      const response = await privateInstance.get(authEndpoints.vu31CurrentAll, {
        params: page,
      });
      return { response };
    } catch (error) {
      return { error };
    }
  }

  async postVu31Current(id, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.vu31Current(id),
        obj
      );
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteVu31Current(id) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.vu31Current(id)
      );
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async updateVu31Current(id, obj) {
    try {
      const response = await privateInstance.patch(
        authEndpoints.vu31Current(id),
        obj
      );
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu31CurrentID(id) {
    try {
      const response = await privateInstance.get(authEndpoints.vu31Current(id));
      return { response };
    } catch (error) {
      return { error };
    }
  }
  // vu 36 current
  async postVu36Current(id, obj) {
    try {
      const response = await privateInstance.post(
        authEndpoints.vu36Current(id),
        obj
      );
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getVu36Current(page) {
    try {
      const response = await privateInstance.get(authEndpoints.vu36CurrentAll, {
        params: page,
      });
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async deleteVu36Current(id) {
    try {
      const response = await privateInstance.delete(
        authEndpoints.vu36Current(id)
      );
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async updateVu36Current(id, obj) {
    try {
      const response = await privateInstance.patch(authEndpoints.vu36Current(id), obj);
      return { response };
    } catch (error) {
      return { error };
    }
  }
}

export default UserApi;
