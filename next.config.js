module.exports = {
    // swcMinify: true,
    images: {
        domains: [
            "peach-planner-static.s3.ap-northeast-2.amazonaws.com",
            "sancleattachfile.s3.ap-northeast-2.amazonaws.com",
        ]
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            require("./scripts/sitemap-generator");
        }
        return config;
    },
}