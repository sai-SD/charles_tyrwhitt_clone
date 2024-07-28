import React,{useState,useEffect} from 'react'
import ProductCard from './ProductCard'
import './ProductCard.css'

const IndividualProduct = ({sort}) => {
  console.log(sort);
    // let arr = [{img:"https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw94487adb/hi-res/TRC0270DGY_MODEL_FULL.jpg?sw=860&sh=1080&sm=fit&q=42",
    //     name:"Ultimate Non-Iron Chinos-Dark Grey",
    //     price:"$ 99.00",
    // },
    // {img:"https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw94487adb/hi-res/TRC0270DGY_MODEL_FULL.jpg?sw=860&sh=1080&sm=fit&q=42",
    //     name:"Ultimate Non-Iron Chinos-Dark Grey",
    //     price:"$ 99.00",
    // },{img:"https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw94487adb/hi-res/TRC0270DGY_MODEL_FULL.jpg?sw=860&sh=1080&sm=fit&q=42",
    //     name:"Ultimate Non-Iron Chinos-Dark Grey",
    //     price:"$ 99.00",
    // },{img:"https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw94487adb/hi-res/TRC0270DGY_MODEL_FULL.jpg?sw=860&sh=1080&sm=fit&q=42",
    //     name:"Ultimate Non-Iron Chinos-Dark Grey",
    //     price:"$ 99.00",
    // },
    // {img:"https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw94487adb/hi-res/TRC0270DGY_MODEL_FULL.jpg?sw=860&sh=1080&sm=fit&q=42",
    //     name:"Ultimate Non-Iron Chinos-Dark Grey",
    //     price:"$ 99.00",
    // }]
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [last, setLast] = useState(0);
    // let [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams);
  
  
    async function getData() {
      let res = await fetch(`http://localhost:3000/products?_page=${page}&_per_page=12&_sort=${sort}`);
      let fetchedData = await res.json();
      setData(fetchedData.data);
      setLast(fetchedData.last)
      // console.log(fetchedData);
    }
  
    useEffect(() => {
      getData();
    }, [page,last,sort]);
  return (
    <>
    <div className='prod-div'>
        {
            data.map((prod,index)=>
                <ProductCard key={index} img={prod.imgSrc} name={prod.name} price={prod.price} id={prod.id} />
            )
        }
    </div>
    <button className='btn-page' disabled={page <= 1} onClick={()=>{setPage(page-1)}}>Prev</button>
    <button className='btn-page' disabled={page>=last} onClick={()=>{setPage(page+1)}}>Next</button>
    <h1 className='btn-page'>{page}</h1>
    </>
  )
}

export default IndividualProduct