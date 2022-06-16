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
}`
}

const languageSetting: Record<string, string> = {
  js: 'js',
  go: 'go',
  python: 'python',
  dotnet: 'java',
  aspnet: 'java',
  java: 'java',
  ruby: 'ruby'
}

const CodeBrowser = ({ language }: { language: string }) => {
  const defaultLanguage = 'js'
  return (
    <div
      className="codeblock w-full sm:w-[700px] h-[287px] bg-aserto-black my-[10px] text-sm
      items-center overflow-scroll border border-aserto-grey-70 rounded-[6px] p-[10px] scrollbar-hide"
    >
      <CodeBlock
        codeblock
        language={languageSetting[language] ?? defaultLanguage}
        showLineNumbers={false}
        text={snippets[language] ?? snippets[defaultLanguage]}
        theme={monokai}
      />
    </div>
  )
}

export default CodeBrowser
