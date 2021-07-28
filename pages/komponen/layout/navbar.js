//import h from '../login'
// import s from '../../index'
import Link from 'next/link'
import React from "react"
export default function Navbar(){
    return(
<nav class="navbar navbar-expand-md navbar-dark bg-dark" >
    <div class="container"> <a class="navbar-brand" href="../../index">
        <i class="fa d-inline fa-lg fa-stop-circle"></i>
      <img src=''></img>
      </a> <button class="navbar-toggler navbar-toggler-right border-0"  type="button" data-toggle="collapse" data-target="#navbar10">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar10">
        <ul class="navbar-nav ml-auto">
          <a class="nav-link" href="/admin/datauser">Data User</a>
          <a class="nav-link" href="/admin/barang/databarang">Data Barang</a>
          <a class="nav-link" href="/admin/nota/datanota">Data Nota</a> 
               </ul> 
      
      
      </div>
      <a class="btn navbar-btn ml-md-2 text-dark"><a class="nav-link" href="/login">Masuk</a></a> 
      <a class="btn navbar-btn ml-md-2 text-dark"><a class="nav-link" href="/signup">Daftar</a></a> 
    </div>
  </nav>
     
    )
}