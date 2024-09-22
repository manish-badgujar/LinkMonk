export default {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.experiments = {
                asyncWebAssembly: true,
                layers: true,
            };
        }
        return config;
    },
};
