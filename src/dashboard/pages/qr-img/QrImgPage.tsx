import { Card } from '../../../shared/components';
import { WsOptions } from '../../../ws/components';
import type { ILoginResponse } from '../../types';

import './QrImgPage.css';

interface Props {
  loginInfo: ILoginResponse;
}

function QrImgPage() {
  return (
    <Card>
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-5'>
        <div className='card-content'>
          <WsOptions />
        </div>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0'>
        <div className='banner-img'>
          {/* <img
            src='{loginInfo.qrImage}'
            alt='Código QR de inicio de sesión'
            style={{
              display: loginInfo.loginSuccess ? 'none' : 'block',
            }}
            width='70%'
          /> */}
          <h1>Hello World</h1>
        </div>
      </div>
    </Card>
  );
}

export default QrImgPage;
