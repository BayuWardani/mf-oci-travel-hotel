import {Card} from '@oci-lib/ui'

import '@oci-lib/ui/dist/style.css'

export default function Root(props) {
  return (
    <>
    <div className='d-flex align-item-center justify-content-center mt-4'>
      <div className='col-md-4'>
        <Card title="Peringatan">
          <p>Pesan yang masuk sini adalah : <strong>Hello MF Hotel</strong></p>
          <small>
            <a href='/'>Dashboard</a>
          </small>
        </Card>
      </div>
    </div>
    </>
  )
}
