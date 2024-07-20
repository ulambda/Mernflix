import React from 'react'
import titleStore from 'store/title'

export default function WatchPage() {
    const {setPageTitle} = titleStore();

    React.useEffect(() => {
        setPageTitle("Watch");
    }, []);

  return (
    <div>WatchPage</div>
  )
}
