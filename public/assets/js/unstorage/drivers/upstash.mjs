import { Redis } from "@upstash/redis";
import { defineDriver, normalizeKey, joinKeys } from "./utils/index.mjs";
const DRIVER_NAME = "upstash";
export default defineDriver(
  (options = {}) => {
    const base = normalizeKey(options?.base);
    const r = (...keys) => joinKeys(base, ...keys);
    let redisClient;
    const getClient = () => {
      if (redisClient) {
        return redisClient;
      }
      const url = options.url || globalThis.process?.env?.UPSTASH_REDIS_REST_URL;
      const token = options.token || globalThis.process?.env?.UPSTASH_REDIS_REST_TOKEN;
      redisClient = new Redis({ url, token, ...options });
      return redisClient;
    };
    const scan = async (pattern) => {
      const client = getClient();
      const keys = [];
      let cursor = "0";
      do {
        const [nextCursor, scanKeys] = await client.scan(cursor, {
          match: pattern,
          count: options.scanCount
        });
        cursor = nextCursor;
        keys.push(...scanKeys);
      } while (cursor !== "0");
      return keys;
    };
    return {
      name: DRIVER_NAME,
      getInstance: getClient,
      hasItem(key) {
        return getClient().exists(r(key)).then(Boolean);
      },
      getItem(key) {
        return getClient().get(r(key));
      },
      setItem(key, value, tOptions) {
        const ttl = tOptions?.ttl || options.ttl;
        return getClient().set(r(key), value, ttl ? { ex: ttl } : void 0).then(() => {
        });
      },
      removeItem(key) {
        return getClient().unlink(r(key)).then(() => {
        });
      },
      getKeys(_base) {
        return scan(r(_base, "*")).then(
          (keys) => base ? keys.map((key) => key.slice(base.length + 1)) : keys
        );
      },
      async clear(base2) {
        const keys = await scan(r(base2, "*"));
        if (keys.length === 0) {
          return;
        }
        return getClient().del(...keys).then(() => {
        });
      }
    };
  }
);
