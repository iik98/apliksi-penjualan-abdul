import React from 'react';
import {Switch, Route} from 'react-router-dom';
// komponen halaman private
import Pengaturan from './pengaturan';
import Produk from './produk';
import Transaksi from './transaksi';
import Home from './home';

function Pengguna(){
    return(
        <Switch>
            <Route path="/pengaturan" component={Pengaturan}/>
            <Route path="/produk" component={Produk}/>
            <Route path="/transaksi" component={Transaksi}/>
            <Route component={Home}/>
        </Switch>
    )
}

export default Pengguna;