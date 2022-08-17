import { useState } from 'react'
import Tab from './tab'
import CodeViewer from 'components/sections/common/code-viewer'

const tabs = [
  {
    language: 'js',
    title: 'Node.js'
  },
  {
    language: 'go',
    title: 'Go'
  },
  {
    language: 'python',
    title: 'Python'
  },
  {
    language: 'aspnet',
    title: 'ASP.Net'
  },
  {
    language: 'ruby',
    title: 'Ruby'
  }
]

export const snippets: Record<string, string> = {
  js: `const { jwtAuthz } = require("express-jwt-aserto")
const checkAuthz = jwtAuthz({ ... })
// ...
app.get("/protectPath/:param", checkJwt, checkAuthz, 
  async (req, res) => { ... }
)`,
  go: `func AsertoAuthorizer(authClient authorizer.AuthorizerClient, 
  policyID, policyRoot, decision string) *std.Middleware {
  mw := std.New(authClient, middleware.Policy{
      ID: policyID, Decision: decision },
  )
  mw.Identity.JWT().FromHeader("Authorization")
  mw.WithPolicyFromURL(policyRoot)
  return mw
}
asertoAuthorizer := AsertoAuthorizer(...)
router.Use(asertoAuthorizer.Handler)`,
  python: `from flask_aserto import AsertoMiddleware
# ...
@app.route('/protected_route/<parameter>', methods=['GET, POST'])
@aserto.authorize`,
  aspnet: `using Microsoft.AspNetCore.Authorization;
using Aserto.AspNetCore.Middleware.Policies;
using Aserto.AspNetCore.Middleware.Extensions;

public void ConfigureServices(IServiceCollection services) {
  services.AddAsertoAuthorization(options => 
    Configuration.GetSection("Aserto").Bind(options));
  services.AddAuthorization(options => {
    var policy = new AuthorizationPolicyBuilder(
      CookieAuthenticationDefaults.AuthenticationScheme);
    policy.AddRequirements(new AsertoDecisionRequirement());
    options.DefaultPolicy = policy.Build();
  });
  services.AddControllersWithViews();
}`,
  ruby: `require "aserto/rails"

# authorize single route
# GET /posts/:id
def show
  aserto_authorize!
  @post = Post.find(params[:id])
end`
}

const CodeBrowser = () => {
  const [language, setLanguage] = useState<string>(tabs[0].language)
  return (
    <div className="relative">
      <CodeViewer language={language} snippet={snippets[language]} />
      <div className="flex gap-[4px]">
        {tabs.map((t) => (
          <Tab
            key={t.language}
            active={language === t.language}
            language={t.title}
            imgUrl={`images/languages/${t.language}.svg`}
            onClick={() => setLanguage(t.language)}
          />
        ))}
      </div>
    </div>
  )
}

export default CodeBrowser
