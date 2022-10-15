module.exports = {
    //
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 29,
        amountLimit: 900,
        apolloServer: {
          tracing: false,
        },
      },
    },
  };
