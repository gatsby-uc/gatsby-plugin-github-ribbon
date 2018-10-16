import { onRenderBody }from '../gatsby-ssr'

describe(`adds github ribbon to html`, () => {
  test.each`
  position
  ${`left`}
  ${`right`}
  `(`create html for injecting if config is set - $position`, async ( { position } ) => {

    //setup test data
    const pluginOptions = {
      project: `https://github.com/gatsbyjs/gatsby`,
      color: `red`,
      position: position,
    }

    const setPreBodyComponents = jest.fn()
    
    //fake test
    await onRenderBody(
      {
        setPreBodyComponents,
      },
      pluginOptions
    )

    expect(setPreBodyComponents).toMatchSnapshot()
    expect(setPreBodyComponents).toHaveBeenCalledTimes(1)

  })
})