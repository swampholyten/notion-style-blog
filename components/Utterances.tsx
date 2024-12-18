import styled from '@emotion/styled'
import { useEffect } from 'react'

function Utterances({ pageId, theme }: { pageId: string; theme: string }) {
  useEffect(() => {
    const anchor = document.getElementById('comments')
    const script = document.createElement('script')
    if (!anchor) return

    script.src = 'https://utteranc.es/client.js'
    script.id = 'utterances-script'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('repo', 'swampholyten/test')
    script.setAttribute('issue-term', 'og:title')
    script.setAttribute('theme', theme)
    script.setAttribute('label', '💬 Utterances')

    anchor.append(script)
    return () => {
      anchor.innerHTML = ''
    }
  }, [pageId, theme])

  return (
    <>
      <StyledWrapper id='comments'>
        <div className='utterances-frame'></div>
      </StyledWrapper>
    </>
  )
}

export default Utterances

const StyledWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: -4rem;
  }
`
