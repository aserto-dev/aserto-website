import { CodeBlock, monokai } from 'react-code-blocks'

const languageSetting: Record<string, string> = {
  js: 'js',
  go: 'go',
  python: 'python',
  dotnet: 'java',
  aspnet: 'java',
  java: 'java',
  ruby: 'ruby',
  rego: 'puppet'
}

const CodeBrowser = ({
  language,
  snippet,
  className
}: {
  language: string
  snippet: string
  className?: string
}) => {
  const defaultLanguage = 'js'
  return (
    <div
      className={`codeblock w-full sm:w-[700px] h-[287px] bg-aserto-black my-[10px] text-sm items-center
      overflow-scroll border border-aserto-grey-70 rounded-[6px] p-[10px] scrollbar-hide ${className}`}
    >
      <CodeBlock
        language={languageSetting[language] ?? defaultLanguage}
        showLineNumbers={false}
        text={snippet}
        theme={monokai}
      />
    </div>
  )
}

export default CodeBrowser
