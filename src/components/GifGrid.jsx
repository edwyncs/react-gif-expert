import PropTypes from "prop-types"
import { GifCard, Iconos } from './';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);
    // Otra manera
    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, [ ])
    
  return (
    <>
        { images.length > 1 && (<h3>{category}</h3>)}
        {/* No existira el elemento hasta que lo quiera mostrar  */}
        {
            isLoading && ( <Iconos type = 'loading'/> ) //if corto
        }
        {
            images.length > 1 && (
                <div className='card-grid'>
                    {images.map((gif) => (
                        <GifCard 
                            key={gif.id}
                            {...gif}
                        />
                    ))}
                </div>
            )
        }
    </>
  )
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
