exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-joystick/,
              use: loaders.null(),
            },
            {
                test: /@react-three\/fiber/,
                use: loaders.null(),
            },
            {
                test: /@react-three\/drei/,
                use: loaders.null(),
            },
            {
                test: /@react-three\/cannon/,
                use: loaders.null(),
            }
          ],
        },
      })
    }
  }
