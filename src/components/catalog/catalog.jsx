import CatalogItem from '..//catalogItem/catalogItem';
import './catalog.scss'

function Catalog({data}) {
    return ( 
        <div className="catalog">
            <div className="container">
                {data.map((item) => {
                    return <CatalogItem 
                    type={item.type}
                    quantity={item.quantity}
                    size={item.size} 
                    />
                })}
            </div>
        </div>
     );
}

export default Catalog;