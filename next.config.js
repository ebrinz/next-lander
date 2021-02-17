module.exports = {
    webpack(config, { isServer }) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        if (!isServer) {
            config.node = {
              fs: 'empty'
            }
          };
        return config;
    }
};