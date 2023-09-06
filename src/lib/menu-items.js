const { cms } = require('./sanity/getMenuItems')

module.exports = async () => {
  const { allUseCasePage: useCases } = await cms().UseCasesPages()
  const { allResourcePage: resources } = await cms().ResourcesPages()
  const { allSolutionPage: solutions } = await cms().SolutionsPages()

  return {
    code: `module.exports = ${JSON.stringify({
      useCases,
      resources,
      solutions
    })}`
  }
}
