import React, { useEffect, useState } from 'react'

export const QueryForm = ({ fetcher, children }) => {
    const [name, setName] = useState('')
    const [query, setQuery] = useState('')

    useEffect(() => {
      fetcher()
    }, [query])
    
    return (
        <form onSubmit={(e) => {
          e.preventDefault()
          setQuery(name)
        }}>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            {children}
          <button>Submit</button>
        </form>
    )
}