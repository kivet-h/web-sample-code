/*
 * @Description: 本地缓存
 */

interface IOptions {
  /** 存储仓库名称 */
  bucket?: string;
  /** 存储类型 */
  driver?: string;
  /** 前缀名称 */
  prefix?: string;
}

/**
 * 默认配置
 */
const defaultOptions = {
  bucket: 'storage',
  deiver: 'localStorage',
  prefix: 'shequ_',
};

/**
 * 存储类型
 */
const drivers = {
  LOCALSTORAGE: window.localStorage,
  SESSIONSTORAGE: window.sessionStorage,
};

/**
 * 获取数据类型
 * @param value
 */
const getType = (value: any) =>
  Object.prototype.toString.call(value).slice(8, -1);

class SQ_Storage {
  private defaults: {
    bucket: string;
    driver: string;
    prefix: string;
  };

  constructor({ ...options }: object) {
    this.defaults = {
      bucket: defaultOptions.bucket,
      driver: defaultOptions.deiver,
      prefix: defaultOptions.prefix,
      ...options,
    };
  }

  /**
   * 写入数据
   * @param key
   * @param value
   * @param options
   */
  set = (key: string, value: any, options?: IOptions) => {
    if (Array.isArray(key)) {
      options = this._getOptions(value);
      for (const i in key) {
        this._set(key[i].key, key[i].value, options);
      }
    } else {
      options = this._getOptions(options);
      this._set(key, value, options);
    }
  };

  /**
   * 读取数据
   * @param key
   * @param options
   */
  get = (key: string, options?: IOptions) => {
    key = this._getKey(key, options);
    options = this._getOptions(options);
    const bucket = this._getBucket(key, options);
    const value = this._getDriver(options).getItem(key);
    if (bucket) {
      if (value) {
        return bucket.type === 'String' ? value : JSON.parse(value);
      }
      this._remove(key, options);
      if (bucket.type === 'Array') {
        return [];
      }
      return null;
    }
    this._remove(key, options);
    return null;
  };

  /**
   * 删除数据
   * @param key
   * @param options
   */
  remove = (key: string | string[], options?: IOptions) => {
    options = this._getOptions(options);
    if (Array.isArray(key)) {
      for (const i in key) {
        this._remove(key[i], options);
      }
    } else {
      this._remove(key, options);
    }
  };

  /**
   * 删除所有数据
   * @param options
   */
  removeAll = (options?: IOptions) => {
    if (options) {
      if (options.driver) {
        this._getDriver(options).clear();
      } else {
        this._clear();
      }
    } else {
      this._clear();
    }
  };

  /** 设置缓存 */
  private _set = (key: string, value: string, options?: IOptions) => {
    key = this._getKey(key, options);
    const driver = this._getDriver(options);
    const dataType = getType(value);
    this._setBucket(key, dataType, options);
    if (dataType === 'String' || dataType === 'Number') {
      driver.setItem(key, value);
    } else {
      driver.setItem(key, JSON.stringify(value));
    }
  };

  /**
   * 获取传入时配置信息
   * @param options
   * @returns 若传入时有配置过，配置信息与默认配置合并，返回合并后的配置
   */
  private _getOptions = (options?: IOptions) => {
    if (options) {
      return (Object as any).assign({}, this.defaults, options);
    }
    return this.defaults;
  };

  /**
   * 从配置中获取当前缓存类型
   * @param options
   * @returns 如果使用时传入了存储类型，则使用传入的类型配置（options.driver），否则使用默认配置
   */
  private _getDriver = (options?: IOptions) => {
    const driver = options ? options.driver : this.defaults.driver;
    if (
      /^(ls|local|localStorage)$/.test(String(driver)) ||
      /^(ss|session|sessionStorage)$/.test(String(driver))
    ) {
      return /^(ls|local|localStorage)$/.test(String(driver))
        ? drivers.LOCALSTORAGE
        : drivers.SESSIONSTORAGE;
    }
    throw new Error(
      'storeType only support [ls/local/localStorage/ss/session/sessionStorage]!',
    );
  };

  private _getKey = (key: string, options?: IOptions) => {
    return options
      ? `${options.prefix}${key}`
      : `${this.defaults.prefix}${key}`;
  };

  private _bucket = (options?: any) => {
    let bucket: any;
    bucket = this._getDriver(options).getItem(options.bucket);
    return bucket ? JSON.parse(bucket) : {};
  };

  private _setBucket = (key: string, type: string, options: any) => {
    const bucket = this._bucket(options);
    bucket[key] = {
      type,
    };
    this._getDriver(options).setItem(options.bucket, JSON.stringify(bucket));
  };

  private _getBucket = (key: string, options: any) => {
    const bucket = this._bucket(options);
    if (bucket[key]) {
      return bucket[key];
    }
    return null;
  };

  private _removeBucket = (key: string, options: any) => {
    const bucket = this._bucket(options);
    delete bucket[key];
    this._getDriver(options).setItem(options.bucket, JSON.stringify(bucket));
  };

  private _remove = (key: string, options: any) => {
    key = this._getKey(key, options);
    this._removeBucket(key, options);
    this._getDriver(options).removeItem(key);
  };

  private _clear = () => {
    drivers.LOCALSTORAGE.clear();
    drivers.SESSIONSTORAGE.clear();
  };
}

const DruidLocalStorage = new SQ_Storage({ bucket: 'Storage_sq' });
const DruidSessionStorage = new SQ_Storage({
  bucket: 'Storage_sq',
  driver: 'sessionStorage',
});

export { SQ_Storage, DruidLocalStorage, DruidSessionStorage };
