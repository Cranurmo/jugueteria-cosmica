const PERSISTENCE_TYPES = {
    TYPE_MEM: 'MEMORY',
    TYPE_FILE: 'FILE SYSTEM',
    TYPE_MONGODB: 'MONGODB',
};

const config = {
    PORT: 7500,
    PERSISTENCE_TYPE: PERSISTENCE_TYPES.TYPE_MONGODB,
    MONGODB_CONNECTION_STR: 'mongodb+srv://jugueteria-cosmica:jugueteria-cosmica@cluster0.ab01hha.mongodb.net/jugueteria-cosmica-db',
    MONGODB_TIMEOUT: 2000   // Valor bajo para testing.
};

export {PERSISTENCE_TYPES, config as default};



