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
  }
]

const CodeBrowser = () => {
  const [language, setLanguage] = useState<string>(tabs[0].language)
  return (
    <div className="relative">
      <CodeViewer language={language} />
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
