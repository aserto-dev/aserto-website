const { cms } = require('./sanity/getMenuItems')

module.exports = async () => {
  const { allUseCasePage: useCases } = await cms().UseCasesPages()
  const { allResourcePage: resources } = await cms().ResourcesPages()

  return {
    code: `module.exports = ${JSON.stringify({ useCases, resources })}`
  }
}
