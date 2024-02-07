
import axios from 'axios';
import React, {useEffect, useState} from 'react';


function Data() {
    const [makanan, setMakan] = useState([]); // State berfungsi untuk menyimpan

    const getAll = () => {
        axios // axios berfungsi untuk requst data melalui http
        .get(`http://localhost:3030/products`) //mengambil data dari ling tersebut
        .then((res) => {
            setMakan(res.data);
        })
        .catch((error) => {
            alert("terjadi kesalahan" + error);
        });
    };

    const deleteUser = async (id) => {

    }

    useEffect(() => {
    
        fetch("http://localhost:3030/products")
          .then((response) => response.json())
          .then((data) => setHrefCards(data))
          .catch((error) => console.error("Error fetching href cards:", error));
      }, []);
      
  return (
    <>
        
    </>
  )
}

export default Data