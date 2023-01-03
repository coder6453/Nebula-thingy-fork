const dbPromise = Ultraviolet.openDB('keyval-store', 1, {
    upgrade(db) {
        db.createObjectStore('keyval');
    },
});

self.storage = {
    async get(key) {
        return (await dbPromise).get('keyval', key);
    },
    
    async set(key, val) {
        return (await dbPromise).put('keyval', val, key);
    },
    
    async del(key) {
        return (await dbPromise).delete('keyval', key);
    },
}