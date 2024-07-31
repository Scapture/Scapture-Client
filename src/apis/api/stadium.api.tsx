/**
 * Stadium 관련 API
 */
import { CommonResponse } from '../dto/common.response';
import {
  defaultInstance,
  authFileInstance,
  authInstance,
} from '../utils/instance';

// 경기장 전체 조회
export const getStadiums = async (city: string, state: string) => {
  try {
    const res: CommonResponse = await defaultInstance.post(
      `api/stadium?city=${city}&state=${state}`,
    );
    return res;
  } catch (e: any) {
    return {
      status: e.response.status,
    };
  }
};

// 경기장 세부 조회
export const getStadiumDetail = async (stadiumId: number) => {
  try {
    const res: CommonResponse = await defaultInstance.get(
      `api/stadiums/${stadiumId}/detail`,
    );
    return res.data.data;
  } catch (e: any) {
    return {
      status: e.response.status,
    };
  }
};

// 경기장 운영 시간 조회
export const getStadiumDHours = async (fieldId: number, date: string) => {
  try {
    const res: CommonResponse = await defaultInstance.get(
      `api/stadiums/${fieldId}?date=${date}`,
    );
    return res.data.data;
  } catch (e: any) {
    return {
      status: e.response.status,
    };
  }
};

// 특정 운영 시간의 video 조회
export const getVideoScheduled = async (scheduleId: number) => {
  try {
    const res: CommonResponse = await defaultInstance.get(
      `api/videos/${scheduleId}`,
    );
    return res.data.data;
  } catch (e: any) {
    return {
      status: e.response.status,
    };
  }
};
