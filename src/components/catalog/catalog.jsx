import CatalogItem from '..//catalogItem/catalogItem';
import './catalog.scss'

function Catalog({data}) {
    return ( 
        <div className="container">

        <h1>Каталог</h1>

            {data.map((item) => {
                return <CatalogItem 
                type={item.type}
                quantity={item.quantity}
                size={item.size} 
                />
            })}
        </div>
     );
}

export default Catalog;