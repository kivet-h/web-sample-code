import { Effect, Reducer, history, Subscription } from 'umi';
import { getDeviceList } from '@/services/global';
import { DruidLocalStorage } from '@/utils/storage';
import { StorageEnum } from '@/utils/enum';
import { Helper } from '@/utils/helper';

export interface IGlobalModelState {
  /** 设备列表数据 */
  deviceList: any[];
}

export interface IGlobalModel {
  namespace: 'global';
  state: IGlobalModelState;
  effects: {
    /** 获取设备列表数据 */
    getDeviceList: Effect;
  };
  reducers: {
    updateState: Reducer<IGlobalModel>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const GlobalModel: IGlobalModel = {
  namespace: 'global',

  state: {
    deviceList: [],
  },
  effects: {
    *getDeviceList({ payload, callback }, { call, put }) {
      const data = yield call(getDeviceList, payload) || [];
      yield put(Helper.createAction('updateState')({ organDeptList: data }));
      data.length && callback(data);
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {
    setup({ history }) {
      history.listen(({ pathname }) => {
        if (
          pathname !== '/login' &&
          !DruidLocalStorage.get(StorageEnum.TOKEN)
        ) {
          Helper.handleRedirect();
        }
      });
    },
  },
};

export default GlobalModel;
