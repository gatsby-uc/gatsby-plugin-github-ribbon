const React = require(`react`)
const { withPrefix } = require(`gatsby`)

exports.onRenderBody = ({ setPreBodyComponents }, pluginOptions) => {
  const { project, position } = pluginOptions
  var imgStyle

  if (position === 'right') {
    imgStyle = {
      position: 'absolute',
      top: 0,
      right: 0,
      border: 0,
    }
  } else {
    imgStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      border: 0,
    }
  }

  setPreBodyComponents([
    <header
      key={`gatsby-plugin-github-ribbon-header`}>
      <a
        href={project}>
        <img
          style={imgStyle}
          src={withPrefix("/github_ribbon.png")}
          alt="Fork me on GitHub">
        </img>
      </a>
    </header>,
  ])
}