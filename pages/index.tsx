import { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const handleError = (err, url, { shallow }) => {
      console.log(err)
      alert(err)
    }

    router.events.on('routeChangeError', handleError)
    return () => {
      router.events.off('routeChangeError', handleError)
    }
  }, [])

  return (
    <>
      <button onClick={() => router.push('/?foo=bar', undefined, { shallow: true })}>Test</button>
    </>
  )
}
