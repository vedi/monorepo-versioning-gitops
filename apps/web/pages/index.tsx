import { Button } from 'ui'

import pk from '../package.json'

export default function Web() {
  return (
    <section>
      <p>Current Web Version {pk.version}</p>
      <Button />
    </section>
  )
}
