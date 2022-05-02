import { useState } from 'react'
import Tab from './tab'
import { CodeBlock, monokai } from 'react-code-blocks'

const snippets: Record<string, string> = {
  js: `const { jwtAuthz } = require("express-jwt-aserto")
const checkAuthz = jwtAuthz({ ... })
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
  java: `using Microsoft.AspNetCore.Authorization;
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
}`
}
const CodeBrowser = () => {
  const [language, setLanguage] = useState<string>('js')
  return (
    <div className="relative">
      <div
        className="codeblock w-full sm:w-[700px] h-[287px] bg-aserto-black my-[10px] text-sm
        items-center overflow-scroll border border-aserto-grey-70 rounded-[6px] p-[10px] scrollbar-hide"
      >
        <CodeBlock
          codeblock
          language={language}
          showLineNumbers={false}
          text={snippets[language]}
          theme={monokai}
        />
      </div>
      <div className="flex gap-[4px]">
        <Tab
          active={language === 'js'}
          language="Node.js"
          imgUrl="images/quickstarts/nodejs.svg"
          onClick={() => setLanguage('js')}
        />
        <Tab
          active={language === 'go'}
          language="Go"
          imgUrl="images/homepage/go.svg"
          onClick={() => setLanguage('go')}
        />
        <Tab
          active={language === 'python'}
          language="Python"
          imgUrl="images/homepage/python.svg"
          onClick={() => setLanguage('python')}
        />
        <Tab
          active={language === 'java'}
          language="ASP.Net"
          imgUrl="images/homepage/aspnet.svg"
          onClick={() => setLanguage('java')}
        />
      </div>
    </div>
  )
}

export default CodeBrowser
