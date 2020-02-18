import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Pengguna from './pengguna';
import Toko from './toko';
import Produk from '../produk';

function Pengaturan(){
    return(
        <Switch>

            <Route path="/produk" component={Produk}/>
            <Route path="/pengaturan/pengguna" component={Pengguna}/>
            <Route path="/pengaturan/toko" component={Toko}/>
            <Redirect to="/pengaturan/pengguna"/>
        </Switch>
    )
}

export default Pengaturan;