
function createStorage(prefix = '', storage = localStorage) {
  class Storage {
    private storage = localStorage;
    private prefix = prefix;

    getKey(key: string) {
      return `${this.prefix}_${key}`.toUpperCase();
    }

    get(key: string, def: any = null) {
      const data = this.storage.getItem(this.getKey(key));
      if (data) {
        let storageData = JSON.parse(data);
        try {
          storageData = JSON.parse(data);
        } catch (e) {

        }
        if (storageData) {
          const { value, expire } = storageData;
          /**expire === null代表当前缓存不受过期时间影响 */
          if (expire === null || expire > Date.now()) {
            return value;
          }
          /** 移除无效数据*/
          this.remove(this.getKey(key));
          return def
        }
        return def
      }
    }

    set(key: string, value: any, expire: number | null = null) {
    }

    remove(key: string) {
      this.storage.removeItem(this.getKey(key));
    }
  }
}
