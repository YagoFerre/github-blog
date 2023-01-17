import { PostInfo } from './components/PostInfo'
import { useCallback, useEffect, useState } from 'react'
import { PostContent } from './components/PostContent'

import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

export interface IssuePage {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Post() {
  const [issuePage, setIssuePage] = useState<IssuePage>({} as IssuePage)
  const { id } = useParams()

  const loadIssuePage = useCallback(async () => {
    const response = await api.get(`/repos/YagoFerre/github-blog/issues/${id}`)
    setIssuePage(response.data)
  }, [issuePage])

  useEffect(() => {
    loadIssuePage()
  }, [])

  return (
    <div>
      <PostInfo issuePage={issuePage} />
      <PostContent content={issuePage.body} />
    </div>
  )
}
