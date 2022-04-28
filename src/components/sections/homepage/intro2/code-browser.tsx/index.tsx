import { useState } from 'react'
import Container from '../../container'
import Tab from './tab'

const snippets: Record<string, string> = {
  nodejs: `const { jwtAuthz } = require("express-jwt-aserto");\nconst checkAuthz = jwtAuthz({ ... });\napp.get("/protectPath/:param", checkJwt, checkAuthz, async (req, res) => { ... }`,
  go: `func AsertoAuthorizer(authClient authorizer.AuthorizerClient, policyID, policyRoot, decision string) *std.Middleware {
    mw := std.New(
      authClient,
      middleware.Policy{
        ID:       policyID,
        Decision: decision,
      },
    )
  
    mw.Identity.JWT().FromHeader("Authorization")
    mw.WithPolicyFromURL(policyRoot)
    return mw
  }
  
  // ...
  
  asertoAuthorizer := AsertoAuthorizer(...)
  router.Use(asertoAuthorizer.Handler)`,
  python: `from flask_aserto import AsertoMiddleware
  # ...
  @app.route('/protected_route/<parameter>', methods=['GET, POST'])
  @aserto.authorize`,
  aspnet: `using Microsoft.AspNetCore.Authorization;
  using Aserto.AspNetCore.Middleware.Policies;
  using Aserto.AspNetCore.Middleware.Extensions;
  //...
  
  public void ConfigureServices(IServiceCollection services)
  {
      //...
      services.AddAsertoAuthorization(options => Configuration.GetSection("Aserto").Bind(options));
  
      services.AddAuthorization(options =>
      {
          var policy = new AuthorizationPolicyBuilder(CookieAuthenticationDefaults.AuthenticationScheme);
          policy.AddRequirements(new AsertoDecisionRequirement());
          options.DefaultPolicy = policy.Build();
      });
  
      services.AddControllersWithViews();
  }`
}
const CodeBrowser = () => {
  const [language, setLanguage] = useState<string>('nodejs')
  return (
    <Container className="my-8">
      <div className="w-full sm:w-[700px] h-[285px] bg-aserto-black my-[10px] items-center overflow-scroll border border-aserto-grey-70 rounded-[6px]">
        <pre>
          <code className="text-white border-0 bg-aserto-black">
            {snippets[language]}
          </code>
        </pre>
      </div>
      <div className="flex gap-[4px]">
        <Tab
          active={language === 'nodejs'}
          language="Node.js"
          imgUrl="images/quickstarts/nodejs.svg"
          onClick={() => setLanguage('nodejs')}
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
          active={language === 'aspnet'}
          language="ASP.Net"
          imgUrl="images/homepage/aspnet.svg"
          onClick={() => setLanguage('aspnet')}
        />
      </div>
    </Container>
  )
}

export default CodeBrowser
